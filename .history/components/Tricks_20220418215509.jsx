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
      <Stack mx='auto'  direction="row" >
        <Carousel autoplay='true' animation='' cellAlign="center"  slidesToShow={1}>
          {tricks.map((trick) => (
          <AspectRatio maxW='400px' ratio={4 / 3}>
  <Image src={title.link} alt='naruto' objectFit='cover' />
</AspectRatio>
            {/* <Box
              
              display='flex'
              alignItems='center'
              justifyContent='center'
              key={trick.title}
              bg="#a8fd2d"
              h="200px"
              w='300px'
              p="10"
              
            >
              {trick.title}
          </Box> */}
          ))}
        </Carousel>
      </Stack>
    </>
  );
};

export default Tricks;
