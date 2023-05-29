import React from 'react';
import {useFormik} from "formik";

const validate = (values: any) => {
    if (!values.email) {
        return {
            email: 'Email is required'
        }
    }
    if (!values.password) {
        return {
            password: 'Password is required'
        }
    }
};

export const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    })

    return (
        <div className="login-page">
            <div className="login-page">
                <div className="form">
                    <form onSubmit={formik.handleSubmit} className="login-form">
                        <div>
                            <input id="email"
                                      placeholder="email" {...formik.getFieldProps('email')}
                            />
                        </div>
                        <div>
                            <input
                                type="password" {...formik.getFieldProps('password')} placeholder="password"/>
                        </div>
                        <div>
                            <input type="checkbox"
                                   {...formik.getFieldProps('checkbox')}
                            /> Remember me
                        </div>
                        <button>login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
