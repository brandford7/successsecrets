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
 
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
  ]; */

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
