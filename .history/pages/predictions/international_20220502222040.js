import { Box } from '@chakra-ui/react';
import React from 'react'
import { endOfDay, startOfDay } from "date-fns";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';
import Title from '../../components/titles/Title';
import Head from 'next/head';

const International = ({predictions}) => {
  return (
    <>
      {" "}
      <Head>
        <title>Success Secrets bet</title>
        <meta
          name="description"
          content="The best site for football predictions"
        />
        <link rel="icon" href="/success-image.jpg" />
      </Head>
      <Box overflow="hidden" h="100vh">
        <Title name="International" />
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
}

export default International

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "International",start_date: {
   $gte: startOfDay(new Date()),
      $lte:endOfDay(new Date()),
  } });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}