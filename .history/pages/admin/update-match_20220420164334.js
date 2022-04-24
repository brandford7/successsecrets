import { Box } from '@chakra-ui/react';
import React from 'react'

const UpdateMatch = () => {
  return (
    <>
      <Box h="100vh"></Box>
    </>
  );
}

export default UpdateMatch 

UpdateMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};
