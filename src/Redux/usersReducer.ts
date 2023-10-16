import {AnyAction, Dispatch} from "redux";
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

const initialState = {
    users: [] as UsersType[],
    pageSize: 5,
    totalItemsCount: 25,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,
}

export type InitialStateUsersType = typeof initialState;

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
            return {...state, totalItemsCount: action.payload.totalItemsCount}
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
export const setTotalUsersCount = (totalItemsCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalItemsCount
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

const followUnfollow = async (dispatch: Dispatch, userId: number, apiMethod: Promise<any>, actionCreator: (userId: number) => AnyAction) => {
    dispatch(followingInProgress(true, userId))
    const response = await apiMethod
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(followingInProgress(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        await followUnfollow(dispatch, userId, usersAPI.follow(userId), followSuccess)
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(followingInProgress(true, userId))
        await followUnfollow(dispatch, userId, usersAPI.unfollow(userId), unfollowSuccess)
    }
}