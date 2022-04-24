import { Box, Text } from "@chakra-ui/react";
import MainLogo from "../../components/MainLogo"

import React from "react";


const Admin = () => {
  return (
    <>
      <Box h="100vh">
        <MainLogo/>
       <Box></Box> 
      </Box>
    </>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page) {
  return <>{page}</>;
};
