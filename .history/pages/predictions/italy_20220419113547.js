import { Box } from '@chakra-ui/react';
import React from 'react'

const Italy = () => {
  return (
    <>
      <Box h='auto'>Italy</Box>
    </>
  );
}

export default Italy

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "" });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}