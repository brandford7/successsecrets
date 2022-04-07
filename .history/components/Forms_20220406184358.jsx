import React from "react";
import { Box, FormControl, Heading } from "@chakra-ui/react";
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
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <Box>
              <Field type="text" name="country" />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <Field type="number" name="odd" />
              {props.errors.odd && <div id="feedback">{props.errors.name}</div>}
              <Field type="text" name="match" />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <Field type="text" name="bet" />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}

              <button type="submit">Submit</button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Forms;
