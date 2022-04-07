import React from "react";
import { Box, FormControl, Heading } from "@chakra-ui/react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

const Forms = () => {
  return (
    <>
      <Heading>Post a Match</Heading>
      <Formik
        initialValues={{ country: "Engand", odd: "", match: "", bet: "" }}
       
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
