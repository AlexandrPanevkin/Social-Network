import React, {FC} from "react";
import {
    getStatus,
    getUserProfile,
    InitialStateProfileType, updateStatus,
} from "../../Redux/profileReducer";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../Redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect, {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type pathParamsType = {
    userId: string
}

export type mapDispatchProfilePropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
export type MapStatePropsType = ReturnType<typeof mapStateToProps>
type PropsType = RouteComponentProps<pathParamsType> & MapStatePropsType & mapDispatchProfilePropsType

class ProfileContainer extends React.Component<PropsType, InitialStateProfileType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '24149'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}


const mapStateToProps = (state: StateType) => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    }
}


export default compose<FC>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)