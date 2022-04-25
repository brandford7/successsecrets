import { Stack, chakra, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import moment from "moment";
import DateCard from "../cards/DateCard";

const NavBarThree = () => {
  const today = moment().startOf("day");
 
  return (
    <>
      <Stack direction={["column", "column", "row"]} spacing="5" p="10">
        <Link href="/" passHref>
         
            
            <DateCard>
              
              {moment(today).subtract(3, "days").format("Do MMMM")}
            </DateCard>
         
        </Link>
        <Link href="/" passHref>
          
            {moment(today).subtract(2, "days").format("Do MMMM")}
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
