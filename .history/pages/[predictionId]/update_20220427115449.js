import { Box } from '@chakra-ui/react';
import React from 'react'

const Update = () => {
  return (
    <>
      <Box h="100vh">
        <UpdateMatchForm Values={predictionForm} />
      </Box>
    </>
  );
}

export default Update