export type UsersType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    },
    status: string
    followed: boolean
}

const initialState = {
    users: [
    ] as UsersType[],
    pageSize: 4,
    totalUsersCount: 25,
    currentPage: 3
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
            return {...state, users: [...action.payload.users]}
        }
        case "SET-PAGE": {
            return {...state, currentPage: action.payload.page}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        default: {
            return state
        }
    }
}

type usersReducerActionType = followACType | unfollowACType | setUsersACType | setPageACType | setTotalUsersCountACType

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

type setPageACType = ReturnType<typeof setPageAC>
export const setPageAC = (page: number) => {
    return {
        type: 'SET-PAGE',
        payload: {
            page
        }
    } as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalUsersCount
        }
    } as const
}
