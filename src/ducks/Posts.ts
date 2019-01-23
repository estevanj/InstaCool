import { AnyAction, Dispatch } from 'redux';

import { firestore } from 'firebase';
import { IServices } from 'src/services';

const START = 'post/fetch-start'
const SUCCESS = 'post/fetch-success'
const ERROR = 'post/fetch-error'

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
                const keyedImages ={}
                imgIds.forEach(x => keyedImages[x[0]]= x[1]);                    
            Object.keys(posts).forEach(x =>posts[x] = {
                ...posts[x],
                imageURL:keyedImages[x]
            })
            dispatch(fetchSuccess(posts))
        } catch (e) {
            dispatch(fetchError(e))
        }
    }