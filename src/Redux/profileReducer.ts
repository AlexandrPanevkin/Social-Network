import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {AppThunkType, StateType} from "./reduxStore";
import {stopSubmit} from "redux-form";
import {findContactsInError} from "../utils/findContactsInError";

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
    userId?: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos?: PhotosType
    aboutMe?: string
}

export type ProfileReducerActionType = addPostActionType | setUserProfileType | setStatusType | uploadPhotoType

type addPostActionType = ReturnType<typeof addPostAC>

type setUserProfileType = ReturnType<typeof setUserProfile>

type setStatusType = ReturnType<typeof setStatus>

type uploadPhotoType = ReturnType<typeof uploadPhoto>

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
        case "UPLOAD-PHOTO": {
            return {
                ...state, profile: {
                    ...state.profile, photos: action.payload.photos
                } as ProfileType
            }
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
export const uploadPhoto = (photos: PhotosType) => {
    return {
        type: 'UPLOAD-PHOTO',
        payload: {
            photos
        }
    } as const
}

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateProfileStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const updatePhoto = (file: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateProfilePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(uploadPhoto(response.data.data.photos))
    }
}

export const updateProfile = (formData: ProfileType): AppThunkType => async (dispatch, getState) => {
    const data = await profileAPI.updateProfile(formData)
    const userId = getState().auth.userId
    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0] }))
        return Promise.reject(data.messages[0])
    }
}