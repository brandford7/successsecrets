import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";
import moment from "moment";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Predictions = ({ predictions }) => {
  return (
    <Box h="100vh" bg='bg.200'>
      <Flex justify='center'>
        <NavBarThree  />
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
    
    },
  });

  console.log(predictions);
  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
