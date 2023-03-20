import { Box, Flex, Heading,Text } from "@chakra-ui/react";
import { startOfDay, subDays, format } from "date-fns";
import Head from "next/head";
import React from "react";
import NavBarThree from "../../components/navbars/NavBarThree";

import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Tomorrow = ({ predictions }) => {
  const yesterdayDate = format(subDays(new Date(), 1), "do MMMM");

  console.log(predictions);
  return (
    <Box h={["auto", "auto", "100vh"]} overflow="hidden" bg="bg.200">
      <Head>
        <title>Yesterday</title>
        <meta name="description" content="Yesterday's Predictions" />
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
        Predictions for {yesterdayDate}{" "}
      </Heading>
      <PredictionTable predictions={predictions} />
    </Box>
  );
};

export default Tomorrow;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    start_date: {
      $gt: subDays(new Date(), 2),
      $lt: startOfDay(new Date()),
    },
  });

  return {
    props: { predictions: JSON.parse(JSON.stringify(predictions)) },
    revalidate: 10,
  };
}
