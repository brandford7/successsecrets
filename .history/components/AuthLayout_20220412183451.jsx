import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Box bg="" h="auto"  >
        <Container bg='brand.900' maxW="container.xl">
          {children}
          <Footer />
        </Container>
      </Box>
    </>
  );
};

export default AuthLayout;
