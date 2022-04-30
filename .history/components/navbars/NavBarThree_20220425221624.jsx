import { Stack, Box } from "@chakra-ui/react";
import { format, subDays,addDays } from "date-fns";
import Link from "next/link";
import React from "react";

import DateCard from "../cards/DateCard";

const NavBarThree = () => {
  const today = [
   date: {
      date: format(new Date(), "do MMMM"),
    },
    { day: format(new Date(), "EEEE") },
  ];
  const tomorrow = [
    { date: format(addDays(new Date(), 1), "do MMMM") },
    { day: format(addDays(new Date(), 1), "EEEE") },
  ];
  const yesterday = [
    { date: format(subDays(new Date(), 1), "do MMMM") },
    { day: format(subDays(new Date(), 1), "EEEE") },
  ];
  const twoDaysAgo = [
    { date: format(subDays(new Date(), 2), "do MMMM") },
    { day: format(subDays(new Date(), 2), "EEEE") },
  ];
  const threeDaysAgo = [
    { date: format(subDays(new Date(), 3), "do MMMM") },
    { day: format(subDays(new Date(), 3), "EEEE") },
  ];

  /*  const fetchYesterday = async () => {
    const res = await Prediction.find({}).lean()
    const data= await res.json()
  }*/

  return (
    <>
      <Stack direction={["column", "column", "row"]} spacing="5" p="10">
        <Link href="/" passHref>
          <DateCard day={threeDaysAgo.day}>{threeDaysAgo.date}</DateCard>
        </Link>
        <Link href="/" passHref>
          <DateCard day={threeDaysAgo.day}>{twoDaysAgo.date}</DateCard>
        </Link>
        <Link href="/" passHref>
          <DateCard day="Yesterday">
            <Box>{yesterday.date} </Box>
          </DateCard>
        </Link>
        <Link href="/predictions" passHref>
          <DateCard day="Today">{today.date}</DateCard>
        </Link>
        <Link href="/predictions" passHref>
          <DateCard day={tomorrow.day}>
            <Box> {tomorrow.date}</Box>
          </DateCard>
        </Link>
      </Stack>
    </>
  );
};

export default NavBarThree;
