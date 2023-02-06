import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, InitialStateUsersType, setUsersAC, unfollowAC, UsersType} from "../../Redux/usersReducer";
import {UsersC} from "./UsersС";

export type mapDispatchUsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users:UsersType[]) => void
}

export type UsersPropsType = InitialStateUsersType & mapDispatchUsersPropsType

const mapStateToProps = (state: StateType): InitialStateUsersType => {
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)
