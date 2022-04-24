import { Box } from "@chakra-ui/react";
import React from "react";
import UpdateMatchForm from "../../components/UpdateMatchForm";

const UpdateMatch = () => {
  return (
    <>
      <Box h="100vh">
        <UpdateMatchForm />
      </Box>
    </>
  );
};

export default UpdateMatch;

UpdateMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};

