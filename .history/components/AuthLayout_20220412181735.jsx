import { Container } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Container maxW="container.xl">
        {" "}
        <Component {...pageProps} />
      </Container>
    </>
  );
};

export default AuthLayout;
