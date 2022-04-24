import React from "react";

import { AspectRatio, Box, Grid, GridItem, Image, Stack } from "@chakra-ui/react";
import Carousel from "nuka-carousel";

const Tricks = () => {
  const tricks = [
    {
      title: "Division 4x4",
      logo: "",
      link: "https://www.youtube.com/embed/SrxgSUKaLhU",
    },
    {
      title: "5x5 Bundesliga LFL",
      logo: "",
      link: "https://www.youtube.com/embed/SrxgSUKaLhU",
    },
    {
      title: "Cameroon CUF Cup",
      logo: "",
      link: "https://www.youtube.com/embed/SrxgSUKaLhU",
    },
    {
      title: "Fifa 22 Cyber Champions Cup",
      logo: "",
      link: "https://www.youtube.com/embed/SrxgSUKaLhU",
    },
  ];

  return (
    <>
      <Stack mx="auto" direction="row">
        <Carousel
          
          animation=""
          cellAlign="center"
          slidesToShow={1}
        >
          {tricks.map((trick) => (
           <AspectRatio <iframe
              key={trick.title}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              src={trick.link}
            />
          ))}
        </Carousel>
      </Stack>
    </>
  );
};

export default Tricks;
