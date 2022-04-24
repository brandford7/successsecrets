import React from "react";
import {  chakra, Text, Stack, Img,Link } from "@chakra-ui/react";
import MainLogo from "./MainLogo";

const Footer = () => {
  return (
    <>
      <chakra.footer bg="#23272e" w='100%' h="200px">
        <Stack direction="column" justify="center" align="center">
          <MainLogo />
          <Text rounded="full" color="white">
            18+
          </Text>
          <Stack direction="row" spacing="5">
            <a href="youtube.com" target="blank">
              <Img
                src="/youtube.png"
                objectFit="contain"
                rounded="full"
                h="10"
              />
            </a>
            <Link>
              <Img
                src="/telegram.png"
                objectFit="contain"
                rounded="full"
                h="10"
              />
            </Link>
            <Link href='https://chakra-ui.com' isExternal>
  Chakra Design system <ExternalLinkIcon mx='2px' />
</Link>
          </Stack>
        </Stack>
      </chakra.footer>
    </>
  );
};

export default Footer;
