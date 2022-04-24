import React,{useState} from "react";
import { Stack, chakra, Box } from "@chakra-ui/react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const NavBarOne = () => {
  import { useSelector } from "react-redux";
  return (
    <>
      <Box display={["none", "none", "inline-block"]}>
        {" "}
        <Stack direction="row" align="center" spacing="10" color="white">
          {" "}
          <Link href="/predictions" passHref>
            <chakra.a _hover={{ color: "yellow.400" }}>Predictions</chakra.a>
          </Link>
          <Link href="/league-tables" passHref>
            <chakra.a _hover={{ color: "yellow.400" }}>League Tables</chakra.a>
          </Link>
          <Link href="/results" passHref>
            <chakra.a _hover={{ color: "yellow.400" }}>Results</chakra.a>
          </Link>
          <Link href="/statistics" passHref>
            <chakra.a _hover={{ color: "yellow.400" }}>Statistics</chakra.a>
          </Link>
        </Stack>
      </Box>
      <DropdownMenu />
    </>
  );
};

export default NavBarOne;
