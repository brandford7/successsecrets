import React from "react";
import Image from "next/image";
import { Box, Heading, Img, Stack, Flex, Link } from "@chakra-ui/react";
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
        h="auto"
      >
        <Flex align="center" justify="center" pt="5">
          <Link href="https://bit.ly/3fQPzA0">
            <Image
              src="/melbetAd.jpg"
              width="500px"
              height="500px"
              alt="melbetAd"
            />
          </Link>
        </Flex>
        <Flex align="center" justify="center" pt="5">
           <Link href="https://bit.ly/3fQPzA0"></Link>
          <Advert
            src="https://refbanners.com/I?tag=d_1532459m_47237c_&site=1532459&ad=47237"
            title="1xbet ad"
          />
        </Flex>
      </Box>
    </>
  );
};

export default TopSection;
