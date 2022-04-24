import { Box } from '@chakra-ui/react';
import React from 'react'
import PredictionTable from '../../components/PredictionTable';
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';

const France = ({predictions}) => {
  return (
    <>
      <Box h="auto">France</Box>
      <PredictionTable predictions={predictions} />
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

  console.log(predictio