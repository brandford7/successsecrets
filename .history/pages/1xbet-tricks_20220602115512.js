import { Box, Heading,Flex,Img,Link } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Advert from "../components/adverts/Advert";
import Tricks from "../components/sections/Tricks";

const OneXbet = () => {
  return (
    <>
      <Head>
        <title>Success Secrets bet</title>
        <meta
          name="description"
          content="The best site for football predictions"
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h="100vh">
        <Flex align="center" justify="center" pt="5">
          <Link href="">
            <Img
              src="/melbet"
              width="320"
              height="50"
              alt=""
            />
          </Link>
        </Flex>
       
        <Advert
          src="https://refbanners.com/I?tag=d_1532459m_47237c_&site=1532459&ad=47237"
          title="1xbet ad"
        />
        <Heading color="white" p="10px">
          1xBet Tricks
        </Heading>
        <Tricks />
      </Box>
    </>
  );
};

export default OneXbet;
