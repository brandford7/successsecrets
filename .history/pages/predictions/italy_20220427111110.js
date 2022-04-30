import { Box } from '@chakra-ui/react';
import { endOfDay, startOfDay } from 'date-fns';
import React from 'react'
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';

const Italy = ({predictions}) => {
  return (
    <>
     
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