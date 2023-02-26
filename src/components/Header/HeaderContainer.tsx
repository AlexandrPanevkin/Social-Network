import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../Redux/reduxStore";
import {InitialStateAuthType, setAuthUserData} from "../../Redux/authReducer";
import {Header} from "./Header";

export type mapDispatchHeaderPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}
export type MapStatePropsType = ReturnType<typeof mapStateToProps>
export type HeaderPropsType = MapStatePropsType & mapDispatchHeaderPropsType


export class HeaderClassContainer extends React.Component<HeaderPropsType, InitialStateAuthType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
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
    setAuthUserData
})(HeaderClassContainer)