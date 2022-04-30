import { Box } from '@chakra-ui/react';
import React from 'react'
import UpdateMatchForm from '../../components/forms/UpdateMatchForm';

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