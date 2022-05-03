import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Footer from "../footers/Footer";
import ScrollToTop from "../footers/ScrollToTop";

import MainLogo from "../sections/MainLogo";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Box bg="gray.100"  h="auto" p="" minH='800px'>
        <Container bg="brand.900" maxW="container.xl" p='0' >
          <Box p="5">
            <MainLogo />
          </Box>
          {children}
          <Footer />
        </Container>
        <ScrollToTop
      </Box>
    </>
  );
};

export default AuthLayout;
