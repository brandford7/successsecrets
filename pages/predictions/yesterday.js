import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { startOfDay, subDays, format } from "date-fns";
import Head from "next/head";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";

import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Tomorrow = ({ predictions }) => {
  const yesterdayDate = format(subDays(new Date(), 1), "do MMMM");

  
  return (
    <Box h={["auto", "auto", "100vh"]} overflow="hidden" bg="bg.200">
      <Head>
        <title>Yesterday-Football Predictions for yesterday </title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/yesterday"
          key="canonical"
        />
        <meta name="description" content="Yesterday's Predictions" />

        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Text color="white" fontSize="xl" textAlign="justify" p="10" mb="10">
        Welcome to our website page, Betting Tips for Yesterday. We understand
        the importance of having access to up-to-date and reliable information
        when making betting decisions. That is why we provide a dedicated
        platform where you can find valuable insights and tips specifically
        tailored to matches that were played yesterday.
      </Text>
      <Flex justify="center">
        <NavBarThree />
      </Flex>
      <Heading as="h2" p="10" color="white">
        Betting tips for {yesterdayDate}{" "}
      </Heading>
      <PredictionTable predictions={predictions} />
    </Box>
  );
};

export default Tomorrow;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    start_date: {
      $gt: subDays(new Date(), 2),
      $lt: startOfDay(new Date()),
    },
  });

  return {
    props: { predictions: JSON.parse(JSON.stringify(predictions)) },
    revalidate: 5,
  };
}
