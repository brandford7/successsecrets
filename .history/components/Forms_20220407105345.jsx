import React from "react";
import { Box, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

const Forms = () => {
  return (
    <>
      <Heading>Post a Match</Heading>
      <Formik
        initialValues={{ country: "Enlgand", odd: "", match: "", bet: "" }}
        validationSchema={Yup.object({
          country: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          match: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          match: Yup.string().max(100).required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <FormLabel htmlFor="firstName">Countrt</FormLabel>
            <Input
              id="country"
              type="text"
              {...formik.getFieldProps("country")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}

            <FormLabel htmlFor="lastName">Match</FormLabel>
            <Input id="match" type="text" {...formik.getFieldProps("match")} />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}

            <FormLabel htmlFor="email">Bet</FormLabel>
            <Input id="bet" type="" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <FormLabel htmlFor="odd">Odd</FormLabel>
            <Input id="email" type="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Forms;
