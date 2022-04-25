import { Box, Flex, Heading } from "@chakra-ui/react";
import { endOfDay, startOfDay, subDays,getDay } from "date-fns";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";

import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Predictions = ({ predictions }) => {
  return (
    <Box h="100vh">
      <Flex justify='center'>
        <NavBarThree yesterday ={getDay(new Date(prediction.start_date))} />
      </Flex>
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
