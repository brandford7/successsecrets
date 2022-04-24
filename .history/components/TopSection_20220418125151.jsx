import React from "react";
import { Box, Heading, Grid, GridItem, Stack } from "@chakra-ui/react";
import Tricks from "./Tricks";

const TopSection = () => {
  const tricks = [
    {
      title: "Division 4x4",
      logo: "",
      link: "",
    },
    {
      title: "5x5 Bundesliga LFL",
      logo: "",
      link: "",
    },
    {
      title: "Cameroon CUF Cup",
      logo: "",
      link: "",
    },
    {
      title: "Fifa 22 Cyber Champions Cup",
      logo: "",
      link: "",
    },
  ];

  return (
    <>
      <Box
        w='100%'
        display='flex'
        flexDirection='column'
        alignItems='center'
        bg="white"
        bgImage="url(/bg-image.jpg)"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="400px"
      >
        <Heading color="white" p="10px">
          1xBet Tricks
        </Heading>
       
        <Stack align="center" direction="row" justify="center">
          
          <Tricks />
        </Stack>
      </Box>
    </>
  );
};

export default TopSection;
