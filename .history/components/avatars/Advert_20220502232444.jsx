import { Box } from "@chakra-ui/react";
import React from "react";

const Advert = () => {
  return (
    <Box display='flex' justifyContent='flex-end'>
      <iframe
        scrolling="no"
        frameBorder="0"
        style={{
          padding: "0px",
          margin: "0px",
          border: "0px",
          borderStyle: "none",
        }}
        width="151"
        height="59"
        loading="lazy"
        src=""
      ></iframe>
    </Box>
  );
};

export default Advert;
