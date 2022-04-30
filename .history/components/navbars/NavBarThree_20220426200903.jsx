import { Stack, Box } from "@chakra-ui/react";
import { format, subDays, addDays } from "date-fns";
import Link from "next/link";
import React from "react";

import DateCard from "../cards/DateCard";

const NavBarThree = () => {
  

  const todayDate = format(new Date(), "do MMMM");
  const today = format(new Date(), "EEEE");
  const tomorrowDate = format(addDays(new Date(), 1), "do MMMM");
  const tomorrow = format(addDays(new Date(), 1), "EEEE");

  const yesterdayDate = format(subDays(new Date(), 1), "do MMMM");
  const yesterday = format(subDays(new Date(), 1), "EEEE");
  const twoDaysAgoDate = format(subDays(new Date(), 2), "do MMMM");
  const twoDaysAgo = format(subDays(new Date(), 2), "EEEE");
  const threeDaysAgoDate = format(subDays(new Date(), 3), "do MMMM");
  const threeDaysAgo = format(subDays(new Date(), 3), "EEEE");

  /*  const fetchYesterday = async () => {
    const res = await Prediction.find({}).lean()
    const data= await res.json()
  }*/

  return (
    <>
      <Stack direction={["column", "column", "row"]} spacing="5" p="10">
        <Link href="/" passHref>
          <DateCard day={threeDaysAgo}>{threeDaysAgoDate}</DateCard>
        </Link>
        <Link href="/" passHref>
          <DateCard day={twoDaysAgo}>{twoDaysAgoDate}</DateCard>
        </Link>
        <Link href="/" passHref>
          <DateCard day="esterdayDay}>
            <Box>{yesterdayDate} </Box>
          </DateCard>
        </Link>
        <Link href="/predictions" passHref>
          <DateCard day="Today">{todayDate}</DateCard>
        </Link>
        <Link href="/predictions" passHref>
          <DateCard day={tomorrow}>
            <Box> {tomorrowDate}</Box>
          </DateCard>
        </Link>
      </Stack>
    </>
  );
};

export default NavBarThree;
