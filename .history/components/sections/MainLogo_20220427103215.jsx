import React from "react";
import { Heading, Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const MainLogo = () => {
  return (
    <>
      <Flex align="center">
        <Link href="/" passHref>
          <a>
            <Heading fontSize={["xl", "xl", "3xl"]} color="brand.700">
              Success Secrets
            </Heading>
          </a>
        </Link>
        <Box display='flex' alignItems={
          
        }='center'ml='10px'>
          <Image
            src="/success-image.jpg"
            alt="site logo"
            height="30px"
            width="30px"
            style={{
              borderRadius: "50%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Flex>
    </>
  );
};

export default MainLogo;
