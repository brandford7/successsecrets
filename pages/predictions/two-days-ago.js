import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { format, subDays } from "date-fns";
import Head from "next/head";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";

import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const TwoDaysAgo = ({ predictions }) => {
  const twoDaysAgoDate = format(subDays(new Date(), 2), "do MMMM");

  return (
    <Box h={["auto", "auto", "100vh"]} bg="bg.200">
      <Head>
        <title>Two Days Ago-Football predictions for two days Ago</title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/two-days-ago"
          key="canonical"
        />
        <meta name="description" content="Predictions for 2 days ago" />

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
          At our website, we understand that bettors often seek additional
          information and analysis beyond current events. By showing you
          predictions on matches from two days ago, we provide a unique
          perspective that can be leveraged for various purposes, such as
          refining your betting strategies, studying trends, or reviewing missed
          opportunities. Our team of experienced analysts diligently examines
          the results, outcomes, and performance indicators from previous
          events, extracting valuable patterns, player or team tendencies, and
          other factors that can influence future outcomes. By leveraging these
          insights, you can enhance your betting knowledge and potentially gain
          an edge over other bettors.
        </Text>
      </article>
      <Flex justify="center">
        <NavBarThree />
      </Flex>

      <Heading as="h2" p="10" color="white">
        Betting tips for {twoDaysAgoDate}
      </Heading>

      <PredictionTable predictions={predictions} />
    </Box>
  );
};

export default TwoDaysAgo;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    start_date: {
      $gt: subDays(new Date(), 3),
      $lte: subDays(new Date(), 2),
    },
  });

  return {
    props: { predictions: JSON.parse(JSON.stringify(predictions)) },
    revalidate: 5,
  };
}
