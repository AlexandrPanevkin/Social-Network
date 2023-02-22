import {addPostAC, profileReducer, updateNewPostTextAC} from "./profileReducer";
import {dialogsReducer, sendNewMessageText, updateNewMessageText} from "./dialogsReducer";




// export type ProfilePageType = {
//     posts: postsType[]
//     newPostText: string
// }
//
// export type DialogsPageType = {
//     dialogs: DialogsType[]
//     messages: MessagesType[]
//     newMessageText: string
// }
//
// export type stateType = {
//     ProfilePage: ProfilePageType
//     DialogsPage: DialogsPageType
// }

// export type StoreType = {
//     _state: stateType
//     rerenderEntireTree: () => void
//     subscribe: (callback: () => void) => void
//     getState: () => stateType
//     dispatch: (action: dispatchActionType) => void
// }

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