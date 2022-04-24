import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import PredictionTable from "../../components/PredictionTable";

const Predictions = () => {
  return (
    <Box h="100vh">
      <Heading p="10">Predictions</Heading>
      <PredictionTable predictions={predictions} />
    </Box>
  );
};

export default Predictions;


