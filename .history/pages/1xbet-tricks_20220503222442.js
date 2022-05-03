import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Tricks from "../components/sections/Tricks";

const OneXbet = () => {
  return (
    <>
      <Box h='100vh'>
        <Heading color="white" p="10px">
          1xBet Tricks
        </Heading>
        <Tricks />
      </Box>
    </>
  );
};

export default OneXbet;
