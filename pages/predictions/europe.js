import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import React from "react";
import Title from "../../components/titles/Title";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Head from "next/head";

const Europe = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>Football Predictions for UEFA matches</title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/europe"
          key="canonical"
        />
        <meta
          name="description"
          content="  Welcome to our page dedicated to UEFA predictions. On this page, you
          will find expert predictions and analysis for upcoming UEFA football matches,
          including the Champions League, Europa League, Conference League and
          European Championship, and Nations League.zulubet predictions forebet"
        />

        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="UEFA" />
        <Text fontSize="2xl" color="white" textAlign="justify" p="10" mb="10">
          Welcome to our page dedicated to UEFA predictions! On this page, you
          will find expert football predictions and analysis for upcoming UEFA
          matches, including the Champions League, Europa League, Conference
          League and European Championship, and UEFA Nations League. Our team of
          experienced football analysts and sports enthusiasts use a combination
          of statistical models, team and player performance data, and in-depth
          knowledge of the game to provide you with the most accurate and
          up-to-date predictions for each match.Find all zulubet predictions
          forebet.
        </Text>
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
};

export default Europe;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: { $regex: /UEFA/i },
    start_date: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date()),
    },
  });

  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
    revalidate: 5,
  };
}
