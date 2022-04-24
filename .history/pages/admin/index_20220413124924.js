import { Box, Text } from "@chakra-ui/react";

import React from "react";


const Admin = () => {
  return (
    <>
      <Box h="100vh">
        <MainLogo
        <Text color="brand.900">Welcome to the Admin page</Text>
      </Box>
    </>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page) {
  return <>{admin}</>;
};
