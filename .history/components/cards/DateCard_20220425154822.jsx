import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

const DateCard = ({children, day}) => {


 
  return (
    <>
      <Box w="100px" borderRadius="5px" _hover={{ color: "" }}>
        <Stack direction="column">
          <Box display="flex" flexDirection="column" bg="white">
            {children}
          </Box>
                  <Box bg="brand.700">{ day}</Box>
        </Stack>
      </Box>
    </>
  );
};

export default DateCard;
