import React from "react";
import { chakra, Text, Stack, Img, Link } from "@chakra-ui/react";
import MainLogo from "../sections/MainLogo";
import Image from "next/image";


const Footer = () => {
  return (
    <>
      <chakra.footer bg="#23272e" w="100%" h="200px" >
        <Stack direction="column" justify="center" align="center" p='10'>
          <MainLogo />
          <Text rounded="full" color="white">
            18+
          </Text>
          <Stack direction="row" spacing="5" >
            <a href="https://www.youtube.com/channel/UC9zkTKufmG2LTiaael9zovw" target="blank">
              <Image
                src="/youtube.png"
                alt='youtube'
                objectFit="contain"
                rounded="full"
                height="30px"
                width='30px'
                style={{borderRadius: '50%'}}
              />
            </a>
            <a href="https://t.me/Successsecretbet" target="blank">
              <Image
                src="/telegram.png"
                alt='telegram'
                objectFit="contain"
                rounded="full"
                height="1rem"
                width='15'
                style={{borderRadius:"50%"}}
              />
            </a>
          </Stack>
        </Stack>
      </chakra.footer>
    </>
  );
};

export default Footer;
