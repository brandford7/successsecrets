import { Box } from '@chakra-ui/react';
import React from 'react'
import { endOfDay, startOfDay } from "date-fns";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from '../../lib/dbConnect';
import Prediction from '../../models/Prediction';

const International = ({predictions}) => {
  return (
    <>
      <Box h="auto">International</Box>
      <PredictionTable predictions={predictions} />
    </>
  );
}

export default International

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "International",start_date: {
   $gte: startOfDay(new Date),
      $lte:moment().endOf('day'),
  } });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}