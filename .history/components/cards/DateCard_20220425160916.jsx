import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

const DateCard = ({children, day}) => {


 
  return (
    <>
      <Box w="" p='' borderRadius="10px" cursor="pointer" _hover={{ shadow: "lg",  }}>
        
          <Box display="flex" flexDirection="column" bg="brand.700">
            {children}
          </Box>
          <Box bg='white'>{day}</Box>
       
      </Box>
    </>
  );
};

export default DateCard;
