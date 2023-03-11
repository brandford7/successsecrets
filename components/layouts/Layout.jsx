import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "../headers/Header";
import Footer from "../footers/Footer";
import ScrollToTop from "../footers/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <Box bg="gray.100" h="auto" p="0" minH="800px">
        <Container bg="bg.200" maxW="container.xl" textAlign="center" p="0">
          <Header />

          <div id="ezoic-pub-ad-placeholder-103"> </div>

          <main>{children}</main>
          <Footer />
          {/*<div id="ezoic-pub-ad-placeholder-102"> </div>*/}
        </Container>
        <ScrollToTop />
      </Box>
    </>
  );
};

export default Layout;
