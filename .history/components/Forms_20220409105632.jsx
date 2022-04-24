import React from "react";
import { Box, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react";
import {  Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const Forms = () => {
  const prediction = { country: "Enlgand", odd: "", match: "", bet: "" };
  const router =useRouter()
   const putData = async (form) => {
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

   /* The POST method adds a new entry in the mongodb database. */
   const postData = async () => {
     try {
       const res = await fetch("http://localhost:3000/api/todays-tips", {
         method: "POST",
         headers: {
           Accept: contentType,
           "Content-Type": contentType,
         },
         body: JSON.stringify(values),
       });

       // Throw error with status code in case Fetch API req failed
       if (!res.ok) {
         throw new Error(res.status);
       }

       router.push("/");
     } catch (error) {
       console.error('error')
     }
   };

  
  return (
    <>
      <Heading>Post a Match</Heading>
      <Formik
        initialValues={{
          country: "Enlgand",
          odd: "",
          match: "",
          bet: "",
          image_url: "",
        }}
        validationSchema={Yup.object({
          country: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          bet: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          match: Yup.string()
            .max(100, "Must be 100 characters or less")
            .required("Required"),
          odd: Yup.number("Must be a number").max(1000, "Number is too big").required("Required"),
          image_url: Yup.string().max(1000, "Must be a string").required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            try {
       const res = await fetch("http://localhost:3000/api/todays-tips", {
         method: "POST",
         headers: {
           Accept: 'application/json',
           "Content-Type": 'application/json',
         },
         body: JSON.stringify(values),
       });

       // Throw error with status code in case Fetch API req failed
       if (!res.ok) {
         throw new Error(res.status);
       }

       router.push("/");
     } catch (error) {
       console.error('error')
     }
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <FormControl
              isInvalid={formik.errors.country && formik.touched.country}
            >
              {" "}
              <FormLabel htmlFor="country">Country</FormLabel>
              <Input
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
              {" "}
              <FormLabel htmlFor="match">Match</FormLabel>
              <Input
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
              <FormLabel htmlFor="email">Bet</FormLabel>
              <Input id="bet" type="text" {...formik.getFieldProps("bet")} />
              {formik.touched.bet && formik.errors.bet ? (
                <FormErrorMessage>{formik.errors.bet}</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl isInvalid={formik.errors.odd && formik.touched.odd}>
              <FormLabel htmlFor="odd">Odd</FormLabel>
              <Input id="odd" type="number" {...formik.getFieldProps("odd")} />
              {formik.touched.odd && formik.errors.odd ? (
                <FormErrorMessage>{formik.errors.odd}</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl isInvalid={formik.errors.image_url && formik.touched.image_url}>
              <FormLabel htmlFor="image">image</FormLabel>
              <Input id="image" type="text" {...formik.getFieldProps("image_url")} />
              {formik.touched.image_url && formik.errors.image_url ? (
                <FormErrorMessage>{formik.errors.image_url}</FormErrorMessage>
              ) : null}
            </FormControl>
            <button type="submit" >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Forms;
