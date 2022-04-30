import { Box } from '@chakra-ui/react';
import { endOfDay, startOfDay } from 'date-fns';
import React from 'react'
import PredictionTable from '../../components/tables/PredictionTable';
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';

const Ucl = ({predictions}) => {
  return (
    <>
      <Box h="100vh">UEFA Champions League</Box>
     
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

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}