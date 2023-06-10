import { Box, Flex, Heading,Text } from "@chakra-ui/react";
import { format,subDays } from "date-fns";
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
      <Text color="white" fontSize="2xl" textAlign="justify" p="10" mb="10">
        Welcome to our page dedicated to soccer predictions! Here, you can sort
        predictions for upcoming soccer matches from leagues around the world
        according to date. Our team of experienced analysts and soccer
        enthusiasts work tirelessly to provide accurate and reliable
        predictions, taking into account factors such as team form, player
        availability, head-to-head statistics, and other relevant data. We cover
        major leagues such as the English Premier League, La Liga, Serie A,
        Bundesliga, and many more. Whether you are an avid soccer fan looking to
        enhance your viewing experience or a bettor seeking valuable insights to
        inform your wagers, our soccer predictions page is the perfect resource
        for you. Our aim is to provide you with the most comprehensive and
        insightful predictions to help you make informed decisions and stay
        ahead of the game. So, if you want to stay up-to-date with the latest
        soccer predictions and increase your chances of success, be sure to
        bookmark our page and check back regularly for the latest updates.
      </Text>
      <Flex justify="center">
        <NavBarThree />
      </Flex>

      <Heading as='h2' p="10" color="white">
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
          $lte:  subDays(new Date(),2)
     
    },
  });

  return {
    props: { predictions: JSON.parse(JSON.stringify(predictions)) },
    revalidate: 5,
  };
}
