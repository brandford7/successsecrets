import { Box, Flex, Heading } from "@chakra-ui/react";
import { format,subDays } from "date-fns";
import Head from "next/head";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";

import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const TwoDaysAgo = ({ predictions }) => {

const twoDaysAgoDate = format(subDays(new Date(), 2), "do MMMM");

  console.log(predictions);
  return (
    <Box h="100vh" bg="g.200">
      <Head>
        <title>Predictions</title>
        <meta
          name="description"
          content="The best site for football predictions"
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Flex justify="center">
        <NavBarThree />
      </Flex>
      <Heading p="10" color="white">
        Predictions for {twoDaysAgoDate}{" "}
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
