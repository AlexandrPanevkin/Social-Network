import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    InitialStateUsersType,
    setPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../Redux/usersReducer";
import {UsersC} from "./UsersС";

export type mapDispatchUsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersPropsType = InitialStateUsersType & mapDispatchUsersPropsType

const mapStateToProps = (state: StateType): InitialStateUsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchUsersPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setPage: (page: number) => {
            dispatch(setPageAC(page))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)
