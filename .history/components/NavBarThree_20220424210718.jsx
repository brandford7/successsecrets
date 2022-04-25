import { Stack,chakra } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavBarThree = () => {
  return (
    <>
      <Stack direction="row">
        <Link><chakra.a>2 days </chakra.a></Link>
      </Stack>
    </>
  );
};

export default NavBarThree;
