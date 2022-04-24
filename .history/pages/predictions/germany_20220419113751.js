import { Box } from '@chakra-ui/react';
import React from 'react'

const Germany = () => {
  return (
    <>
      <Box h='auto'>Germany</Box>
    </>
  );
}

export default Germany

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