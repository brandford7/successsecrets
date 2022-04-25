import { Stack,chakra } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavBarThree = ({yesterday}) => {
  return (
    <>
      <Stack direction={["column", "column", "row"]} spacing='5'>
        <Link href="/" passHref>
          <chakra.a>3 days Ago</chakra.a>
        </Link>
        <Link href="/" passHref>
          <chakra.a>2 days Ago</chakra.a>
        </Link>
        <Link href="/" passHref>
          <chakra.a borderRadius='5px' bg='red'>Yesterday</chakra.a>
        </Link>
        <Link href="/" passHref>
          <chakra.a>Today</chakra.a>
        </Link>
        <Link href="/" passHref>
          <chakra.a>Tomorrow</chakra.a>
        </Link>
      </Stack>
    </>
  );
};

export default NavBarThree;
