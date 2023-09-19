import {Dispatch} from "redux";
import {getAuthUserData} from "./authReducer";

export type AppReducerActionType = initializedSuccessType

type initializedSuccessType = ReturnType<typeof initializedSuccess>

const initialState = {
    isInitialized: false
}

export type InitialStateAppType = typeof initialState

export const appReducer = (state: InitialStateAppType = initialState, action: AppReducerActionType): InitialStateAppType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS": {
            return {...state, isInitialized: true}
        }

        default: {
            return state
        }
    }
}

export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED-SUCCESS'
    } as const
}

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}