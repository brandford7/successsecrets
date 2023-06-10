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
        <title>
          England-Your destination for sure football predictions for England
          football.
        </title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/england"
          key="canonical"
        />
        <meta
          name="description"
          content="  Welcome to our England predictions page. Here, you will find betting tips
          and football predictions for all the top football matches in England,
          including the Premier League, Championship, FA Cup,Community Shield, and League Cup. Find all your sure  betting tips, and accurate predictions here."
        />

        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="England" />
        <article>
          <Text fontSize="2xl" color="white" p="10" textAlign="justify" mb="10">
            Welcome to our England football predictions page. We provide you
            with the most accurate betting tips and football predictions for all
            the top football matches in England, including the Premier League,
            FA Cup,Community Shield, and Carabao Cup. Find all your sure and
            accurate predictions here.
          </Text>
        </article>
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
};

export default England;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: { $regex: /England/i },
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
