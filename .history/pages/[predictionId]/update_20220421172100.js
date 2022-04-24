import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import React from "react";
import UpdateMatchForm from "../../components/UpdateMatchForm";

const fetcher = (url) =>
  

const UpdateMatch = () => {
 
  return (
    <Box h="100vh">
      {/*  <UpdateMatchForm />  */}
    </Box>
  );
};

export default UpdateMatch;

UpdateMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};
