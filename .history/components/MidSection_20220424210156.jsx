import React from "react";
import {
  Box,
  Heading,
  
} from "@chakra-ui/react";

import PredictionTable from "./PredictionTable";

const MidSection = ({ predictions }) => {
 
  

  return (
    <>
      <Box bg=''>
        <Heading p="20px" bg="bg.200">
          Tips Of the Day
        </Heading>
       <PredictionTable predictions={predictions}/>
      </Box>
    </>
  );
};

export default MidSection;
