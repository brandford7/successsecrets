import { Box } from '@chakra-ui/react';
import React from 'react'

import PostTrickForm from '../../components/PostTrickForm';

const PostTrick = () => {
  return (
    <>
      <Box h="100vh">
        <PostTrickForm />
      </Box>
    </>
  );
}

export default PostTrick

ostMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};