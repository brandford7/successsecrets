import { Box } from '@chakra-ui/react';
import { endOfDay, startOfDay } from 'date-fns';
import React from 'react'
import PredictionTable from '../../components/PredictionTable';
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/tables/Prediction';

const Italy = ({predictions}) => {
  return (
    <>
      <Box overflow="hidden" h="auto">
        Italy
      </Box>
      <PredictionTable predictions={predictions} />
    </>
  );
}

export default Italy

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "Italy",
    start_date: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date()),
    },
  });

  
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}