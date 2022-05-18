import React, from "react";
import
import { Box, Heading, Stack } from "@chakra-ui/react";
import Tricks from "./Tricks";
import Advert from "../adverts/Advert";

const TopSection = () => {
  return (
    <>
      <Box
        display="column"
        justifyContent="center"
        w="100%"
        bg="white"
        bgImage="url(/bg-image.webp)"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="400px"
      ><a href="https://www.betway.co.mz/desporto/?btag=P86636-PR23149-CM61678-TS1943921&" target="_blank" rel="nofollow">
        <Image
          src="https://secure.betwaypartnersafrica.com/imagehandler/b4fdfc86-a6f9-499c-bb7e-a7f8ca1c45f0/"
          title="betway ad" alt='ad'
        />
        </a>
        <Advert
          src="https://refbanners.com/I?tag=d_1532459m_47237c_&site=1532459&ad=47237"
          title="1xbet ad"
        />
      </Box>
    </>
  );
};

export default TopSection;
