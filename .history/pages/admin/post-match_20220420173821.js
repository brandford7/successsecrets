import { Box, Heading } from "@chakra-ui/react";
import React from "react";

import PostMatchForm from "../../components/PostMatchForm";

const PostMatch = () => {
  return (
    <>
      <Box h="100vh">
        <Box display="flex" alignItems="center" justifyContent="center" mb="5">
          <Heading color="white">Update a Match</Heading>
        </Box>
        <PostMatchForm />
      </Box>
    </>
  );
};

export default PostMatch;
PostMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};
