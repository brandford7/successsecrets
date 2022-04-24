import { Box } from "@chakra-ui/react";
import React from "react";
import UpdateMatchForm from "../../components/UpdateMatchForm";


const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const UpdateMatch = () => {

  
    
  return (
    <Box h="100vh">
      <UpdateMatchForm />
    </Box>
  );
};

export default UpdateMatch;

UpdateMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};
