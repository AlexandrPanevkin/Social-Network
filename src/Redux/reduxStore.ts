import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

const rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    usersPage: usersReducer

})

export type StateType = ReturnType <typeof rootReducer>

export const store = createStore(rootReducer);