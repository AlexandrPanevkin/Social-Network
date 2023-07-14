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

// import React from "react";
// import { Field, reduxForm } from "redux-form";
//
// const LoginForm = (props: any) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={"Login"} name={"login"} component={"input"} />
//             </div>
//             <div>
//                 <Field placeholder={"Password"} name={"password"} component={"input"} />
//             </div>
//             <div>
//                 <Field component={"input"} name={"rememberMe"} type={"checkbox"} />{" "}
//                 Запомнить меня
//             </div>
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     );
// };
// const LoginReduxForm = reduxForm({
//     form: "login",
// })(LoginForm);
//
//
// const Login = (props: any) => {
//     const onSubmit = (FormData: any) => {
//         console.log(FormData)
//     }
//     return (
//         <div>
//             <h1>LOGIN</h1>
//             <LoginReduxForm onSubmit={onSubmit} />
//         </div>
//     );
// };
//
// export default Login;