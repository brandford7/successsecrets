import React from "react";
import { Stack, chakra } from "@chakra-ui/react";
import Link from "next/link";

const NavBarTwo = () => {
  return (
    <>
      <Stack
        direction={["column","column","row"]}
        spacing="5"
        w="full"
        p="10"
        color="white"
        bg="brand.800"
        h="30px"
        align="center"
      >
        <Link href="/champions-league" passHref>
          <chakra.a _hover={{ color: "yellow.400" }}>Champions League</chakra.a>
        </Link>
        <Link href="/england" passHref>
          <chakra.a _hover={{ color: "yellow.400" }}>England</chakra.a>
        </Link>
        <Link href="/spain" passHref>
          <chakra.a _hover={{ color: "yellow.400" }}>Spain</chakra.a>
        </Link>
        <Link href="/germany" passHref>
          <chakra.a _hover={{ color: "yellow.400" }}>Germany</chakra.a>
        </Link>
        <Link href="/ita" passHref>
          <chakra.a _hover={{ color: "yellow.400" }}>Italy</chakra.a>
        </Link>
        <Link href="/statistics" passHref>
          <chakra.a _hover={{ color: "yellow.400" }}>France</chakra.a>
        </Link>
        <Link href="/statistics" passHref>
          <chakra.a _hover={{ color: "yellow.400" }}>Portugal</chakra.a>
        </Link>
        <Link href="/statistics" passHref>
          <chakra.a _hover={{ color: "yellow.400" }}>International</chakra.a>
        </Link>
      </Stack>
    </>
  );
};

export default NavBarTwo;
