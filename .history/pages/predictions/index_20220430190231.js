import { Box, Flex, Heading } from "@chakra-ui/react";
import { endOfDay, startOfDay, subDays,addDay} from "date-fns";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";

import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Predictions = ({ predictions }) => {
const todayDate = format(new Date(), "do MMMM");
   console.log(predictions);
  return (
    <Box h="100vh" bg='g.200'>
      <Flex justify='center'>
        <NavBarThree />
      </Flex>
      <Heading p="10" color='white'>Predictions for {todayDate}</Heading>
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

 
  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
