import React from "react";
import {
  Box,
  Heading,
  
} from "@chakra-ui/react";

import PredictionTable from "../tables/PredictionTable";

const MidSection = ({ predictions }) => {
 
  

  return (
    <>
      <Box bg='bg.200' color='white'>
        <Titl
       <PredictionTable predictions={predictions}/>
      </Box>
    </>
  );
};

export default MidSection;
