import React from "react";
import {
  Box,
  Heading,
  
} from "@chakra-ui/react";

import PredictionTable from "./PredictionTable";

const MidSection = ({ predictions }) => {
 
  

  return (
    <>
      <Box bg='bg.200' coolr>
        <Heading p="20px" bg="">
          Tips Of the Day
        </Heading>
       <PredictionTable predictions={predictions}/>
      </Box>
    </>
  );
};

export default MidSection;
