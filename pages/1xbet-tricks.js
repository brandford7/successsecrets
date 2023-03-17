import { Box, Heading, Flex, Img, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
//import Advert from "../components/adverts/Advert";
import Tricks from "../components/sections/Tricks";
//import DirectLinkButton from "../components/adverts/DirectLinkButton";

const OneXbet = () => {
  return (
    <>
      <Head>
        <title>Free Video tricks</title>
        <meta
          name="description"
          content=" Welcome to our page on mini tricks! Here, we provide you with a
        comprehensive guide on how to maximize your winnings on the popular
        online betting platforms, 1xbet,888starzbet, betwinner,melbet, amd more."
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h="auto">
        {/* <Flex align="center" justify="center" pt="5">
          <Link href="https://bit.ly/38ZyOyX">
            <Img src="/melbetAd2.jpg"  alt="melbetAd2" />
          </Link>
        </Flex>

        <Advert
          src="https://refbanners.com/I?tag=d_1532459m_47237c_&site=1532459&ad=47237"
          title="1xbet ad"
  />*/}
        <Heading color="white" p="10px">
          Mini Games Tricks
        </Heading>
        <Text fontSize="2xl" color="white" p="10" mb="10"></Text>
        Welcome to our page on mini tricks! Here, we provide you with a
        comprehensive guide on how to maximize your winnings on the popular
        online betting platforms, 1xbet,888starzbet, betwinner,melbet, amd more.
        Our collection of tips and tricks will help you make smarter bets,
        manage your bankroll effectively, and increase your chances of winning
        big. Our team of experienced bettors has put together a variety of
        strategies in video form that have been tested and proven to be
        effective. On this page, you will find everything from basic betting
        principles to advanced techniques that will help you stay ahead of the
        competition.
        <Tricks />
        {/* <DirectLinkButton/>*/}
      </Box>
    </>
  );
};

export default OneXbet;
