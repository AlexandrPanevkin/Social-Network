import React, { FC } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StateType} from "../Redux/reduxStore";


type MapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export function WithAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        const {isAuth, ...restProps} = props;

        if (!isAuth) return <Redirect to={"/login"}/>

        return <WrappedComponent {...restProps as WCP}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
};

export default WithAuthRedirect;
