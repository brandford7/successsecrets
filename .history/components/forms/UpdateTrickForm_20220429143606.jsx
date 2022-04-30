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

const UpdateTrickForm = ({Values}) => {
    const router = useRouter();
    const id = router.query.id;

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" mb="5">
        <Heading>Post a Trick</Heading>
      </Box>

      <Formik
        initialValues={Values}
        onSubmit={(values, { setSubmitting }) => {
         }
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
                  Submit
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
