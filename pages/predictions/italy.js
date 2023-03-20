import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import React from "react";
import Title from "../../components/titles/Title";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Head from "next/head";

const Italy = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>Football Predictions from Italy</title>
        <meta
          name="description"
          content="Welcome to our Italy predictions page. Here, you'll find expert analysis and predictions for all the top football matches in Italy, including Serie A, Serie B, Coppa Italia, and Supercoppa Italiana."
        />
        <meta
          name="keywords"
          content="prediction on football ,predictz, football predictions, bet predictions, italy football predictions"
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="Italy" />
        <Text fontSize="2xl" color="white" p="10" mb="10">
          Welcome to our Italy predictions page. Here, you will find expert
          predictions for all the top football matches in Italy, including Serie
          A,Serie B, Coppa Italia, and Supercoppa Italiana. Our team of experts
          use a variety of statistical tools, historical data, and other factors
          to arrive at their predictions. Whether you are a die-hard Italian
          soccer fan or simply looking to make informed bets, our Italy Soccer
          Predictions page has got you covered. We update our predictions
          regularly, so be sure to check back often for the latest insights and
          information on Italian soccer matches.
        </Text>
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
};

export default Italy;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "Italy",
    start_date: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date()),
    },
  });

  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
    revalidate: 10,
  };
}
