import React from "react";
import {getUserProfile, InitialStateProfileType, ProfileType, setUserProfile} from "../../Redux/profileReducer";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../Redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";

type pathParamsType = {
    userId: string
}

export type mapDispatchProfilePropsType = {
    getUserProfile: (userId: string) => void
}
export type MapStatePropsType = ReturnType<typeof mapStateToProps>
type PropsType = RouteComponentProps<pathParamsType> & MapStatePropsType & mapDispatchProfilePropsType

export class ProfileClassContainer extends React.Component<PropsType, InitialStateProfileType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '24149'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        profile: state.ProfilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileClassContainer)

export const ProfileContainer = connect(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent)