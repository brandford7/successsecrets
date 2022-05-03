import React from "react";
import useSWR from "swr";
import { Box, IconButton, Stack,  } from "@chakra-ui/react";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import Carousel from "nuka-carousel";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Tricks = () => {
  const { data: tricks, error } = useSWR(
    "http://localhost:3000/api/tricks",
    fetcher
  );
  if (error)
    return (
      <p align="center" justify="center">
        Failed to load
      </p>
    );
  if (!tricks) return <p>Loading...</p>;

  return (
    <>
      <Stack direction="row" p={['0','0'150px']}>
        <Carousel
          wrapAround="true"
          renderCenterLeftControls={({ previousSlide }) => (
            <IconButton  icon={<ImArrowLeft />} onClick={previousSlide} />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <IconButton  icon={<ImArrowRight />} onClick={nextSlide} />
          )}
          autoplay="true"
          easing="easeInOutElastic"
          cellAlign="center"
          slidesToShow={1}
        >
          {tricks.data.map((trick) => (
            <Box
              display="flex"
              justifyContent="center"
              w="auto"
              key={trick._id}
              h="auto"
            >
              <iframe
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                 loading="lazy"
                src={trick.video_Link}
               
              />
            </Box>
          ))}
        </Carousel>
      </Stack>
    </>
  );
};

export default Tricks;
