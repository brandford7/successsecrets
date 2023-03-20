import { Box, Flex, Heading,Text } from "@chakra-ui/react";
import { format,subDays } from "date-fns";
import Head from "next/head";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";

import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const TwoDaysAgo = ({ predictions }) => {

const twoDaysAgoDate = format(subDays(new Date(), 2), "do MMMM");

  
  return (
    <Box h={["auto", "auto", "100vh"]} bg="bg.200">
      <Head>
        <title>Two Days Ago</title>
        <meta name="description" content="Predictions for 2 days ago" />
        <meta
          name="keywords"
          content="prediction on football ,predictz, football predictions, bet predictions, "
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Flex justify="center">
        <NavBarThree />
      </Flex>
      <Heading p="10" color="white">
        Predictions for {twoDaysAgoDate}
      </Heading>
      <PredictionTable predictions={predictions} />
    </Box>
  );
};

export default TwoDaysAgo;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    start_date: {
          $gt: subDays(new Date(), 3),
          $lte:  subDays(new Date(),2)
     
    },
  });

  return {
    props: { predictions: JSON.parse(JSON.stringify(predictions)) },
    revalidate: 10,
  };
}
