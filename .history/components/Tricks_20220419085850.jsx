import React from "react";

import { Box, IconButton, Stack } from "@chakra-ui/react";
import {ImArrowLeft,} from "react-icons/im"
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
          renderCenterLeftControls={({ previousSlide }) => (
            <IconButton icon={<ImArrowLeft/>} onClick={previousSlide}/>
           
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <IconButton icon={<ImArrowRight/>} onClick={nextSlide}/>>
             
          )}
          autoplay="true"
          easing="easeInOutElastic"
          cellAlign="center"
          slidesToShow={1}
        >
          {tricks.map((trick) => (
            <Box
              display="flex"
              justifyContent="center"
              w="auto"
              key={trick.title}
            >
              <iframe
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                src={trick.link}
              />
            </Box>
          ))}
        </Carousel>
      </Stack>
    </>
  );
};

export default Tricks;
