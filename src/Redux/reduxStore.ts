import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer

})

export type StateType = ReturnType <typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));