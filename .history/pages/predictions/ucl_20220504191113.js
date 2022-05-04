import { Box } from '@chakra-ui/react';
import { endOfDay, startOfDay } from 'date-fns';
import React from 'react'
import Title from '../../components/titles/Title';
import PredictionTable from '../../components/tables/PredictionTable';
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';
import Head from 'next/head';

const Ucl = ({ predictions }) => {

  return (
    <>
      <Head>
        <title>Champions League</title>
        <meta
          name="description"
          content="Predictions for campions "
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h="100vh">
        <Title name="Uefa Champions League" />
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
}

export default Ucl

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "UCL",
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