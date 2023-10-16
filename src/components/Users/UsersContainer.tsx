import React, {FC} from 'react';
import {connect} from "react-redux";
import {StateType} from "../../Redux/reduxStore";
import {
    follow,
    followingInProgress,
    InitialStateUsersType,
    requestUsers,
    setPage,
    unfollow
} from "../../Redux/usersReducer";

import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/selectors";


export type mapDispatchUsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

export type UsersContainerPropsType = InitialStateUsersType & mapDispatchUsersPropsType

class UsersClassContainer extends React.Component<UsersContainerPropsType, InitialStateUsersType> {

    constructor(props: UsersContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChange = (page: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(page, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            {!this.props.isFetching &&
                <Users
                    totalItemsCount={this.props.totalItemsCount}
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<FC>(connect(mapStateToProps, {
    follow,
    unfollow,
    setPage,
    followingInProgress,
    requestUsers
}))(UsersClassContainer)
