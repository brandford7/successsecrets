import { Box } from '@chakra-ui/react';
import React from 'react'
import moment from "moment";
import PredictionTable from '../../components/PredictionTable';
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';

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
       $gte: moment().startOf('day'),
      $lte:moment().endOf('day'),
    },
  });

  
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}