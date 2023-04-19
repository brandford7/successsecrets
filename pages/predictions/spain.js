import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import Head from "next/head";
import React from "react";
import PredictionTable from "../../components//tables/PredictionTable";
import Title from "../../components/titles/Title";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Spain = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>Football Predictions for Spain</title>
         <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/spain"
          key="canonical"
        />
        <meta
          name="description"
          content="   Welcome to our Spain predictions page. This is your ultimate
          destination for accurate and insightful predictions on the most
          popular football leagues in Spain, La Liga, Copa del Rey,Spanish Super
          Cup and the Segunda division,"
        />
      
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="Spain" />
        <Text fontSize="2xl" color="white" textAlign="justify" p="10" mb="10">
          Welcome to our Spain football predictions page. This is your ultimate
          destination for sure and insightful spanish football predictions 
          . La Liga, Copa del Rey,Spanish Super
          Cup and the Segunda division. Our team of expert analysts and writers
          closely follow the Spanish football scene to provide you with reliable
          predictions and tips that you can count on.So why wait? Join us today
          and start winning big on the Spanish football scene with our expert
          predictions and analysis.
        </Text>
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
};

export default Spain;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: { $regex: /Spain/i },
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
