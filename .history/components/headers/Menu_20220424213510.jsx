import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import MainLogo from "./MainLogo";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Box bg="gray.100" h="auto" p="0">
      
        <Container>
          {children}
        </Container>
      </Box>
    </>
  );
};

export default AuthLayout;
