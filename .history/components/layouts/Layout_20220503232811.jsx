import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "../headers/Header";
import Footer from "../footers/Footer";


const Layout = ({ children }) => {
  return (
    <>
      <Box bg="gray.100" h="auto" p="0" minH="800px" >
        <Container bg='bg.200' maxW="container.xl" textAlign="center" p='0'>
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
        <Scr
      </Box>
    </>
  );
};

export default Layout;
