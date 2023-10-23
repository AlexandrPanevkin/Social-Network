import React, {FC} from "react";
import {
    getStatus,
    getUserProfile,
    InitialStateProfileType,
    updatePhoto,
    updateStatus,
} from "../../Redux/profileReducer";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../Redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type pathParamsType = {
    userId: string
}

export type mapDispatchProfilePropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    updatePhoto: (file: File) => void
}
export type MapStatePropsType = ReturnType<typeof mapStateToProps>
type PropsType = RouteComponentProps<pathParamsType> & MapStatePropsType & mapDispatchProfilePropsType

class ProfileContainer extends React.Component<PropsType, InitialStateProfileType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authorizedUserId)
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<InitialStateProfileType>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }

    render() {
        return <Profile isOwner={!this.props.match.params.userId} {...this.props} profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        updatePhoto={this.props.updatePhoto}
        />
    }
}


const mapStateToProps = (state: StateType) => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        authorizedUserId: state.auth.userId
    }
}


export default compose<FC>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        updatePhoto
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)