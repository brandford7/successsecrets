import { Box } from '@chakra-ui/react'
import { endOfDay, startOfDay } from 'date-fns'
import React from 'react'
import Title from '../../components/titles/Title'
import PredictionTable from '../../components/tables/PredictionTable'
import dbConnect from '../../lib/dbConnect'
import Prediction from "../../models/Prediction"
import Head from 'next/head'

const England = ({ predictions }) => {
  console.log(predictions)
  return (
    <>
      <Head>
        <title>England</title>
        <meta name="description" content="Predicitions for France" />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="England" />
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
}

export default England;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "England",
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