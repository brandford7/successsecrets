import React,{useState} from "react";
import { Stack, chakra, Box } from "@chakra-ui/react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const NavBarOne = () => {
  const [open, setIsOpen] = useState(false)
  const handleIsOpen = () =>setIsOpen(!open)
  return (
    <>
      <Stack direction="row" spacing="10" color="white">
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
        <DropdownMenu handleOpen={/>
      </Stack>
      {isOpen && <Box bg='gray'>Hi</Box>}
    </>
  );
};

export default NavBarOne;
