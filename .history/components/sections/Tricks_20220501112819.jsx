import React, {  } from "react";
import useSWR from 'swr'
import { Box, IconButton, Stack,Flex } from "@chakra-ui/react";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import Carousel from "nuka-carousel";
import Trick from '../../models/Trick'



const fetcher =(url) => fetch(url).then(res => res.json())

 const fetcher = async (url) =>
   await t(url).then((res) => res.data.todos);

const Tricks = () => {
  const { data:tricks, error } = useSWR( Trick.find(), fetcher);
   if (error) return <Flex align="center" justify='center'>Failed to load</Flex>;
  if (!tricks) return <Flex align='center justify='center>Loading...</Flex>;

  
 
  return (
    <>
      <Stack direction="row">
        <Carousel
          wrapAround="true"
          renderCenterLeftControls={({ previousSlide }) => (
            <IconButton icon={<ImArrowLeft />} onClick={previousSlide} />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <IconButton icon={<ImArrowRight />} onClick={nextSlide} />
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

