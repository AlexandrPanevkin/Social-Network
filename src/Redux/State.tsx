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

export const store: StoreType = {
    _state: {
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
            ],
            newMessageText: ''
        },


    },
    rerenderEntireTree() {
    },
    subscribe(callback) {
        this.rerenderEntireTree = callback;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 1,
                message: action.payload.postMessage,
                likesCount: 7
            }
            this._state.ProfilePage.posts.unshift(newPost)
            this._state.ProfilePage.newPostText = ''
            this.rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.ProfilePage.newPostText = action.payload.newText
            this.rerenderEntireTree()
        } else if (action.type === 'SEND-NEW-MESSAGE-TEXT') {
            const newMessage = {
                id: 1,
                message: action.payload.newMessageText
            }
            this._state.DialogsPage.messages.push(newMessage)
            this._state.DialogsPage.newMessageText = ''
            this.rerenderEntireTree()
        } else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.DialogsPage.newMessageText = action.payload.message
            this.rerenderEntireTree()
        }
    }
}

export type dispatchActionType =
    addPostActionType
    | updateNewPostActionType
    | sendNewMessageTextACType
    | updateNewMessageTextACType

type addPostActionType = ReturnType<typeof addPostAC>

type updateNewPostActionType = ReturnType<typeof updateNewPostTextAC>

type sendNewMessageTextACType = ReturnType<typeof sendNewMessageTextAC>

type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

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

export const sendNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'SEND-NEW-MESSAGE-TEXT',
        payload: {
            newMessageText
        }
    } as const
}

export const updateNewMessageTextAC = (messageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        payload: {
            message: messageText
        }
    } as const
}



