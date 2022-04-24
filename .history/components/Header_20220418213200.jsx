import { Box, Container, Select, Flex, chakra, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MainLogo from "./MainLogo";
import NavBarOne from "./NavBarOne";
import NavBarTwo from "./NavBarTwo";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import UserAvatar from "./UserAvatar";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const { data: session } = useSession();
  const open = useSelector((state) => state.menu.isOpen);
  
  
  
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Flex align="center" justify="space-between" p="10px" bg="bg.200">
          <MainLogo />
          <Box display={["none", "none", "inline-block"]}>
            <NavBarOne />
          </Box>
          <DropdownMenu />
          {session && (
            <Stack direction="row" align="center">
              <UserAvatar
                name={session?.username}
                image={session?.user.image}
              />
              <chakra.button color="brand.700" onClick={() => signOut()}>
                Sign Out
              </chakra.button>
            </Stack>
          )}
        </Flex>
        {!open && (
          <Box bg="bg.200" borderTop="3px solid black">
            <NavBarOne />
          </Box>
        )}
        <NavBarTwo />
      </Box>
    </>
  );
};

export default Header;
