import React from "react";
import {
  Box,

  
} from "@chakra-ui/react";

import PredictionTable from "../tables/PredictionTable";
//import Title from "../titles/Title";

const MidSection = ({ predictions }) => {
 
  

  return (
    <>
      <Box bg='bg.200' color='white'>
        <Title  name="Today's tips" />
       <PredictionTable predictions={predictions}/>
      </Box>
    </>
  );
};

export default MidSection;
