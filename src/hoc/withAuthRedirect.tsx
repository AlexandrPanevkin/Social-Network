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
export function WithAuthRedirect(Component:any ) {

    const RedirectComponent = (props: MapStatePropsType) => {
        const {isAuth, ...restProps} = props;

        if (!isAuth) return <Redirect to={"/login"}/>

        return <Component {...restProps}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
};

export default WithAuthRedirect;
