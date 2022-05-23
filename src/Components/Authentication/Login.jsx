import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";

import React from "react";

const loginValidationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password").required("Password is required"),
});

export function LoginForm() {
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  return (
    <div className="form-commons">
      <TextField
        className="text-field-margin"
        id="email"
        name="email"
        label="Email"
        value={loginFormik.values.email}
        onChange={loginFormik.handleChange}
        error={loginFormik.touched.email && Boolean(loginFormik.errors.email)}
        helperText={loginFormik.touched.email && loginFormik.errors.email}
        fullWidth
      />
      <TextField
        className="text-field-margin"
        id="password"
        name="password"
        label="Password"
        type="password"
        value={loginFormik.values.password}
        onChange={loginFormik.handleChange}
        error={
          loginFormik.touched.password && Boolean(loginFormik.errors.password)
        }
        helperText={loginFormik.touched.password && loginFormik.errors.password}
        fullWidth
      />
      <Button
        onClick={loginFormik.handleSubmit}
        color="primary"
        variant="contained"
        type="submit"
        fullWidth
      >
        Submit
      </Button>
    </div>
  );
}
