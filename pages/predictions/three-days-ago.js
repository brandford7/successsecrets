import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { subDays, format } from "date-fns";
import Head from "next/head";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";

import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const ThreeDaysAgo = ({ predictions }) => {
  const threeDaysAgoDate = format(subDays(new Date(), 3), "do MMMM");

  return (
    <Box h={["auto", "auto", "100vh"]} overflow="hidden" bg="bg.200">
      <Head>
        <title>Three Days Ago-Football Preditions for 3 days Ago</title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/three-days-ago"
          key="canonical"
        />
        <meta
          name="description"
          content="Football Predictions for 3 days ago"
        />

        <link rel="icon" href="/success-image.webp" />
      </Head>
      <article>
        <Text
          as="p"
          color="white"
          fontSize="2xl"
          textAlign="justify"
          p="10"
          mb="10"
        >
          Welcome to our website page featuring betting tips for events that
          took place three days ago. We understand that sometimes you may have
          missed out on betting opportunities or want to analyze past matches
          for learning purposes. That is why we provide you with valuable
          insights and tips on sporting events that occurred three days ago. Our
          team of experienced analysts meticulously studies historical data,
          match statistics, team performances, and other relevant factors to
          provide accurate and reliable betting tips. By reviewing events that
          have already taken place, we aim to help you make informed decisions
          based on past outcomes.
        </Text>
      </article>
      <Flex justify="center">
        <NavBarThree />
      </Flex>
      <Heading as="h2" p="10" color="white">
        Betting tips for {threeDaysAgoDate}
      </Heading>
      <PredictionTable predictions={predictions} />
    </Box>
  );
};

export default ThreeDaysAgo;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    start_date: {
      $gt: subDays(new Date(), 4),
      $lte: subDays(new Date(), 3),
    },
  });

  return {
    props: { predictions: JSON.parse(JSON.stringify(predictions)) },
    revalidate: 5,
  };
}
