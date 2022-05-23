import React from "react";

import { Box, Heading,Img, Stack,Flex,Link } from "@chakra-ui/react";
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
      >
<FlEX></FlEX>

        <Flex  align="center" justify='center' pt='10'>


          <Link
            href="https://www.betway.co.mz/desporto/?btag=P86636-PR23149-CM61678-TS1943921&"
            rel="nofollow"
          >
            <Img
              src="https://secure.betwaypartnersafrica.com/imagehandler/b4fdfc86-a6f9-499c-bb7e-a7f8ca1c45f0/"
              title="betway ad"
              alt="ad"
            />
          </Link>
        </Flex>
        <Advert
          src="https://refbanners.com/I?tag=d_1532459m_47237c_&site=1532459&ad=47237"
          title="1xbet ad"
        />
      </Box>
    </>
  );
};

export default TopSection;
