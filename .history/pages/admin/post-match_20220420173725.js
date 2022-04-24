import { Box } from "@chakra-ui/react";
import React from "react";

import PostMatchForm from "../../components/PostMatchForm";

const PostMatch = () => {
  return (
    <>
    
      <Box h="100vh">
        <PostMatchForm />
      </Box>
    </>
  );
};

export default PostMatch;
PostMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};
