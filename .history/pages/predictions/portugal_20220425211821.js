import { Box } from '@chakra-ui/react';
import { endOfDay, startOfDay,  } from 'date-fns';
import React from 'react'
import PredictionTable from '../../components/PredictionTable';
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';

const Portugal = ({predictions}) => {
  return (
    <>
      <Box h="auto">Portugal</Box>
      <PredictionTable predictions={predictions} />
    </>
  );
}

export default Portugal

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "Portugal",start_date: {
    $gte: startOfDay(new Date()),
    $lte: endOfDay(new Date())
  } });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}