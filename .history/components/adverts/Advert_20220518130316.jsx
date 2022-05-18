import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Advert = ({src,width,height}) => {
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
        height={height}
        title={title}
        loading="lazy"
        src={src}
          ></iframe>
          
    </Box>
    </>
  );
};

export default Advert;
