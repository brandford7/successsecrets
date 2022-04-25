import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

const DateCard = ({children, day}) => {


 
  return (
    <>
          <Flex
              align='center'
              justify='center'
              p='10'
        w="200px"
        
        direction="column"
        borderRadius="10px"
        cursor="pointer"
        
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
