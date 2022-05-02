import React,{lazy, Suspense} from "react";
import { Box, Heading,  Stack } from "@chakra-ui/react";
import 
//const Tricks = lazy(() => import("./Tricks"));

const TopSection = () => {
//const Loader =<p>Loading...</p>
  return (
    <>
      <Suspense fallback={Loader}>
        {" "}
        <Box
          w="100%"
          bg="white"
          bgImage="url(/bg-image.jpg)"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          h="400px"
        >
          <Heading color="white" p="10px">
            1xBet Tricks
          </Heading>

          <Stack direction="row" w="auto" p="10px">
            <Tricks />
          </Stack>
        </Box>
      </Suspense>
    </>
  );
};

export default TopSection;
