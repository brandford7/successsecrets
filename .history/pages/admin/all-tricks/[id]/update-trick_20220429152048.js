import { Box } from "@chakra-ui/react";
import React from "react";
import UpdateTrickForm from "../../../../components/forms/UpdateTrickForm";


const UpdateTrick = () => {

const TrickForm = {
  title: trick.title,
  video: prediction.match,
  
};

  return (
    <>
      <Box h="100vh">
        <UpdateTrickForm Values={TrickForm} />
      </Box>
    </>
  );
};

export default UpdateTrick;

UpdateTrick.getLayout = function getLayout(page) {
  return <>{page}</>;
};

