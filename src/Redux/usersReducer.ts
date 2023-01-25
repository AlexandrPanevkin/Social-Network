export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: string
}

const initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d',
            followed: true,
            fullName: 'Alex',
            status: 'I am boss',
            location: 'Minsk'
        },
        {
            id: 2,
            photoUrl: 'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d',
            followed: false,
            fullName: 'Max',
            status: 'I am boss too',
            location: 'Moscow'
        },
        {
            id: 3,
            photoUrl: 'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d',
            followed: true,
            fullName: 'Andrew',
            status: 'Yes, I am boss',
            location: 'London'
        },

    ] as UsersType[],
}

export type InitialStateUsersType = typeof initialState

export const usersReducer = (state: InitialStateUsersType = initialState, action: usersReducerActionType): InitialStateUsersType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default: {
            return state
        }
    }
}

type usersReducerActionType = followACType | unfollowACType | setUsersACType

type followACType = ReturnType<typeof followAC>

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

type unfollowACType = ReturnType<typeof unfollowAC>

export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

type setUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: UsersType[]) => {
return {
    type: 'SET-USERS',
    payload: {
        users
    }
} as const
}

