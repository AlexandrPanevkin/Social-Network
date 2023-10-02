import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

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
export type InitialStateUsersType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

const initialState = {
    users: [] as UsersType[],
    pageSize: 5,
    totalUsersCount: 25,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}


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
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.payload.isFetching ?
                    [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        }
        default: {
            return state
        }
    }
}

type usersReducerActionType =
    followACType
    | unfollowACType
    | setUsersACType
    | setPageACType
    | setTotalUsersCountACType
    | isFetchingACType
    | followingInProgressACType

type followACType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

type unfollowACType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userId: number) => {
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
export const followingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        payload: {
            isFetching,
            userId
        }
    } as const
}


export const requestUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        const data = await usersAPI.requestUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(followingInProgress(true, userId))
        const response = await usersAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(followingInProgress(false, userId))
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(followingInProgress(true, userId))
        const response = await usersAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(followingInProgress(false, userId))
    }
}