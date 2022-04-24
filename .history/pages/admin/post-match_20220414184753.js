import { Box } from "@chakra-ui/react";
import React from "react";
import Forms from "../../components/Forms";

const PostMa = () => {
  return (
    <>
      <Box h="100vh">
        <Forms />
      </Box>
    </>
  );
};

export default Post;
Post.getLayout = function getLayout(page) {
  return <>{page}</>;
};