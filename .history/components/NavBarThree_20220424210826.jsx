import { Stack,chakra } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavBarThree = () => {
  return (
    <>
      <Stack direction="row">
        <Link>
          <chakra.a>3 days Ago</chakra.a>
        </Link>
        <Link>
          <chakra.a>2 days Ago</chakra.a>
        </Link>
        <Link>
          <chakra.a>Yesterday</chakra.a>
        </Link>
        <Link>
          <chakra.a>Today</chakra.a>
        </Link>
      </Stack>
    </>
  );
};

export default NavBarThree;
