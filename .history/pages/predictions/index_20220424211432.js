import { Box, Heading } from "@chakra-ui/react";
import { endOfDay, startOfDay, subDays } from "date-fns";
import React from "react";

import PredictionTable from "../../components/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Predictions = ({ predictions }) => {
  
  return (
    <Box h="100vh">
      <Nav
      <Heading p="10">Predictions</Heading>
      <PredictionTable predictions={predictions} />
    </Box>
  );
};

export default Predictions;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    start_date: {
     
        $gte: startOfDay(new Date()),
        $lte: endOfDay(new Date()),
      
    },
  });

  console.log(predictions);
  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
