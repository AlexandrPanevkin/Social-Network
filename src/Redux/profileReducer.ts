import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type postsType = {
    id: number
    message: string
    likesCount: number
}

export type PhotosType = {
    small: string
    large: string
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

type ProfileReducerActionType = addPostActionType | updateNewPostActionType | setUserProfileType

type addPostActionType = ReturnType<typeof addPostAC>

type updateNewPostActionType = ReturnType<typeof updateNewPostTextAC>

type setUserProfileType = ReturnType<typeof setUserProfile>

const initialState = {
    posts: [
        {id: 1, message: 'post1', likesCount: 7},
        {id: 2, message: 'post2', likesCount: 2},
        {id: 3, message: 'post3', likesCount: 4},
    ] as postsType[],
    newPostText: '',
    profile: null as ProfileType | null
}

export type InitialStateProfileType = typeof initialState

export const profileReducer = (state: InitialStateProfileType = initialState, action: ProfileReducerActionType): InitialStateProfileType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: Math.random(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}

        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.payload.newText}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile}
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

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profile
        }
    } as const
}
export const getUserProfile = (userId: string) => (dispatch: Dispatch<any>) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
