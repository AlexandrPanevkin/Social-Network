import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export type postsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: postsType[]
    newPostText: string
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

export type stateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
}

export type StoreType =typeof store

const reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer
})

export const store = createStore(reducers);