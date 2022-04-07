import React from "react";
import { Box, chakra, Text, Stack, Img,Link } from "@chakra-ui/react";
import MainLogo from "./MainLogo";

const Footer = () => {
  return (
    <>
      {/* <chakra.footer bg="#23272e" p="10" h="200px">
        <Stack direction="column" justify="center" align="center">
          <MainLogo />
          <Text rounded="full" color="white">
            18+
          </Text>
          <Stack direction="row" spacing="5">
            <Link href="youtube.com" isExternal>
              <Img
                src="/youtube.png"
                objectFit="contain"
                rounded="full"
                h="10"
              />
            </Link>
            <Link>
              <Img
                src="/telegram.png"
                objectFit="contain"
                rounded="full"
                h="10"
              />
            </Link>
          </Stack>
        </Stack>
  </chakra.footer>*/}
    </>
  );
};

export default Footer;
