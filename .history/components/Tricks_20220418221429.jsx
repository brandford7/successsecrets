import React from "react";

import { AspectRatio, Box, Grid, GridItem, Image, Stack } from "@chakra-ui/react";
import Carousel from "nuka-carousel";

const Tricks = () => {
  const tricks = [
    {
      title: "Division 4x4",
      logo: "",
      link: "https://www.youtube.com/embed/SrxgSUKaLhU"  frameborder="0" allow="accelerometer; autopltitle="YouTube video player"ay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen",
    },
    {
      title: "5x5 Bundesliga LFL",
      logo: "",
      link: "https://www.youtube.com/watch?v=svrTh-M8Zig&t=133s",
    },
    {
      title: "Cameroon CUF Cup",
      logo: "",
      link: "https://www.youtube.com/watch?v=svrTh-M8Zig&t=133s",
    },
    {
      title: "Fifa 22 Cyber Champions Cup",
      logo: "",
      link: "",
    },
   
  ];

  return (
    <>
      <Stack mx="auto" direction="row">
        <Carousel
          autoplay="true"
          animation=""
          cellAlign="center"
          slidesToShow={1}
        >
          {tricks.map((trick) => (
            
              <iframe key={trick.title}
                title="naruto"
                src="https://www.youtube.com/watch?v=svrTh-M8Zig&t=133s"
                allowFullScreen
              />
          
          ))}
        </Carousel>
      </Stack>
    </>
  );
};

export default Tricks;
