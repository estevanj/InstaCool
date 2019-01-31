import * as express from 'express';
import * as admin from 'firebase-admin';
import { X_OK, SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';
import { WriteResult } from '@google-cloud/firestore';

interface IRequest extends express.Request {
  user: {
    uid: string
    email: string
    role: string
  }
}
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
})
const db = admin.firestore();
db.settings({timestampsInSnapshots:true})
const auth = admin.auth();
export default () => {
  const app = express()
  app.use(async (req, res, next) => {
    const token = req.headers.authorization
    try {
      const { uid, email } = await auth.verifyIdToken(token)
      const snap = await db.collection('users').doc(uid).get()
      const user = snap.data()
      Object.assign(req, {
        user: {
          ...user,
          uid,
          email
        }
      })
      next()
    } catch (error) {
      res.status(403).send('Error al autorizar')
    }

  })

  app.get('/posts/:postId/like', async (req: IRequest, res) => {
    const { uid } = req.user
    const { postId } = req.params
    const snaps = await db.collection('likes').where('userId', '==', uid)
      .where('postId', '==', postId).limit(1).get()
    const result:any ={}
    snaps.forEach(x => Object.assign(result, { ...x.data(), id: x.id }))

    if (result.id) {
      await db.collection('likes').doc(result.id).delete()
    }
    if (!result.id) {
      await db.collection('likes').doc().set({
        userId: uid,
        postId,
        createAt : new Date(),
      })
    }

    res.sendStatus(204)
  })


  app.get('/posts/:postId/share', async (req: IRequest, res) => {
    const { uid } = req.user
    const { postId } = req.params
    
    const snaps = await db.collection('posts').doc(postId).get()
    const post = snaps.data()
    const result =await db.collection('post').add({
      ...post,
      userId: uid,
    })
    res.send({id:result.id})
  })

  return app
} 