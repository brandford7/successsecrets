import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Grid, GridItem } from "@chakra-ui/react";

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
      <Carousel
        showArrows={true}
       overflowX=''
      >
        <Flex>
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
            </Box>
          ))}
       
      </Carousel>
    </>
  );
};

export default Tricks;
