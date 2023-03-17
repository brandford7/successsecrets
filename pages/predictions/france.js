import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import React from "react";
import Title from "../../components/titles/Title";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Head from "next/head";

const France = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>France</title>
        <meta
          name="description"
          content="Welcome to our France predictions page. Here, you will find expert
          analysis and predictions for all the top football matches in France,
          including the Ligue 1,
          Ligue 2, Coupe de la ligue, Coupe de France, and French Super Cup ."
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="France" />
        <Text fontSize="2xl" color="white" p="10" mb="10">
          Welcome to the France Soccer Predictions page, where you can find
          expert analysis, insights, and predictions on all things related to
          soccer in France. Our team of experienced sports analysts and
          enthusiasts are passionate about the game and are committed to
          providing you with the most accurate and up-to-date information
          possible. Whether you are a fan of Ligue 1, or any other soccer league
          in France, our page is the go-to destination for all your soccer
          predictions. We cover the Ligue 1, Ligue 2, Coupe de la ligue, Coupe
          de France, and French Super Cup. So whether you are a seasoned bettor
          or a casual fan, make sure to bookmark our page for all your France
          soccer predictions and analysis. With our team of experts on your
          side, you can stay one step ahead of the game and maximize your
          winnings.
        </Text>
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
};

export default France;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "France",
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
