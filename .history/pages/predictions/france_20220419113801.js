import { Box } from '@chakra-ui/react';
import React from 'react'

const France = () => {
  return (
    <>
      <Box h='auto'>France</Box>
    </>
  );
}

export default France

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "Enlgand" });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}