import { Box, Heading } from "@chakra-ui/react";
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
        <Advert
          src="https://secure.betwaypartnersafrica.com/imagehandler/b4fdfc86-a6f9-499c-bb7e-a7f8ca1c45f0/"
          title="betway ad"
        />
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
