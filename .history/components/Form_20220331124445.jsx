import React from "react";
import { Box, FormControl } from "@chakra-ui/react";
import { Formik } from "formik";

const Form = () => {
  return (
    <>
      <Formik initialValues={{}}>
        <FormControl isRequired />
      </Formik>
    </>
  );
};

export default Form;
