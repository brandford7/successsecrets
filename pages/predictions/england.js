import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import React from "react";
import Title from "../../components/titles/Title";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Head from "next/head";

const England = ({ predictions }) => {
  console.log(predictions);
  return (
    <>
      <Head>
        <title>England</title>
        <meta
          name="description"
          content="  Welcome to our England predictions page. Here, you will find expert
          analysis and predictions for all the top football matches in England,
          including the Premier League, Championship, FA Cup,Community Shield, and League Cup."
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="England" />
        <Text fontSize="2xl" color="white" p="10" mb="10">
          Welcome to our England predictions page. Here, you will find expert
          analysis and predictions for all the top football matches in England,
          including the Premier League, FA Cup,Community Shield, and Carabao
          Cup. whether you are looking to stay on top of the latest predictions
          or just want to know more about the game, join us as we explore the
          exciting world of football in England and make our predictions for the
          biggest matches of the season!
        </Text>
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
};

export default England;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "England",
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
