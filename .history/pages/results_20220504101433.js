import { Box, Flex, Heading } from '@chakra-ui/react';
import { endOfDay, startOfDay } from 'date-fns';
import Head from 'next/head';
import React from 'react'
import PredictionTable from '../components/tables/PredictionTable';
import ResultTable from '../components/tables/ResultTable';
import dbConnect from '../lib/dbConnect'
import Prediction from '../models/Prediction'

const Results = ({ predictions }) => {
  console.log(predictions.results)
  return (
    <>
      {predictions.length > 0 && (
        <Box overflow="hidden" h="auto"]} bg="bg.200">
          <Head>
            <title>Results</title>
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
        </Box>)}
    </>
  );
}

export default Results

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    "result.1": { $exists: true },
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
