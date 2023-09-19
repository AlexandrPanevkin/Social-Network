import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../Redux/reduxStore";
import {InitialStateAuthType, logout} from "../../Redux/authReducer";
import {Header} from "./Header";

export type mapDispatchHeaderPropsType = {
    logout: () => void
}
export type MapStatePropsType = ReturnType<typeof mapStateToProps>
export type HeaderPropsType = MapStatePropsType & mapDispatchHeaderPropsType


export class HeaderClassContainer extends React.Component<HeaderPropsType, InitialStateAuthType> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export const HeaderContainer = connect(mapStateToProps, {
    logout
})(HeaderClassContainer)