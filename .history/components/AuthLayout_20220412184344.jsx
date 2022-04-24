import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Box bg="gray.100" h="auto" p='0' >
        <Container bg='brand.900' maxW="container.xl" w='100%'>
          {children}
          <Footer />
        </Container>
      </Box>
    </>
  );
};

export default AuthLayout;
