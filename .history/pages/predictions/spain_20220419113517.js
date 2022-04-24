import { Box } from '@chakra-ui/react';
import React from 'react'

const Spain = () => {
  return (
    <>
      <Box h='auto'>Spain</Box>
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