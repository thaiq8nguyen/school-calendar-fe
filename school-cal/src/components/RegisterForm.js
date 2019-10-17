import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';


const RegisterForm = ({ errors, touched }) => {
    return (
        <div className = "RegisterForm-wrapper">
            <h3>Calendar signup</h3>
            <div className= 'RegisterForm-summary'>
                <Form>
                    username:
                    <Field type="username" name="username" placeholder="username" />
                    {touched.username && errors.username && (<p className="error">{errors.username}</p>)}

                    email:
                    <Field type="email" name="email" placeholder="email" />
                    {touched.email && errors.email && (<p className="error">{errors.email}</p>)}

                    Password:
                    <Field type="password" name="password" placeholder="password" />
                    {touched.password && errors.password && (<p className="error">{errors.password}</p>)}

                    Re-Enter Password: 
                    <Field type="password" name="reEnterPassword" placeholder="password" />
                    {touched.password && errors.password && (<p className="error">{errors.password}</p>)}

                    <button className="regiester-button" type="submit"> Let's Get Started</button>

                    <Link to="/login">
                        <p>Have an account? Log in</p>
                    </Link>
                </Form>
            </div>
            <div className="RegisterForm-links">
            </div>
        </div>
    );
};
const FormikRegisterForm = withFormik({
    mapPropsToValues({ username, email, password, reEnterPassword }){
        return {
            username: username || '',
            email: email || '',
            password: password || '',
            reEnterPassword: reEnterPassword || '',
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('username is a required field'),
        email: Yup.string().required('email is a required field'),
        password: Yup.string().required('password is a required field'),
        reEnterPassword: Yup.string().required('please confirm  password').test('passwords-match', 'passwords must match', function(value) {
            return this.parent.password === value
        })
    }),
    handleSubmit(values, {props}) {
        console.log(values)
        
    }
})(RegisterForm);

export default FormikRegisterForm; 