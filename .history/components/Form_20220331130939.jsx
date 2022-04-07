import React from "react";
import { Box, FormControl } from "@chakra-ui/react";
import { Formik } from "formik";

const Form = () => {
  return (
    <>
      <Formik
        initialValues={{
          country: "",
          image_url: "",
          odd: "",
          match: "",
          bet: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values) {
            errors = `Please provide a ${value} `;
          }
          return erorrs;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {" "}
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
        <FormControl isRequired></FormControl>
      </Formik>
    </>
  );
};

export default Form;
