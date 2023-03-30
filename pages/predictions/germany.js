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
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/germany"
          key="canonical"
        />
        <meta
          name="description"
          content="Welcome to our Germany predictions page. Here, you will find expert football
          analysis and predictions for all the top football matches in Germany,
          including the Bundesliga, Bundesliga 2,DFB Pokal, and German Super Cup."
        />

        <link rel="icon" href="/success-image.jpg" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="Germany" />
        <Text fontSize="2xl" color="white" textAlign="justify" p="10" mb="10">
          Welcome to Germany predictions page. On this page, you will find
          expert Germany football predictions.Our team of football experts has
          years of experience analyzing the German football leagues, including
          the Bundesliga, Bundesliga 2,DFB Pokal, and German Super Cup and more.
          We use a combination of statistical analysis and insider knowledge to
          make our predictions, giving you the best chance of making informed
          bets on Germany soccer matches. Make sure to bookmark this page and
          check back regularly for the latest analysis, and predictions on
          Germany soccer.
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
    country: { $regex: /Germany/i },
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
    revalidate: 5,
  };
}
