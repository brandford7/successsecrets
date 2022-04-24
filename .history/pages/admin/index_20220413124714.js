import { Box, Text } from "@chakra-ui/react";

import React from "react";
import Forms from "../../components/Forms";

const Admin = () => {
  return (
    <>
      <Box h="100vh">
        <Text color="brand.900">Welcome to the Admin page</Text>
      </Box>
    </>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page) {
  return <><MainLogo/>{admin}</>;
};
