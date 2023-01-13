import {addPostAC, profileReducer, updateNewPostTextAC} from "./profileReducer";
import {dialogsReducer, sendNewMessageTextAC, updateNewMessageTextAC} from "./dialogsReducer";

export type postsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: postsType[]
    newPostText: string
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

export type StoreType = {
    _state: stateType
    rerenderEntireTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => stateType
    dispatch: (action: dispatchActionType) => void
}

export type dispatchActionType = addPostActionType | updateNewPostActionType | sendNewMessageTextACType | updateNewMessageTextACType

type addPostActionType = ReturnType<typeof addPostAC>

type updateNewPostActionType = ReturnType<typeof updateNewPostTextAC>

type sendNewMessageTextACType = ReturnType<typeof sendNewMessageTextAC>

type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

// export const store: StoreType = {
//     _state: {
//         ProfilePage: {
//             posts: [
//                 {id: 1, message: 'post1', likesCount: 7},
//                 {id: 2, message: 'post2', likesCount: 2},
//                 {id: 3, message: 'post3', likesCount: 4},
//             ],
//             newPostText: ''
//         },
//
//         DialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Alex'},
//                 {id: 2, name: 'Andrew'},
//                 {id: 3, name: 'Maxim'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hi, have a good day!!'},
//                 {id: 2, message: 'Go to the DREAM'},
//                 {id: 3, message: 'Good luck'},
//             ],
//             newMessageText: ''
//         },
//     },
//     rerenderEntireTree() {
//     },
//     subscribe(callback) {
//         this.rerenderEntireTree = callback;
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         profileReducer(this._state.ProfilePage, action)
//         dialogsReducer(this._state.DialogsPage, action)
//         this.rerenderEntireTree()
//     }
// }