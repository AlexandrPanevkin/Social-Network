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

export type StoreType = {
    _state: stateType
    updateNewPostText: (newText: string) => void
    rerenderEntireTree: () => void
    addPost: (postMessage: string) => void
    subscribe: (callback: () => void) => void
    getState: () => stateType
    // dispatch: (action: any) => void
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
            ]
        },


    },
    rerenderEntireTree() {
    },
    updateNewPostText(newText: string) {
        this._state.ProfilePage.newPostText = newText
        this.rerenderEntireTree()
    },
    addPost(postMessage: string) {
        const newPost = {
            id: 1,
            message: postMessage,
            likesCount: 7
        }
        this._state.ProfilePage.posts.push(newPost)
        this._state.ProfilePage.newPostText = ''
        this.rerenderEntireTree()
    },
    subscribe(callback) {
        this.rerenderEntireTree = callback;
    },
    getState() {
        return this._state
    },
    // dispatch(action) {
    //     if (action.type === 'ADD-POST') {
    //         const newPost = {
    //             id: 1,
    //             message: action.postMessage,
    //             likesCount: 7
    //         }
    //         this._state.ProfilePage.posts.push(newPost)
    //         this._state.ProfilePage.newPostText = ''
    //         this.rerenderEntireTree()
    //     }
    // }
}



