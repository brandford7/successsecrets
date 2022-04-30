import { Box } from "@chakra-ui/react";
import React from "react";
import UpdateTrickForm from "../../components/forms/UpdateTrickForm";
import UpdateMatchForm from "../../components/UpdateMatchForm";

const UpdateTrick = () => {
  return (
    <>
      <Box h="100vh">
       <UpdateTrickForm/>
      </Box>
    </>
  );
};

export default UpdateTrick;

UpdateTrick.getLayout = function getLayout(page) {
  return <>{page}</>;
};

