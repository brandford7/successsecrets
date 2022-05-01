import { Box, Flex, Heading } from "@chakra-ui/react";
import { startOfDay,subDays,format } from "date-fns";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";

import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Tomorrow = ({ predictions }) => {

const yesterdayDate = format(subDays(new Date(), 1), "do MMMM");

  console.log(predictions);
  return (
    <Box h="100vh" overflow='h' bg="bg.200">
      <Flex justify="center">
        <NavBarThree />
      </Flex>
      <Heading p="10" color='white'>Predictions for {yesterdayDate} </Heading>
      <PredictionTable predictions={predictions} />
    </Box>
  );
};

export default Tomorrow;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    start_date: {
      $gt: subDays(new Date(), 2),
      $lt: startOfDay(new Date()),
    },
  });

  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
