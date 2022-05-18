import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Advert = ({src}) => {
  return (
      <>
          <Box display="flex" justifyContent="center" alignItems="center">
      <iframe
        scrolling="no"
        frameBorder="0"
        style={{
          padding: "15px",
          margin: "0px",
          border: "0px",
          borderStyle: "none",
        }}
        width={width}
        height=
        title="1xbet ad"
        loading="lazy"
        src={src}
          ></iframe>
          
    </Box>
    </>
  );
};

export default Advert;
