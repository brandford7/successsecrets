import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import React from "react";
import Title from "../../components/titles/Title";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Head from "next/head";

const Portugal = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>Football Predictions from Portugal</title>
        <meta
          name="description"
          content="Welcome to our page dedicated to Portugal predictions. On this page, you
          will find expert predictions and analysis for upcoming matches in Portugal,
          including the Primeira Liga, Segunda Liga, Taca de Liga ,Taca de Portugal, and Portuguese Super Cup."
        />
        <meta
          name="keywords"
          content="prediction on football ,predictz, football predictions, bet predictions, portugal football predictions"
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="Portugal" />
        <Text fontSize="2xl" color="white" p="10" mb="10">
          Welcome to the Portugal Soccer Predictions page, where you can find
          expert analysis and predictions for all the major soccer matches
          featuring top teams from Portugal . Whether you are a die-hard fan of
          Benfica, Porto, or Sporting Lisbon, or just a casual follower of
          Portuguese soccer, our team of experienced analysts has got you
          covered. We use the latest data and statistical models to provide
          accurate and insightful predictions for upcoming matches, taking into
          account factors such as team form, injuries, and head-to-head records.
          From the Primeira Liga to the Taca de Portugal, our predictions cover
          all the major domestic competitions. Be sure to bookmark our Portugal
          Soccer Predictions page and check back regularly for the latest
          insights and predictions
        </Text>
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
};

export default Portugal;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "Portugal",
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
