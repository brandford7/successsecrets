import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const PostMatchForm = () => {
  //const prediction = { country: "Enlgand", odd: "", match: "", bet: "" };
  const router = useRouter();
  /* const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/pets/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/pets/${id}`, data, false); // Update the local data without a revalidation
      router.push("/");
    } catch (error) {
      setMessage("Failed to update pet");
    }
  };

   The POST method adds a new entry in the mongodb database. */

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Heading>Post a Match</Heading>
      </Box>

      <Formik
        initialValues={{
          country: "England",
          odd: "",
          match: "",
          bet: "",
          image_url: "",
          result: "",
        }}
        validationSchema={Yup.object({
          country: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          bet: Yup.string()
            .max(100, "Must be 100 characters or less")
            .required("Required"),
          match: Yup.string()
            .max(100, "Must be 100 characters or less")
            .required("Required"),
          odd: Yup.number().max(1000, "Number is too big").required("Required"),
          image_url: Yup.string()
            .max(1000, "Must be a string")
            .required("Required"),
          result: Yup.string().max(10, "Must be 10 characters or less"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            try {
              const res = await fetch("http://localhost:3000/api/predictions", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              });

              // Throw error with status code in case Fetch API req failed
              if (!res.ok) {
                throw new Error("error");
              }

              router.push("/");
            } catch (error) {
              console.error("error");
            }
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <Stack align="center" justify="center">
            <form onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.errors.country && formik.touched.country}
              >
                <FormLabel htmlFor="country">Country</FormLabel>
                <Input
                  w="auto"
                  id="title"
                  type="text"
                  {...formik.getFieldProps("title")}
                />
                {formik.touched.title && formik.errors.title ? (
                  <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={formik.errors.match && formik.touched.match}
              >
                {" "}
                <FormLabel htmlFor="match">V</FormLabel>
                <Input
                  w="auto"
                  id="match"
                  type="text"
                  {...formik.getFieldProps("match")}
                />
                {formik.touched.match && formik.errors.match ? (
                  <FormErrorMessage>{formik.errors.match}</FormErrorMessage>
                ) : null}
              </FormControl>
            
              <Button mt="5" type="submit">
                Submit
              </Button>
            </form>
          </Stack>
        )}
      </Formik>
    </>
  );
};

export default PostTrickForm;
