import React, {FC} from 'react';
import {connect} from "react-redux";
import {StateType} from "../../Redux/reduxStore";
import {
    followingInProgress, getUsers,
    InitialStateUsersType,
    setPage,
    follow,
    unfollow
} from "../../Redux/usersReducer";

import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";


export type mapDispatchUsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersContainerPropsType = InitialStateUsersType & mapDispatchUsersPropsType

class UsersClassContainer extends React.Component<UsersContainerPropsType, InitialStateUsersType> {

    constructor(props: UsersContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
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
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<FC>(connect(mapStateToProps, {
    follow,
    unfollow,
    setPage,
    followingInProgress,
    getUsers
}))(UsersClassContainer)
