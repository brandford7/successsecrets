import { Box, Container, Select, Flex,chakra } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import MainLogo from "./MainLogo";
import NavBarOne from "./NavBarOne";
import NavBarTwo from "./NavBarTwo";
import {  signIn,signOut } from "next-auth/react";

const Header = () => {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Flex align="center" justify="space-between" p="10px" bg="bg.200">
          <MainLogo />
          <NavBarOne />
        {session?  <chakra.button color='brand.700' onClick={() => signOut()}>Sign Out</chakra.button>
        </Flex>
        <NavBarTwo />
      </Box>
    </>
  );
};

export default Header;
