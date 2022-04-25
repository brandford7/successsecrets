import { Box, Stack } from "@chakra-ui/react";
import React from "react";

const DateCard = () => {
  return (
    <>
      <Box bg="brand.700">
        <Stack direction="column">
          <Box bg="white">
            {" "}
            {moment(today).subtract(3, "days").format("Do MMMM")}
          </Box>
          <Box></Box>
        </Stack>
      </Box>
    </>
  );
};

export default DateCard;
