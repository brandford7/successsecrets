import { Box, Button, Text } from "@chakra-ui/react";
import MainLogo from "../../components/MainLogo";

import React from "react";

const Admin = () => {
  return (
    <>
      <Box h="100vh">
        <Box p="5">
          <MainLogo />
        </Box>
        <Box display="flex" mt="50px" justifyContent="center">
          <Text color="white" fontSize="18px" fontWeight="bold">
            Welcome to the Admin page
          </Text>
        </Box>
        <Box display="flex" alignItems='center' justifyContent='center'>
          <Button >Post a match</Button>
        </Box>
      </Box>
    </>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page) {
  return <>{page}</>;
};
