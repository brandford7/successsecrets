import { Box, Heading } from "@chakra-ui/react";
import React from "react";

import PredictionTable from "../../components/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Predictions = ({ predictions }) => {
  
  return (
    <Box h="100vh">
      <Heading p="10">Predictions</Heading>
      <PredictionTable predictions={predictions} />
    </Box>
  );
};

export default Predictions;

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({});

  console.log(predictions);
  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
