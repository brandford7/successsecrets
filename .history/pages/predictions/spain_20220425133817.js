import { Box } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react'
import PredictionTable from '../../components/tables/PredictionTable';
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';

const Spain = ({predictions}) => {
  return (
    <>
      <Box h="auto">Spain</Box>
      <PredictionTable predictions={predictions} />
    </>
  );
}

export default Spain

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: "Spain",
    start_date: {
      $gte: moment().startOf('day'),
      $lte: moment.endOf('day')
    },
  });

  console.log(moment.endOf('dy'));
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}