import React from "react";

import { AspectRatio, Box, Grid, GridItem, Image, Stack } from "@chakra-ui/react";
import Carousel from "nuka-carousel";

const Tricks = () => {
  const tricks = [
    {
      title: "Division 4x4",
      logo: "",
      link: "https://www.youtube.com/watch?v=svrTh-M8Zig&t=133s",
    },
    {
      title: "5x5 Bundesliga LFL",
      logo: "",
      link: "https://www.youtube.com/watch?v=svrTh-M8Zig&t=133s",
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
          <AspectRatio key={trick.title} maxW='400px' ratio={1}>
  <Image src={trick.link} alt='naruto' objectFit='cover' />
</AspectRatio>
        
          ))}
        </Carousel>
      </Stack>
    </>
  );
};

export default Tricks;
