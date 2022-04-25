import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

const DateCard = ({children}) => {


 
  return (
    <>
      <Box bg="brand.700">
        <Stack direction="column">
          <Box display='flex' flexDirection="column" bg="white">
            
                   {children}
          </Box>
          <Box></Box>
        </Stack>
      </Box>
    </>
  );
};

export default DateCard;
