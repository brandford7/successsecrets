import React, { useState } from "react";
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

const UpdateTrickForm = ({ Values }) => {
  const [message, setMessage] = useState();
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" mb="5">
        <Heading color="white">Post a Trick</Heading>
      </Box>

      <Formik
        initialValues={Values}
        validationSchema={Yup.object({
        title:Yup.string().required('Required'),
          video_Link: Yup.string().required("Required")
          
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            try {
              const res = await fetch(
                `http://localhost:3000/api/tricks/${id}`,
                {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                }
              );

              // Throw error with status code in case Fetch API req failed
              if (!res.ok) {
                throw new Error(res.status);
              }

              const { data } = await res.json();

              mutate(
                `http://localhost:3000/api/tricks/${id}`,
                data,
                false
              ); // Update the local data without a revalidation
              router.push("/admin/");
            } catch (error) {
              setMessage("Failed to update trick");
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

              <Flex justify="center">
                <Button mt="5" type="submit">
                  Update
                </Button>
              </Flex>
            </form>
          </Stack>
        )}
      </Formik>
    </>
  );
};

export default UpdateTrickForm;
