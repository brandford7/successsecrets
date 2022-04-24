import { Box } from '@chakra-ui/react';
import React from 'react'
import PredictionTable from '../../components/PredictionTable';

const Italy = ({}) => {
  return (
    <>
      <Box h="auto">Italy</Box>
      <PredictionTable predictions={predictions} />
    </>
  );
}

export default Italy

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "Italy" });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}