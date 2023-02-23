import React from "react";
import {InitialStateProfileType, ProfileType, setUserProfile} from "../../Redux/profileReducer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../Redux/reduxStore";

export type mapDispatchProfilePropsType = {
    setUserProfile: (profile: ProfileType) => void
}
export type MapPropsType = ReturnType<typeof mapStateToProps>

export class ProfileClassContainer extends React.Component<MapPropsType & mapDispatchProfilePropsType, InitialStateProfileType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/24149`).then(response => {
            this.props.setUserProfile(response.data)
        })
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

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(ProfileClassContainer)