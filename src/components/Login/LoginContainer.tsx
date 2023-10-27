import {compose} from "redux";
import {FC} from "react";
import {connect} from "react-redux";
import {Login} from "./Login";
import {InitialStateAuthType, login} from "../../Redux/authReducer";
import {StateType} from "../../Redux/reduxStore";

export type mapDispatchToLoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
export type loginPropsType = mapDispatchToLoginPropsType & InitialStateAuthType

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default compose<FC>(
    connect(mapStateToProps, {
        login
    })
)(Login)
