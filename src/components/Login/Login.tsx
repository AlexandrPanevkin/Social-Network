import React, {memo} from 'react';
import {useFormik} from "formik";
import {loginPropsType} from "./LoginContainer";
import {Redirect} from "react-router-dom";
import {createField} from '../Common/FormControl/FOrmControls';
import {required} from "../../utils/validators/validators";
import {Input} from "antd";

type FormikErrorType = {
    email?: string;
    password?: string;
    rememberMe?: boolean;
};

const validate = (values: any) => {
    const errors: FormikErrorType = {};
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 3) {
        errors.password = "Must be 3 characters or more";
    }

    return errors;
};


export const Login = memo(({login, isAuth, captchaUrl}: loginPropsType) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captchaUrl: ''
        },
        validate,
        onSubmit: values => {
            login(values.email, values.password, values.rememberMe, values.captchaUrl)
        },
    })

    if (isAuth) {
        return <Redirect to={"profile"}/>;
    }

    return (
        <div className="login-page">
            <div className="login-page">
                <div className="form">
                    <form onSubmit={formik.handleSubmit} className="login-form">
                        <div>
                            <input id="email"
                                   placeholder="email" {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email &&
                                <div style={{color: "red"}}>{formik.errors.email}</div>}
                        </div>
                        <div>
                            <input
                                type="password" {...formik.getFieldProps('password')} placeholder="password"/>
                            {formik.touched.password && formik.errors.password && (
                                <div style={{color: "red"}}>{formik.errors.password}</div>
                            )}
                        </div>
                        <div>
                            <input type="checkbox"
                                   {...formik.getFieldProps('checkbox')}
                            /> Remember me
                        </div>
                        {captchaUrl && <img src={captchaUrl}/>}
                        {captchaUrl &&
                            <input                                                {...formik.getFieldProps('captchaUrl')}
                            />}
                        <button>login</button>
                    </form>
                </div>
            </div>
        </div>
    );
});