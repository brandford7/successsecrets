import { Stack, chakra, Box } from "@chakra-ui/react";
import { format, subDays } from "date-fns";
import { sub } from "date-fns/esm";
import Link from "next/link";
import React from "react";

import DateCard from "../cards/DateCard";

const NavBarThree = () => {
  const today = format(new Date(), "do MMMM");
  const yesterday = format(subDays(new Date(), "do MMMM"))

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
          <DateCard day="Today">{TODAY}</DateCard>
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
