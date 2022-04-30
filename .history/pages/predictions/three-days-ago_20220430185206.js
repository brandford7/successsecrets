import { Box, Flex, Heading } from "@chakra-ui/react";
import { startOfDay, addDays} from "date-fns";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";

import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const ThreeDaysAgo = ({ predictions }) => {

   console.log(predictions);
  return (
    <Box h="100vh" bg='g.200'>
      <Flex justify='center'>
        <NavBarThree />
      </Flex>
      <Heading p="10">Predictions for</Heading>
      <PredictionTable predictions={predictions} />
    </Box>
  );
};

export default Tomorrow;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    start_date: {
 $gt: startOfDay(new Date()),
     $lte: addDays(new Date(),1), 
  
    },
  });

 
  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
