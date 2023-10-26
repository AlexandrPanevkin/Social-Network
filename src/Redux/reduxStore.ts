import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer, ProfileReducerActionType} from "./profileReducer";
import {dialogsReducer, sendNewMessageTextType} from "./dialogsReducer";
import {usersReducer, usersReducerActionType} from "./usersReducer";
import {authReducer, setAuthUserDataType} from "./authReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {FormAction, reducer as formReducer} from 'redux-form';
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer

})

type ActionsType =
    setAuthUserDataType
    | sendNewMessageTextType
    | ProfileReducerActionType
    | usersReducerActionType

export type StateType = ReturnType<typeof rootReducer>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, ActionsType | FormAction>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, StateType, unknown, A>

export const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

