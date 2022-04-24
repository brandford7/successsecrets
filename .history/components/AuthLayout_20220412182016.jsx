import { Container } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Container maxW="container.xl" bg="gray.100" h="100vh" p="0">
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default AuthLayout;
