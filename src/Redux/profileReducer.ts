import {dispatchActionType, postsType, ProfilePageType} from "./Store";

type initialStateType = {
    posts: postsType[],
    newPostText:string
}
const initialState: initialStateType = {
    posts: [
        {id: 1, message: 'post1', likesCount: 7},
        {id: 2, message: 'post2', likesCount: 2},
        {id: 3, message: 'post3', likesCount: 4},
    ],
    newPostText: ''
}

export const profileReducer = (state: initialStateType =initialState, action: dispatchActionType): initialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: 1,
                message: state.newPostText,
                likesCount: 7
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        }
        case "UPDATE-NEW-POST-TEXT": {
            state.newPostText = action.payload.newText
            return state
        }
        default: {
            return state
        }
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            postMessage: newPostText
        }
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        payload: {
            newText
        }
    } as const
}
