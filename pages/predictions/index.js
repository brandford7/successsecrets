import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay, format } from "date-fns";
import Head from "next/head";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";

import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Predictions = ({ predictions }) => {
  const todayDate = format(new Date(), "do MMMM");

  return (
    <Box overflow="hidden" h={["auto", "auto"]} bg="bg.200">
      <Head>
        <title>Soccer Predictions For Today.</title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions"
          key="canonical"
        />

        <meta
          name="description"
          content="  Welcome to our page dedicated to soccer predictions! Here, you will find
        expert soccer betting predictions for upcoming soccer matches
        from leagues around the world. We cover major leagues such as the English Premier League, La Liga, Serie A,
        Bundesliga, UEFA Champions League, World Cup,MLS, and many more,soccer bet today.  " />

        <link rel="icon" href="/success-image.webp" />
      </Head>
      <article>
        <Text color="white" textAlign="justify" fontSize="xl" p="10" mb="10">
          Welcome to our page dedicated to sure soccer predictions for today. Here, you can
          find soccer betting prediction for upcoming soccer matches from
          leagues around the world according to date. Our team of experienced
          analysts and soccer enthusiasts work tirelessly to provide accurate,
          reliable and best soccer bet today, taking into account factors such
          as team form, player availability, head-to-head statistics, and other
          relevant data. We cover major leagues such as the English Premier
          League, Spanish La Liga, Italian Serie A, Germany Bundesliga,CAF
          Champions League, Saudi Arabian League and many more soccer betting
          leagues. Find all your sure soccer betting predictions here, and
          soccer predictions for today here.
          
        </Text>
      </article>
      <Flex justify="center">
        <NavBarThree />
      </Flex>

      <Heading as="h2" p="10" color="white">
       Soccer Betting tips for {todayDate}
      </Heading>

      <PredictionTable predictions={predictions} />
    </Box>
  );
};

export default Predictions;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    start_date: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date()),
    },
  });

  return {
    props: { predictions: JSON.parse(JSON.stringify(predictions)) },
    revalidate: 5,
  };
}
