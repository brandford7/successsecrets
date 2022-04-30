import { Stack, chakra, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import DateCard from "../cards/DateCard";

const NavBarThree = () => {
 // const today = startOfDay(new Date());

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
            <Box> {moment(today).subtract(1, "days").format("Do MMMM")}</Box>
          </DateCard>
        </Link>
        <Link href="/predictions" passHref>
          <DateCard day="Today">{today.format("Do MMMM")}</DateCard>
        </Link>
        <Link href="/predictions" passHref>
          <DateCard day={moment(today).add(1, "days").format("dddd")}>
            <Box> {moment(today).add(1, "days").format("Do MMMM")}</Box>
          </DateCard>
        </Link>
      </Stack>
    </>
  );
};

export default NavBarThree;
