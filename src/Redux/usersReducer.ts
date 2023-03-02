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
    currentPage: 1,
    isFetching: false,
    toggleFollowing: false
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
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.payload.isFetching}
        }
        case 'FOLLOWING-IN-PROGRESS': {
            return {...state, isFetching: action.payload.toggleFollowing}
        }
        default: {
            return state
        }
    }
}

type usersReducerActionType = followACType | unfollowACType | setUsersACType | setPageACType | setTotalUsersCountACType | isFetchingACType | followingInProgressACType

type followACType = ReturnType<typeof follow>

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

type unfollowACType = ReturnType<typeof unfollow>

export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

type setUsersACType = ReturnType<typeof setUsers>

export const setUsers = (users: UsersType[]) => {
return {
    type: 'SET-USERS',
    payload: {
        users
    }
} as const
}

type setPageACType = ReturnType<typeof setPage>
export const setPage = (page: number) => {
    return {
        type: 'SET-PAGE',
        payload: {
            page
        }
    } as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalUsersCount
        }
    } as const
}

type isFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

type followingInProgressACType = ReturnType<typeof followingInProgress>
export const followingInProgress = (toggleFollowing: boolean) => {
    return {
        type: 'FOLLOWING-IN-PROGRESS',
        payload: {
            toggleFollowing
        }
    } as const
}
