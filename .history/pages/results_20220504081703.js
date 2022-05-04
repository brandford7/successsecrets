import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react'

const Results = () => {
  return (
    <>
      {" "}
      <Box overflow="hidden" h="auto" bg="bg.200">
        <Head>
          <title>Predictions</title>
          <meta
            name="description"
            content="The best site for football predictions"
          />
          <link rel="icon" href="/success-image.webp" />
        </Head>
        <Flex justify="center">
          <NavBarThree />
        </Flex>
        <Heading p="10" color="white">
          Predictions for {todayDate}
        </Heading>
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
}

export default Results