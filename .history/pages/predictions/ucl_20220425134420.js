import { Box } from '@chakra-ui/react';
import { endOfDay, startOfDay,getDay } from 'date-fns';
import React from 'react'
import PredictionTable from '../../components/tables/PredictionTable';
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';

const Ucl = ({predictions}) => {
  return (
    <>
      <Box h="auto">UEFA Champions League</Box>
      <PredictionTable predictions={predictions} />
    </>
  );
}

export default Ucl

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "UCL",
    start_date: {
     
    },
  });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}