import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr"
import UpdateMatchForm from "../../components/UpdateMatchForm";


const UpdateMatch = () => {
    
  return (
    <Box h="100vh">
      <UpdateMatchForm />
    </Box>
  );
};

export default UpdateMatch;
