import React from "react";
import { Box, FormControl } from "@chakra-ui/react";
import { ErrorMessage, Field, Formik,Form } from "formik";

const Forms = () => {
  return (
    <>
      <h1>My Form</h1>
      <Formik
        initialValues={{ country: "Engand",odd:"",match: "",""}}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
         <Field type='text' name='country'/>
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Forms;
