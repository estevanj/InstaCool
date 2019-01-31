import { AnyAction, Dispatch } from 'redux';

import { firestore } from 'firebase';
import { IServices } from 'src/services';
import { download } from '../utils'

const START = 'post/fetch-start'
const SUCCESS = 'post/fetch-success'
const ERROR = 'post/fetch-error'
const ADD = 'post/add'

export interface IData {
    [key: string]: {
        comment: string,
        createdAt: firestore.Timestamp
        userId: string,
        imageUrl: string
    }
}


const fetchStart = () => ({
    type: START,
})

const fetchSuccess = (payload: IData) => ({
    payload,
    type: SUCCESS,
})

const fetchError = (error: Error) => ({
    error,
    type: ERROR,
})

const add = (payload:any) => ({
    payload,
    type: ADD
})


const initialState = {
    data: {},
    fetched: false,
    fetching: false,
}

export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case START:
            return {
                ...state,
                fetching: true,
            }
            break;
        case SUCCESS:
            return {
                ...state,
                data: action.payload,
                fetched: true,
                fetching: false
            }
            break;
        case ERROR:
            return {
                ...state,
                data: action.payload,
                fetching: false
            }
            break;
        case ADD:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                }
            }
            break;
        default:
            return state
            break;
    }
    return state

}

export const fetchPosts = () =>
    async (dispatch: Dispatch, getState: () => any, { db, storage }: IServices) => {
        dispatch(fetchStart())
        try {
            const snaps = await db.collection('posts').get()
            const posts = {}
            snaps.forEach(x => posts[x.id] = x.data());
            const imgIds = await Promise.all(Object.keys(posts)
                .map(async x => {
                    const ref = storage.ref(`posts/${x}.jpg`);
                    const url = await ref.getDownloadURL();
                    return [x, url]
                }))
            const keyedImages = {}
            imgIds.forEach(x => keyedImages[x[0]] = x[1]);
            Object.keys(posts).forEach(x => posts[x] = {
                ...posts[x],
                imageURL: keyedImages[x]
            })
            dispatch(fetchSuccess(posts))
        } catch (e) {
            dispatch(fetchError(e))
        }
    }


export const like = (id: string) =>
    async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
        if (!auth.currentUser) {
            return;
        }
        const token = await auth.currentUser.getIdToken()
        await fetch(`/api/posts/${id}/like`, {
            headers: {
                authorization: token
            }
        })

    }

export const Share = (id: string) =>
    async (dispatch: Dispatch, getState: () => any, { auth,db, storage }: IServices) => {
        if (!auth.currentUser) {
            return;
        }
        const token = await auth.currentUser.getIdToken()
       const result= await fetch(`/api/posts/${id}/share`, {
            headers: {
                authorization: token
            }
        })

        const url = await storage.ref(`posts/${id}.jpg`).getDownloadURL()
        const blob = await download(url);
        const { id: postId }: any = await result.json()
        const ref =storage.ref(`posts/${postId}.jpg`)
        await ref.put(blob)
        const imageUrl = await ref.getDownloadURL()
        const snap = await db.collection('posts').doc(postId).get()
       dispatch(add({[snap.id] : {
           ...snap.data(),
           imageUrl,
        } } as IData))
    }