import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../Redux/usersReducer";

export type mapDispatchUsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users:UsersType[]) => void
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchUsersPropsType => {
    return {
        follow: (userId: number) => {
    dispatch(followAC(userId))
        },
        unfollow: (userId: number) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users: UsersType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
