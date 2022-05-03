import React,{lazy, Suspense} from "react";
import { Box, Heading,  Stack } from "@chakra-ui/react";
import Tricks from "./Tricks"
import Advert from "../avatars/Advert";


const TopSection = () => {
  return (
    <>
      
        
        <Box
          w="100%"
          bg="white"
          bgImage="url(/bg-image.webp)"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          h="400px"
        >
          <Heading color="white" p="10px">
            1xBet Tricks
          </Heading>
<Advert/>
        <Stack direction="row" w="auto" p="10px">
            <Tricks />
  </Stack>
        </Box>
      
    </>
  );
};

export default TopSection;