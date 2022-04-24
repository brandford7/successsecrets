import { Box } from '@chakra-ui/react';
import React from 'react'

const International = () => {
  return (
    <>
      <Box h='auto'>International</Box>
    </>
  );
}

export default International

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "Intr" });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}