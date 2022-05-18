import React,{lazy, Suspense} from "react";
import { Box, Heading,  Stack } from "@chakra-ui/react";
import Tricks from "./Tricks"
import Advert from "../adverts/Advert";


const TopSection = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        w="100%"
        bg="white"
        bgImage="url(/bg-image.webp)"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="400px"
      >
        <Advert src="https://refbanners.com/I?tag=d_1532459m_47237c_&site=1532459&ad=47237" />
        <Advert src="https://www.betway.com.ng/?btag=P86636-PR24945-CM78401-TS1943921&" />
      </Box>
    </>
  );
};

export default TopSection;
