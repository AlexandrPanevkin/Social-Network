import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";

export type AuthReducerActionType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>

const initialState = {
    userId: NaN,
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: ''
}

export type InitialStateAuthType = typeof initialState

export const authReducer = (state: InitialStateAuthType = initialState, action: AuthReducerActionType): InitialStateAuthType => {
    switch (action.type) {
        case "app/auth/SET-AUTH-USER-DATA":
        case 'GET-CAPTCHA-URL-SUCCESS': {
            return {...state, ...action.payload}
        }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: "app/auth/SET-AUTH-USER-DATA",
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}

export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: 'GET-CAPTCHA-URL-SUCCESS',
        payload: {
            captchaUrl
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

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: Dispatch<any>) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
    }
}
export const logout = () => async (dispatch: Dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(NaN, '', '', false))
    }

}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccess(response.data.url))
}