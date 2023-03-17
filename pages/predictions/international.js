import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { endOfDay, startOfDay } from "date-fns";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Title from "../../components/titles/Title";
import Head from "next/head";

const International = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>International</title>
        <meta
          name="description"
          content="Welcome to our International predictions page. Here, you will find expert
          analysis and predictions for all the top international football matches ,
          including the World Cup, Club World Cup, Olympics, U17 and U20 World Cups"
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="International" />
        <Text p="10" mb="10">
          International predictions page is the ultimate destination for soccer
          enthusiasts who are looking to stay updated on the latest predictions,
          and insights about international soccer. Whether your are a casual fan
          or a seasoned follower of the sport, our page has everything you need
          to stay informed and make informed decisions. Our team of experienced
          analysts and writers are dedicated to providing accurate predictions
          and in-depth analysis of international soccer matches across various
          tournaments. We cover all major soccer events including the World Cup,
          Club World Cup, Olympics, U17 and U20 World Cups and more. We also
          provide expert opinions and statistical analysis to help you make
          informed decisions when placing bets on soccer matches.
        </Text>
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
};

export default International;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "International",
    start_date: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date()),
    },
  });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
    revalidate: 10,
  };
}
