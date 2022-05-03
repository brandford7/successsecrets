import { Box } from "@chakra-ui/react";
import React from "react";

const Advert = () => {
  return (
    <Box display="flex" justifyContent="center" >
      <iframe
        scrolling="no"
        frameBorder="0"
        style={{
          padding: "0px",
          margin: "0px",
          border: "0px",
          borderStyle: "none",
        }}
        width="300"
        height="250"
        title="1xbet ad"
        loading="lazy"
        src="https://refbanners.com/I?tag=d_1532459m_47237c_&site=1532459&ad=47237"
      ></iframe>
    </Box>
  );
};

export default Advert;
