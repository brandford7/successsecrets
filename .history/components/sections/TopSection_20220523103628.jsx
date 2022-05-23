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
        <Flex>
          <Link href="https://one.exnesslink.com/intl/en/a/c_qw50jrywd0">
            <Img
              src="https://d3dpet1g0ty5ed.cloudfront.net/EN_1221_lower_your_trading_costs_with_Exn_320x50px.jpg"
              width="320"
              height="50"
              alt=""
            />
          </Link>
        </Flex>

        <Flex align="center" justify="center" pt="10">
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
