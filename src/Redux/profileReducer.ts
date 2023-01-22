export type postsType = {
    id: number
    message: string
    likesCount: number
}

type ProfileReducerActionType = addPostActionType | updateNewPostActionType

type addPostActionType = ReturnType<typeof addPostAC>

type updateNewPostActionType = ReturnType<typeof updateNewPostTextAC>

const initialState = {
    posts: [
        {id: 1, message: 'post1', likesCount: 7},
        {id: 2, message: 'post2', likesCount: 2},
        {id: 3, message: 'post3', likesCount: 4},
    ] as postsType[],
    newPostText: ''
}

export type InitialStateProfileType = typeof initialState

export const profileReducer = (state: InitialStateProfileType = initialState, action: ProfileReducerActionType): InitialStateProfileType => {
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
