import { Stack,chakra } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavBarThree = ({yesterday}) => {
  return (
    <>
      <Stack direction={["column", "column", "row"]} spacing="5" p="10">
        <Link href="/" passHref>
          <chakra.a bg="silver" w="100px">
            3 days Ago
          </chakra.a>
        </Link>
        <Link href="/" passHref>
          <chakra.a bg="silver" w="100px">
            2 days Ago
          </chakra.a>
        </Link>
        <Link href="/" passHref>
          <chakra.a borderRadius="5px" bg="silver" w="100px">
            Yesterday
          </chakra.a>
        </Link>
        <Link href="/" passHref>
          <chakra.a bg="silver" w="100px">
            Today
          </chakra.a>
        </Link>
        <Link href="/" passHref>
          <chakra.a  bg="silver" w="100px">
            Tomorrow
          </chakra.a>
        </Link>
      </Stack>
    </>
  );
};

export default NavBarThree;
