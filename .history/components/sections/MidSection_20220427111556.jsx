import React from "react";
import {
  Box,
  Heading,
  
} from "@chakra-ui/react";

import PredictionTable from "../tables/PredictionTable";
import Title from "../Headings/Title";

const MidSection = ({ predictions }) => {
 
  

  return (
    <>
      <Box bg='bg.200' color='white'>
        <Title name='Today\ tips' />
       <PredictionTable predictions={predictions}/>
      </Box>
    </>
  );
};

export default MidSection;
