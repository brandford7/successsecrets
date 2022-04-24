import { Box } from '@chakra-ui/react';
import React from 'react'

const Portugal = () => {
  return (
    <>
      <Box h='auto'>Portugal</Box>
    </>
  );
}

export default Portugal

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({ country: "Portugal" });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}