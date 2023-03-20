import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import React from "react";
import Title from "../../components/titles/Title";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Head from "next/head";

const Germany = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>Football Predictions for Germany</title>
        <meta
          name="description"
          content="Welcome to our Germany predictions page. Here, you will find expert
          analysis and predictions for all the top football matches in Germany,
          including the Bundesliga, Bundesliga 2,DFB Pokal, and German Super Cup."
        />
        <meta
          name="keywords"
          content="prediction on football ,predictz, football predictions, bet predictions,germany football predictions "
        />
        <link rel="icon" href="/success-image.jpg" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="Germany" />
        <Text fontSize="2xl" color="white" p="10" mb="10">
          Welcome to Germany predictions page. On this page, you will find
          expert Germany soccer predictions.Our team of soccer experts has years
          of experience analyzing the German leagues, including the Bundesliga,
          Bundesliga 2,DFB Pokal, and German Super Cup and more. We use a
          combination of statistical analysis and insider knowledge to make our
          predictions, giving you the best chance of making informed bets on
          Germany soccer matches. Make sure to bookmark this page and check back
          regularly for the latest analysis, and predictions on Germany soccer.
        </Text>
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
};

export default Germany;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "Germany",
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
