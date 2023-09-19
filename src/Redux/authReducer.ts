import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type AuthReducerActionType = setAuthUserDataType

type setAuthUserDataType = ReturnType<typeof setAuthUserData>

const initialState = {
    userId: NaN,
    email: '',
    login: '',
    isAuth: false
}

export type InitialStateAuthType = typeof initialState

export const authReducer = (state: InitialStateAuthType = initialState, action: AuthReducerActionType): InitialStateAuthType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA": {
            return {...state, ...action.payload}
        }

        default: {
            return state
        }
    }
}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}
export const logout = () => (dispatch: Dispatch<any>) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(NaN, '', '', false))
        }
    })
}
