import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

const DateCard = ({children, day}) => {


 
  return (
    <>
      <Box w="100px" borderRadius="10px" cursor="pointer" _hover={{ shadow: "lg", w }}>
        
          <Box display="flex" flexDirection="column" bg="brand.700">
            {children}
          </Box>
          <Box bg='white'>{day}</Box>
       
      </Box>
    </>
  );
};

export default DateCard;
