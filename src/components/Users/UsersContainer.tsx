import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../Redux/reduxStore";
import {
    follow, followingInProgress,
    InitialStateUsersType,
    setPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UsersType
} from "../../Redux/usersReducer";

import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/usersAPI";

export type mapDispatchUsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: (toggleFollowing: boolean) => void
}

export type UsersContainerPropsType = InitialStateUsersType & mapDispatchUsersPropsType

export class UsersClassContainer extends React.Component<UsersContainerPropsType, InitialStateUsersType> {

    constructor(props: UsersContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChange = (page: number) => {
        this.props.setPage(page)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            {!this.props.isFetching &&
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                setPage={this.onPageChange}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowing={this.props.toggleFollowing}
                followingInProgress={this.props.followingInProgress}
            />
            }
        </>


    }
}


const mapStateToProps = (state: StateType): InitialStateUsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowing: state.usersPage.toggleFollowing
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPage,
    setTotalUsersCount,
    toggleIsFetching,
    followingInProgress
})(UsersClassContainer)
