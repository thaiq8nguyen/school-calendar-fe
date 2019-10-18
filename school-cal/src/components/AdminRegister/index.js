import React, { useContext, useEffect } from "react";

import { AuthContext } from "../../contexts/auth/authState";
import { Formik } from "formik";
import AdminRegisterForm from "./AdminRegisterForm";
import * as Yup from "yup";

import { app, db } from "../../firebase/index";

const AdminRegister = ({ history }) => {
  const {
    currentUser,
    isLoading,
    signUpError,
    signUpUser,
    signInWithGoogle
  } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      history.push("/admin-dashboard");
    }
  }, [currentUser]);

  const AdminRegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name must be greater than 2 characters.")
      .max(50, "First name must be lesser 50 characters.")
      .required("First name is required."),
    lastName: Yup.string()
      .min(2, "Last name must be between 2 and 50 characters.")
      .max(50, "Last name must be between 2 and 50 characters.")
      .required("Last name is required."),
    email: Yup.string()
      .email("Invalid email.")
      .required("Email is required."),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters.")
      .max(32, "Password must be less than 32 characters.")
      .required("Password is required.")
  });

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }}
        onSubmit={(values, actions) => {
          signUpUser(values);
          actions.resetForm();
        }}
        render={formikProps => (
          <AdminRegisterForm
            {...formikProps}
            isLoading={isLoading}
            signUpError={signUpError}
            signInWithGoogle={signInWithGoogle}
          />
        )}
        validationSchema={AdminRegisterSchema}
      />
    </>
  );
};

export default AdminRegister;
