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
        
          <Image
            src="/success-image.jpg"
            alt="site logo"
            ,
            height="30px"
            width='50px'
            style={{ borderRadius:"50%", marginLeft:'10px' }}
          />
        
      </Flex>
    </>
  );
};

export default MainLogo;
