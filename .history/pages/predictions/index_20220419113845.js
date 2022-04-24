import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Predictions = () => {
  return (
    <Box h="100vh">
      <Heading p='10'>Predictions</Heading>
    </Box>
  );
};

export default Predictions;


export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "Enlgand" });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}