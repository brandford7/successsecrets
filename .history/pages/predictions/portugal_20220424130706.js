import { Box } from '@chakra-ui/react';
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

  const predictions = await Prediction.find({ country: "Portugal",createdAt: {
    $gte: startOfyesterDay(new Date()),
    $lte: endOfesterDay(new Date())
  } });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}