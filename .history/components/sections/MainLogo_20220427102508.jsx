import React from "react";
import { Heading, Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from 'next/image'

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
        <Box  h='30px' w='30px' ml="10px">
          <Image
            src="/success-image.jpg"
            alt="site logo"
            objectFit="contain"
            height="30px"
            width='30px'
            style={{ borderRadius:"50%" }}
          />
        </Box>
      </Flex>
    </>
  );
};

export default MainLogo;
