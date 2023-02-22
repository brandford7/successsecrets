import { Box } from '@chakra-ui/react';
import { endOfDay, startOfDay } from 'date-fns';
import React from 'react'
import Title from '../../components/titles/Title';
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';
import Head from 'next/head';

const France = ({predictions}) => {
  return (
    <>
      
      <Head>
        <title>France</title>
        <meta
          name=F"
          content="Predicitions for Italy"
        />
        <link rel="icon" href="/success-image.jpg" />
      </Head>
      <Box overflow="hidden" h={["auto","auto","100vh"]}>
        <Title name="France" />
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
}

export default France

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "France",
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