import {dispatchActionType, ProfilePageType} from "./State";

export const profileReducer = (state: ProfilePageType, action: dispatchActionType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: 1,
                message: action.payload.postMessage,
                likesCount: 7
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        }
        case "UPDATE-NEW-POST-TEXT": {
            return state.newPostText = action.payload.newText
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
