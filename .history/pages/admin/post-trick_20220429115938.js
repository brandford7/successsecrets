import { Box } from "@chakra-ui/react";
import React from "react";

import PostTrickForm from "../../components//forms/PostTrickForm";

const PostTrick = () => {
  return (
    <>
      <Box h="100vh">
        <PostTrickForm />
      </Box>
    </>
  );
};

export default PostTrick;

PostTrick.getLayout = function getLayout(page) {
  return <>{page}</>;
};
