import React from "react";
import { Heading, Img, Flex } from "@chakra-ui/react";
import Link from "next/link";
import image from 'next/image'

const MainLogo = () => {
  return (
    <>
      <Flex align="center">
        <Link href="/" passHref>
          <a>
            <Heading fontSize={["xl", "xl","3xl"]} color="brand.700"> Success Secrets</Heading>
          </a>
        </Link>
        <Image
          src="/success-image.jpg"
          rounded="full"
          objectFit="contain"
          h="30px"
          w=""
          ml="10px"
        />
      </Flex>
    </>
  );
};

export default MainLogo;
