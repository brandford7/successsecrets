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
        <title>Europe</title>
        <meta
          name="description"
          content="Predictions for champions league, europa league, conference league, and other european matches"
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h="auto">
        <Title name="Europe" />
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
}

export default Europe

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "Europe",
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