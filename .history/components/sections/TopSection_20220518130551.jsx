import React,{lazy, Suspense} from "react";
import { Box, Heading,  Stack } from "@chakra-ui/react";
import Tricks from "./Tricks"
import Advert from "../adverts/Advert";


const TopSection = () => {
  return (
    <>
      <Box
        display={["column", "column", "flex"]}
        justifyContent="center"
        w="100%"
        bg="white"
        bgImage="url(/bg-image.webp)"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="400px"
      >
        <Advert
          src="https://refbanners.com/I?tag=d_1532459m_47237c_&site=1532459&ad=47237"
          title="1xbet ad"
        />
        <Advert
          src="https://secure.betwaypartnersafrica.com/mediahandler/btag-P86636-PR24771-CM76119-TS1943921/"
          width="325px"
          height="200px"
          title="betway ad"
        />
      </Box>
    </>
  );
};

export default TopSection;
