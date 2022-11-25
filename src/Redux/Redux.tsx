import {rerenderEntireTree} from "../render";

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
}

export type stateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
}


export const state: stateType = {
    ProfilePage: {
        posts: [
            {id: 1, message: 'post1', likesCount: 7},
            {id: 2, message: 'post2', likesCount: 2},
            {id: 3, message: 'post3', likesCount: 4},
        ],
        newPostText: ''
    },

    DialogsPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Maxim'},
        ],
        messages: [
            {id: 1, message: 'Hi, have a good day!!'},
            {id: 2, message: 'Go to the DREAM'},
            {id: 3, message: 'Good luck'},
        ]
    },


}

export const addPost = (postMessage: string) => {
    const newPost: postsType = {
        id: 4,
        message: postMessage,
        likesCount: 0
    }
    state.ProfilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: any) => {
    state.ProfilePage.newPostText = newText
    rerenderEntireTree(state)
}


