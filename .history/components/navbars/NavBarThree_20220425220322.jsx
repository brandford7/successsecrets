import { Stack, chakra, Box } from "@chakra-ui/react";
import { format, subDays } from "date-fns";
import { addDays } from "date-fns/esm";
import Link from "next/link";
import React from "react";

import DateCard from "../cards/DateCard";

const NavBarThree = () => {
  const today = {
    date: format(new Date(), "do MMMM"),
  day: format(new Date(), "EEEE")  
}
  const tomorrow = { date: format(addDays(new Date(), 1), "do MMMM"),day: format(addDays(new Date(),1),"EEEE")}
  const yesterday = format(subDays(new Date(), 1), "do MMMM");
  const twoDaysAgo = format(subDays(new Date(), 2), "do MMMM")
  const threeDaysAgo = format(subDays(new Date(), 3), "do MMMM")

  /*  const fetchYesterday = async () => {
    const res = await Prediction.find({}).lean()
    const data= await res.json()
  }*/

  return (
    <>
      <Stack direction={["column", "column", "row"]} spacing="5" p="10">
        <Link href="/" passHref>
          <DateCard day="">{threeDaysAgo}</DateCard>
        </Link>
        <Link href="/" passHref>
          <DateCard day="">{twoDaysAgo}</DateCard>
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
          <DateCard day={tomorrow/}>
            <Box> {tomorrow}</Box>
          </DateCard>
        </Link>
      </Stack>
    </>
  );
};

export default NavBarThree;
