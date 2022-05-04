import { Box, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react'
import NavBarThree from '../components/navbars/NavBarThree';
import PredictionTable from '../components/tables/PredictionTable';

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
          Latest Results
        </Heading>
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
}

export default Results