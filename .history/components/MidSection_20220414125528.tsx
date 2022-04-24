import React from "react";
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Img,
} from "@chakra-ui/react";

import PredictionTable from "./PredictionTable";

const MidSection = ({ predictions }) => {
 
  

  return (
    <>
      <Box bg='brand.900'>
        <Heading p="20px" bg="">
          Tips Of the Day
        </Heading>
       <PredictionTable predictions={predictions}/>
      </Box>
    </>
  );
};

export default MidSection;
