import { Box, Container, Select, Flex, chakra, Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import UserAvatar from "../avatars/UserAvatar";
import NavBarOne from "../navbars/NavBarOne";
import NavBarTwo from "../navbars/NavBarTwo";
import DropdownMenu from "./DropdownMenu";
import MainLogo from "../sections/MainLogo";

const Header = () => {
  const { data: session } = useSession();
  const open = useSelector((state) => state.menu.isOpen);

  return (
    <>
      <Box display="flex" flexDirection="column">
        <Flex align="center" justify="space-between" p="10px" bg="bg.200">
          <MainLogo/>
          <Box display={["none", "none", "inline-block"]}>
            <NavBarOne />
          </Box>
          <DropdownMenu/>
          {session && (
            <Stack
              direction="row"
              align="center"
              cursor="pointer"
              onClick={() => signOut()}
            >
              <UserAvatar
                name={session?.username}
                image={session?.user.image}
              />
            </Stack>
          )}
        </Flex>
        {!open && (
          <Box
            display={["flex", "flex", "none"]}
            justifyContent="center"
            bg="bg.200"
            borderTop="3px solid white"
          >
            <NavBarOne />
          </Box>
        )}
        <NavBarTwo />
      </Box>
    </>
  );
};

export default Header;
