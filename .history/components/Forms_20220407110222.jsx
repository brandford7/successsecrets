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
            <FormControl isInvalid={form.errors.name && form.touched.name}>
              {" "}
              <FormLabel htmlFor="country">Country</FormLabel>
              <Input
                id="country"
                type="text"
                {...formik.getFieldProps("country")}
              />
              {formik.touched.country && formik.errors.country ? (
                <div>{formik.errors.country}</div>
              ) : null}
            </FormControl>
            <FormControl isInvalid={form.errors.name && form.touched.bet}>
              {" "}
              <FormLabel htmlFor="match">Match</FormLabel>
              <Input
                id="match"
                type="text"
                {...formik.getFieldProps("match")}
              />
              {formik.touched.match && formik.errors.match ? (
                <div>{formik.errors.match}</div>
              ) : null}
            </FormControl>
            <FormControl isInvalid={form.errors.bet && form.touched.bet}>
              {" "}
              <FormLabel htmlFor="email">Bet</FormLabel>
              <Input id="bet" type="text" {...formik.getFieldProps("bet")} />
              {formik.touched.bet && formik.errors.bet ? (
                <div>{formik.errors.bet}</div>
              ) : null}
            </FormControl>
            <FormControl isInvalid={form.errors.odd && form.touched.odd}>
              {" "}
              <FormLabel htmlFor="odd">Odd</FormLabel>
              <Input id="odd" type="number" {...formik.getFieldProps("odd")} />
              {formik.touched.odd && formik.errors.odd ? (
                <div>{formik.errors.odd}</div>
              ) : null}
            </FormControl>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Forms;
