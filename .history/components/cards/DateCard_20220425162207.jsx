import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

const DateCard = ({ children, day }) => {
  return (
    <>
      <Flex
        
       py='20px'
        
        direction="column"
        borderRadius="10px"
              cursor="pointer"
              fontWeight="bold"
            
      >
        <Box display="flex" flexDirection="column" bg="brand.700">
          {children}
        </Box>
        <Box bg="white">{day}</Box>
      </Flex>
    </>
  );
};

export default DateCard;
