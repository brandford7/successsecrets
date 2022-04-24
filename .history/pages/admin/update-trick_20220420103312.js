import { Box } from "@chakra-ui/react";
import React from "react";
import Forms from "../../components/PostMatchForm";

const UpdateTrick = () => {
  return (
    <>
      <Box h="100vh">
        <Forms />
      </Box>
    </>
  );
};

export default UpdateTrick;

UpdateTrick.getLayout = function getLayout(page) {
  return <>{page}</>;
};

