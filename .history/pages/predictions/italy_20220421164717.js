import { Box } from '@chakra-ui/react';
import React from 'react'
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

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "Italy" });

  
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}