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
              valid
      >
        <FormControl isRequired />
      </Formik>
    </>
  );
};

export default Form;
