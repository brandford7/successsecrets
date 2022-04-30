import { Stack, chakra, Box } from "@chakra-ui/react";
import { startOfDay,format } from "date-fns";
import Link from "next/link";
import React from "react";

import DateCard from "../cards/DateCard";

const NavBarThree = () => {
  const today = startOfDay(new Date());

  /*  const fetchYesterday = async () => {
    const res = await Prediction.find({}).lean()
    const data= await res.json()
  }*/

  return (
    <>
      <Stack direction={["column", "column", "row"]} spacing="5" p="10">
        <Link href="/" passHref>
          <DateCard day=''>
           
          </DateCard>
        </Link>
        <Link href="/" passHref>
          <DateCard day=''>
           
          </DateCard>
        </Link>
        <Link href="/" passHref>
          <DateCard day="Yesterday">
            <Box> </Box>
          </DateCard>
        </Link>
        <Link href="/predictions" passHref>
          <DateCard day="Today">{format(new Date(), 'do EEEE')}</DateCard>
        </Link>
        <Link href="/predictions" passHref>
          <DateCard >
            <Box> </Box>
          </DateCard>
        </Link>
      </Stack>
    </>
  );
};

export default NavBarThree;
