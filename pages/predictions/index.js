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
    <Box overflow="hidden" h={["auto", "auto", "auto"]} bg="bg.200">
      <Head>
        <title>Predictions on football for today</title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions"
          key="canonical"
        />
        
        <meta
          name="description"
          content="  Welcome to our page dedicated to soccer predictions! Here, you will find
        expert analysis, insights, and predictions for upcoming soccer matches
        from leagues around the world. We cover major leagues such as the English Premier League, La Liga, Serie A,
        Bundesliga, UEFA Champions League, World Cup,MLS,NBA and many more, predictz.  Find all your sure predictions here.You can also find all your Mathematical football predictions and statistics for more than 700 leagues. Match previews, forebet,stat trends and live scores."
         
        />

        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Text color="white" textAlign="justify" fontSize="2xl" p="10" mb="10">
        Welcome to our page dedicated to sure daily soccer predictions! Here, you can sort soccer
        predictions for upcoming soccer matches from leagues around the world
        according to date. Our team of experienced analysts and soccer
        enthusiasts work tirelessly to provide accurate, reliable and sure football
        predictions, taking into account factors such as team form, player
        availability, head-to-head statistics, and other relevant data. We cover
        major leagues such as the English Premier League, Spanish La Liga,  Italian Serie A,
       Germany Bundesliga,CAF Champions League, Saudi Arabian League and many more. Find all your sure predictions here, and Mathematical football predictions and statistics for more than 700 leagues. Match previews,English Premier lEAGUE stat trends and live scores..
         
      </Text>
      <Flex justify="center">
        <NavBarThree />
      </Flex>

      <Heading p="10" color="white">
        Predictions for {todayDate}
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
