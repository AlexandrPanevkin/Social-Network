import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../Redux/reduxStore";
import {InitialStateAuthType, getAuthUserData} from "../../Redux/authReducer";
import {Header} from "./Header";
import {authAPI} from "../../api/api";

export type mapDispatchHeaderPropsType = {
    getAuthUserData: () => void
}
export type MapStatePropsType = ReturnType<typeof mapStateToProps>
export type HeaderPropsType = MapStatePropsType & mapDispatchHeaderPropsType


export class HeaderClassContainer extends React.Component<HeaderPropsType, InitialStateAuthType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export const HeaderContainer = connect(mapStateToProps, {
    getAuthUserData
})(HeaderClassContainer)