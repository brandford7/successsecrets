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
        {/*   <Grid templateColumns="repeat(4,1fr)" placeItems="center" gap='5' overflowX={['scroll',"scroll","hidden"]} >
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
          </Grid>*/}
        <Stack align="center" direction="row">
          {" "}
          <Tricks />
        </Stack>
      </Box>
    </>
  );
};

export default TopSection;
