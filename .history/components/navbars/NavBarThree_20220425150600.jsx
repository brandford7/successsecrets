import { Stack,chakra } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavBarThree = ({ yesterday }) => {
  const today = moment().stat
  return (
    <>
      <Stack direction={["column", "column", "row"]} spacing="5" p="10">
        <Link href="/" passHref>
          <chakra.a
            bg="silver"
            w="100px"
            borderRadius="5px"
            _hover={{ color: "white" }}
          >
            3 days Ago
          </chakra.a>
        </Link>
        <Link href="/" passHref>
          <chakra.a
            bg="silver"
            w="100px"
            borderRadius="5px"
            _hover={{ color: "white" }}
          >
            {moment().subtract(2,'days')}
          </chakra.a>
        </Link>
        <Link href="/" passHref>
          <chakra.a
            bg="silver"
            w="100px"
            borderRadius="5px"
            _hover={{ color: "white" }}
          >
            Yesterday
          </chakra.a>
        </Link>
        <Link href="/predictions" passHref>
          <chakra.a
            bg="silver"
            w="100px"
            borderRadius="5px"
            _hover={{ color: "white" }}
          >
            Today
          </chakra.a>
        </Link>
        <Link href="/predictions" passHref>
          <chakra.a
            bg="silver"
            w="100px"
            borderRadius="5px"
            _hover={{ color: "white" }}
          >
            Tomorrow
          </chakra.a>
        </Link>
      </Stack>
    </>
  );
};

export default NavBarThree;
