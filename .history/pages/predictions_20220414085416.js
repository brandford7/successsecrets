import React from "react";
import { Box } from "@chakra-ui/react";
import Tables from "../components/Tables";

const predictions = () => {
  return (
    <>
      <Box h="100vh">
        <Tables />
      </Box>
    </>
  );
};

export default predictions;

export default getServerSideProps(){
  return
}