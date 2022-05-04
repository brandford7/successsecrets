import { Box } from '@chakra-ui/react';
import { endOfDay, startOfDay } from 'date-fns';
import Head from 'next/head';
import React from 'react'
import PredictionTable from '../../components//tables/PredictionTable';
import Title from '../../components/titles/Title';
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';

const Spain = ({predictions}) => {
  return (
    <>
     
      <Head>
        <title>Spain</title>
        <meta
          name="description"
          content="The best site for football predictions"
        />
        <link rel="icon" href="/success-image.jpg" />
      </Head>
      <Box overflow="hidden" h={["auto","auto","100vh"]}>
        <Title name="Spain" />
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
}

export default Spain

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "Spain",
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
    revalidate: 10,
  };
}