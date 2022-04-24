import React from "react";

import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import Carousel from "nuka-carousel";

const Tricks = () => {
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
    {
      title: "Fifa 22 Cyber Champions Cup",
      logo: "",
      link: "",
    },
  ];

  return (
    <>
      <Stack align="center" direction="row" justify="center">
        <Carousel wrapAround={true} slidesToShow={1}>
          {tricks.map((trick) => (
            <Box
            d
              key={trick.title}
              bg="#a8fd2d"
              h="200px"
              w="200px"
              p="10"
              
            >
              {trick.title}
            </Box>
          ))}{" "}
        </Carousel>
      </Stack>
    </>
  );
};

export default Tricks;
