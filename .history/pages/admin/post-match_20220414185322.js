import { Box } from "@chakra-ui/react";
import React from "react";
import Forms from "../../components/Forms";

const PostMatch = () => {
  return (
    <>
      <Box h="100vh">
        <Forms />
      </Box>
    </>
  );
};

export default PostMatch;
PostMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};
