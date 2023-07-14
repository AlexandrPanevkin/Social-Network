import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

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

type ProfileReducerActionType = addPostActionType | setUserProfileType | setStatusType

type addPostActionType = ReturnType<typeof addPostAC>

type setUserProfileType = ReturnType<typeof setUserProfile>

type setStatusType = ReturnType<typeof setStatus>

const initialState = {
    posts: [
        {id: 1, message: 'post1', likesCount: 7},
        {id: 2, message: 'post2', likesCount: 2},
        {id: 3, message: 'post3', likesCount: 4},
    ] as postsType[],
    newPostText: '',
    profile: null as ProfileType | null,
    status: ''
}

export type InitialStateProfileType = typeof initialState

export const profileReducer = (state: InitialStateProfileType = initialState, action: ProfileReducerActionType): InitialStateProfileType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: Math.random(),
                message: action.newPost,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}

        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.payload.status}
        }
        default: {
            return state
        }
    }
}

export const addPostAC = (newPost: string) => {
    return {
        type: 'ADD-POST',
        newPost
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

export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        payload: {
            status
        }
    } as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateProfileStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}


