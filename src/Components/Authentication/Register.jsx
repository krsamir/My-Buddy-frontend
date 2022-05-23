import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";

import React from "react";
import "../Home.css";

const registerValidationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  name: Yup.string("Enter your name").required("Name is required"),
  gender: Yup.string("Enter your gender").required("Gender is required"),
  organization: Yup.string("Enter your organization").required(
    "Organization is required"
  ),
});

export function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: "",
      organization: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="form-commons">
      <TextField
        className="text-field-margin"
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        fullWidth
      />
      <TextField
        className="text-field-margin"
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        fullWidth
      />
      <TextField
        id="name"
        className="text-field-margin"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        fullWidth
      />
      <TextField
        className="text-field-margin"
        id="organization"
        name="organization"
        label="Organization"
        value={formik.values.organization}
        onChange={formik.handleChange}
        fullWidth
        error={
          formik.touched.organization && Boolean(formik.errors.organization)
        }
        helperText={formik.touched.organization && formik.errors.organization}
      />
      <TextField
        className="text-field-margin"
        id="gender"
        name="gender"
        label="Gender"
        value={formik.values.gender}
        onChange={formik.handleChange}
        fullWidth
        error={formik.touched.gender && Boolean(formik.errors.gender)}
        helperText={formik.touched.gender && formik.errors.gender}
      />
      <Button
        onClick={formik.handleSubmit}
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
