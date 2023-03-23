import { Box, Heading } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import Head from "next/head";
import React from "react";

import ResultTable from "../components/tables/ResultTable";
import dbConnect from "../lib/dbConnect";
import Prediction from "../models/Prediction";

const Results = ({ predictions }) => {
  console.log(predictions.results);
  return (
    <>
      <Box overflow="hidden" h={["auto", "auto,", "100vh"]} bg="bg.200">
        <Head>
          <title>Results</title>
          <link
            rel="canonical"
            href="https://www.successsecretsbet.com/results"
            key="canonical"
          />
          <meta
            name="description"
            content="The best site for football predictions"
          />
          <link rel="icon" href="/success-image.webp" />
        </Head>

        <Heading p="10" color="white">
          Latest Results
        </Heading>
        <ResultTable predictions={predictions} />
      </Box>
    </>
  );
};

export default Results;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    start_date: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date()),
    },
  });

  return {
    props: { predictions: JSON.parse(JSON.stringify(predictions)) },
    revalidate: 10,
  };
}
