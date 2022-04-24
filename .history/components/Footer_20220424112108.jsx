import React from "react";
import { chakra, Text, Stack, Img, Link } from "@chakra-ui/react";
import MainLogo from "./MainLogo";

const Footer = () => {
  return (
    <>
      <chakra.footer bg="#23272e" w="100%" h="200px" pos='absolute' bottom='0'>
        <Stack direction="column" justify="center" align="center">
          <MainLogo />
          <Text rounded="full" color="white">
            18+
          </Text>
          <Stack direction="row" spacing="5">
            <a href="https://www.youtube.com/channel/UC9zkTKufmG2LTiaael9zovw" target="blank">
              <Img
                src="/youtube.png"
                objectFit="contain"
                rounded="full"
                h="10"
              />
            </a>
            <a href="https://t.me/Successsecretbet" target="blank">
              <Img
                src="/telegram.png"
                objectFit="contain"
                rounded="full"
                h="10"
              />
            </a>
          </Stack>
        </Stack>
      </chakra.footer>
    </>
  );
};

export default Footer;
