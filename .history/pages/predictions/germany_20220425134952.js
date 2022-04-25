import { Box } from '@chakra-ui/react';
import React from 'react'
import moment from 'moment';
import PredictionTable from '../../components/PredictionTable';
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';

const Germany = ({predictions}) => {
  return (
    <>
      <Box h='auto'>Germany</Box>
        <PredictionTable predictions={predictions} />
    </>
  );
}

export default Germany

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "Germany",
    start_date: {
      $gte: moment().startOf("day"),
      $lte: moment().endOf("day"),
    },
  });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}