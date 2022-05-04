import { Box, Flex, Heading } from '@chakra-ui/react';
import { endOfDay, startOfDay } from 'date-fns';
import Head from 'next/head';
import React from 'react'
import NavBarThree from '../components/navbars/NavBarThree';
import PredictionTable from '../components/tables/PredictionTable';
import dbConnect from '../lib/dbConnect'
import Prediction from '../models/Prediction'

const Results = ({ predictions }) => {
  console.log(predictions.results)
  return (
    <>
      
      <Box overflow="hidden" h="auto" bg="bg.200">
        <Head>
          <title>Predictions</title>
          <meta
            name="description"
            content="The best site for football predictions"
          />
          <link rel="icon" href="/success-image.webp" />
        </Head>
       
        <Heading p="10" color="white">
          Results
        </Heading>
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
}

export default Results

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
