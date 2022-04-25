import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

const DateCard = () => {

     const today = moment().startOf("day");
 
  return (
    <>
      <Box bg="brand.700">
        <Stack direction="column">
          <Box display='flex' flexDirection="column" bg="white">
            
                      {moment(today).subtract(3, "days").format("Do MMMM")}
                      {moment()}
          </Box>
          <Box></Box>
        </Stack>
      </Box>
    </>
  );
};

export default DateCard;
