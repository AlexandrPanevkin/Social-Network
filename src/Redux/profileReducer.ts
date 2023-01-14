import {postsType} from "./reduxStore";

type initialStateType = {
    posts: postsType[],
    newPostText:string
}

type ProfileReducerActionType = addPostActionType | updateNewPostActionType

type addPostActionType = ReturnType<typeof addPostAC>

type updateNewPostActionType = ReturnType<typeof updateNewPostTextAC>

const initialState: initialStateType = {
    posts: [
        {id: 1, message: 'post1', likesCount: 7},
        {id: 2, message: 'post2', likesCount: 2},
        {id: 3, message: 'post3', likesCount: 4},
    ],
    newPostText: ''
}

export const profileReducer = (state: initialStateType =initialState, action: ProfileReducerActionType): initialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: Math.random(),
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

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
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
