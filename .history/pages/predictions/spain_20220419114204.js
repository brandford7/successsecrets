import { Box } from '@chakra-ui/react';
import React from 'react'
import PredictionTable from '../../components/PredictionTable';

const Spain = ({predictions}) => {
  return (
    <>
      <Box h="auto">Spain</Box>
      <PredictionTable predictions={predictions} />
    </>
  );
}

export default Spain

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "Spain" });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}