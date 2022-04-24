import { Box } from '@chakra-ui/react';
import React from 'react'
import PredictionTable from '../../components/PredictionTable';

const France = ({predictions}) => {
  return (
    <>
      <Box h="auto">France</Box>
      <PredictionTable predictions={predictions} />
    </>
  );
}

export default France

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "France" });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}