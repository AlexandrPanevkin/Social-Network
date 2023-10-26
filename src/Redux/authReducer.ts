import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type AuthReducerActionType = setAuthUserDataType

export type setAuthUserDataType = ReturnType<typeof setAuthUserData>

const SET_AUTH_USER_DATA = "app/auth/SET-AUTH-USER-DATA"

const initialState = {
    userId: NaN,
    email: '',
    login: '',
    isAuth: false
}

export type InitialStateAuthType = typeof initialState

export const authReducer = (state: InitialStateAuthType = initialState, action: AuthReducerActionType): InitialStateAuthType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {...state, ...action.payload}
        }

        default: {
            return state
        }
    }
}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}
export const logout = () => async (dispatch: Dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(NaN, '', '', false))
    }

}
