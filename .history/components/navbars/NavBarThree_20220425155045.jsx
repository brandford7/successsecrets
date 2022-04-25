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
        </Link>
        <Link href="/" passHref>
          <DateCard day='Yesterdat'>
            <Box> {moment(today).subtract(1, "days").format("Do MMMM")}</Box>
            
          </DateCard>
        </Link>
        <Link href="/predictions" passHref>
          <DateCard>Today</DateCard>
        </Link>
        <Link href="/predictions" passHref>
         <DateCard></DateCard>
        </Link>
      </Stack>
    </>
  );
};

export default NavBarThree;
