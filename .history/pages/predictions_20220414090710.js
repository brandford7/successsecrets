import React from "react";
import { Box } from "@chakra-ui/react";
import Tables from "../components/Tables";
import dbConnect from "../lib/dbConnect";

const predictions = ({predictions}) => {
  return (
    <>
      <Box h="100vh">
        <Tables />
      </Box>
    </>
  );
};

export default predictions;

export async function getServerSideProps(){
  await dbConnect()
  const result = await Prediction.find({});
  const predictions = result.map((doc) => {
    const prediction = doc.toObject();
    prediction._id = prediction._id.toString();
    return pet;
  });
  return {
    props: {
      
    }
  }
}