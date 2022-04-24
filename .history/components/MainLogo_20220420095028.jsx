import React from "react";
import { Heading, Img, Flex } from "@chakra-ui/react";
import Link from "next/link";

const MainLogo = () => {
  return (
    <>
      <Flex align="center">
        <Link href="/" passHref>
          <a>
            <Heading fontSize= color="brand.700"> Success Secrets</Heading>
          </a>
        </Link>
        <Img
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
