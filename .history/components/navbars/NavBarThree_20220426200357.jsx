import { Stack, Box } from "@chakra-ui/react";
import { format, subDays,addDays } from "date-fns";
import Link from "next/link";
import React from "react";

import DateCard from "../cards/DateCard";

const NavBarThree = () => {
  c
    
     const todayDate = format(new Date(), "do MMMM")
   const today = format(new Date(), "EEEE") 
  const tomorrowDate = format(addDays(new Date(), 1), "do MMMM") 
const tomorrow = format(addDays(new Date(), 1), "EEEE") 
     
 const yesterdayDate= format(subDays(new Date(), 1), "do MMMM")
     const yesterday= format(subDays(new Date(), 1), "EEEE")
 const twoDaysAgoDate =
     date: format(subDays(new Date(), 2), "do MMMM") 
     day: format(subDays(new Date(), 2), "EEEE") },
threeDaysAgo:{
   date: format(subDays(new Date(), 3), "do MMMM") ,
   day: format(subDays(new Date(), 3), "EEEE") ,
}
  ]

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
