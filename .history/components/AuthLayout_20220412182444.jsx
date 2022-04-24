import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Box bg="gray.100" h="100vh" p="0" >
        <Container maxW="container.xl">
          {children}
          <Footer />
        </Container>
      </Box>
    </>
  );
};

export default AuthLayout;
