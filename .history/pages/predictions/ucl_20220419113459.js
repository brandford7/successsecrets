import { Box } from '@chakra-ui/react';
import React from 'react'

const Ucl = () => {
  return (
    <>
      <Box h='auto'>UEFA Champions League</Box>
    </>
  );
}

export default Ucl

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "UCL" });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}