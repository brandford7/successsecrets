import { Box } from '@chakra-ui/react';
import React from 'react'
import PredictionTable from '../../components/PredictionTable';
import dbConnect from '../../lib/dbConnect';

const Germany = ({predictions}) => {
  return (
    <>
      <Box h='auto'>Germany</Box>
        <PredictionTable predictions={predictions} />
    </>
  );
}

export default Germany

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "Germany" });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}