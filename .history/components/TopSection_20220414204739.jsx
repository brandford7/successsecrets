import React from "react";
import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";

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
        <Grid templateColumns={["repeat(1,1fr)","repeat(1,1fr)",]} placeItems="center">
          {tricks.map((trick) => (
            <GridItem
              key={trick.title}
              bg="#a8fd2d"
              h="200px"
              w="200px"
              p="10"
              placeItems="center"
            >
              {trick.title}
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default TopSection;
