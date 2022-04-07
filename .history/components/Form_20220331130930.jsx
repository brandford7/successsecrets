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
        <FormControl isRequired 
      </Formik>
    </>
  );
};

export default Form;
