import { Box, Flex, Heading } from "@chakra-ui/react";
import { endOfDay, startOfDay, subDays,addDays} from "date-fns";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";

import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Predictions = ({ predictions }) => {

   console.log(predictions);
  return (
    <Box h="100vh" bg='g.200'>
      <Flex justify='center'>
        <NavBarThree />
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
   
  });

  props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
