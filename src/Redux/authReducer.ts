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
            return {...state, ...action.payload, isAuth: true}
        }

        default: {
            return state
        }
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        payload: {
            userId,
            email,
            login
        }
    } as const
}
