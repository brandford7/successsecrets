import React from "react";
import { Stack, chakra,} from "@chakra-ui/react";
import Link from "next/link";


const NavBarOne = () => {
  
  return (
    <>
      
      
        <Stack direction={["column", "column", "row"]} align="center"  spacing={["2","2","10"]} color="white">
          
          <Link href="/predictions" passHref>
            <chakra.a _hover={{ color: "yellow.400" }}>Predictions</chakra.a>
          </Link>
          <Link href="/league-tables" passHref>
            <chakra.a _hover={{ color: "yellow.400" }}>League Tables</chakra.a>
          </Link>
          <Link href="/results" passHref>
            <chakra.a _hover={{ color: "yellow.400" }}>Results</chakra.a>
          </Link>
          <Link href="/1xbet-tricks" passHref>
            <chakra.a _hover={{ color: "yellow.400" }}>1xBet Tricks</chakra.a>
          </Link>
        </Stack>
      
     
    </>
  );
};

export default NavBarOne;
