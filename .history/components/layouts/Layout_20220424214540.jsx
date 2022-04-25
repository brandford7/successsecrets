import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "../headers/Header";


const Layout = ({ children }) => {
  return (
    <>
      <Box bg="gray.100" h="auto" p="0" minH="800px" >
        <Container maxW="container.xl" textAlign="center">
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
      </Box>
    </>
  );
};

export default Layout;
