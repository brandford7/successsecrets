import React, { useEffect,useState } from "react";
import { Box, IconButton, Stack } from "@chakra-ui/react";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import Carousel from "nuka-carousel";
import axios from "axios"



const Tricks = () => {
const [tricks, setTricks] = useState([])


 useEffect(() => {
   setLoading(true);
   fetch("api/profile-data")
     .then((res) => res.json())
     .then((data) => {
       setData(data);
       setLoading(false);
     });
 }, []);
 
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
          {tricks?.map((trick) => (
            <Box
              display="flex"
              justifyContent="center"
              w="auto"
              key={trick.title}
              h="auto"
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

