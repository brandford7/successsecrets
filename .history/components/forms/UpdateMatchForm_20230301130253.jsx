import React, { useState } from "react";
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
import { mutate } from "swr";
import { useRouter } from "next/router";

const UpdateMatchForm = ({ Values }) => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" mb="5">
        <Heading color="white">Update Match</Heading>
      </Box>

      <Formik
        initialValues={Values}
        validationSchema={Yup.object({
          country: Yup.string()
            .max(40, "Must be 40 characters or less")
            .required("Required"),
          bet: Yup.string().required("Required"),
          match: Yup.string().required("Required"),
          odd: Yup.number().max(1000, "Number is too big").required("Required"),

          start_date: Yup.date().required("Required"),
          result: Yup.string().max(20, "Must be 20 characters or less"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            try {
              const res = await fetch(
                `httpssuccesssecrets.vercel.app/predictions/${id}`,
                {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                }
              );

              if (!res.ok) {
                throw new Error(res.status);
              }

              const { data } = await res.json();

              mutate(
                `https://successsecrets.vercel.app/api/predictions/${id}`,
                data,
                false
              );
              router.push("/");
            } catch (error) {
              setMessage("Failed to update prediction");
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
                  id="country"
                  type="text"
                  {...formik.getFieldProps("country")}
                />
                {formik.touched.country && formik.errors.country ? (
                  <FormErrorMessage>{formik.errors.country}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={formik.errors.match && formik.touched.match}
              >
                <FormLabel htmlFor="match">Match</FormLabel>
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
              <FormControl isInvalid={formik.errors.bet && formik.touched.bet}>
                {" "}
                <FormLabel htmlFor="bet">Bet</FormLabel>
                <Input
                  w="auto"
                  id="bet"
                  type="text"
                  {...formik.getFieldProps("bet")}
                />
                {formik.touched.bet && formik.errors.bet ? (
                  <FormErrorMessage>{formik.errors.bet}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl isInvalid={formik.errors.odd && formik.touched.odd}>
                <FormLabel htmlFor="odd">Odd</FormLabel>
                <Input
                  id="odd"
                  type="number"
                  step="any"
                  {...formik.getFieldProps("odd")}
                />
                {formik.touched.odd && formik.errors.odd ? (
                  <FormErrorMessage>{formik.errors.odd}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl
                isInvalid={
                  formik.errors.start_date && formik.touched.start_date
                }
              >
                <FormLabel htmlFor="result">Date</FormLabel>
                <Input
                  id="date"
                  type="date"
                  {...formik.getFieldProps("start_date")}
                />
                {formik.touched.start_date && formik.errors.start_date ? (
                  <FormErrorMessage>
                    {formik.errors.start_date}
                  </FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={formik.errors.result && formik.touched.result}
              >
                <FormLabel htmlFor="result">Result</FormLabel>
                <Input
                  id="result"
                  type="text"
                  {...formik.getFieldProps("result")}
                />
                {formik.touched.result && formik.errors.result ? (
                  <FormErrorMessage>{formik.errors.result}</FormErrorMessage>
                ) : null}
              </FormControl>
              <Button
                mt="5"
                _hover={{ bg: "brand.700", color: "white" }}
                type="submit"
              >
                Update
              </Button>
            </form>
          </Stack>
        )}
      </Formik>
    </>
  );
};

export default UpdateMatchForm;
