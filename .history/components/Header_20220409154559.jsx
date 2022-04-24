import { Box, Container, Select, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import MainLogo from "./MainLogo";
import NavBarOne from "./NavBarOne";
import NavBarTwo from "./NavBarTwo";


const Header = () => {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Flex align="center" justify="space-between" p="10px" bg="bg.200">
          <button> onClick={signOut}</button>
          <MainLogo />
          <NavBarOne />
        </Flex>
        <NavBarTwo />
      </Box>
    </>
  );
};

export default Header;
