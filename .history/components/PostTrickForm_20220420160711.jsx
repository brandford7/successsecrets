import React from "react";
import {
  Box,
  Button,
  Flex,
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

const PostTrickForm = () => {
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
        <Heading>Post a Trick</Heading>
      </Box>

      <Formik
        initialValues={{
          title: "",
          video_Link: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Required"),
          video_Link: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            try {
              const res = await fetch("http://localhost:3000/api/tricks", {
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
                isInvalid={formik.errors.title && formik.touched.title}
              >
                <FormLabel htmlFor="title">Title</FormLabel>
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
                isInvalid={
                  formik.errors.video_Link && formik.touched.video_Link
                }
              >
                <FormLabel htmlFor="link">Video Link</FormLabel>
                <Input
                  w="auto"
                  id="link"
                  type="text"
                  {...formik.getFieldProps("video_Link")}
                />
                {formik.touched.video_Link && formik.errors.video_Link ? (
                  <FormErrorMessage>
                    {formik.errors.video_Link}
                  </FormErrorMessage>
                ) : null}
              </FormControl>

             <Flex></Flex>
            </form>
          </Stack>
        )}
      </Formik>
    </>
  );
};

export default PostTrickForm;
