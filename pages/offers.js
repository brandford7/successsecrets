import Advert from "../components/adverts/Advert";
import Head from "next/head";
import { Box, Button, Flex, Heading, Img, Link, Stack } from "@chakra-ui/react";

const Offers = () => {
  return (
    <>
      <Box>
        <Heading color="white" p="10px">
          Bet Offers
        </Heading>
        <Stack direction="column" alignItems="center" spacing="5">
          <Advert
            src="https://melbanusd.top/I?tag=d_2157275m_43633c_&site=2157275&ad=43633"
            width="300"
            height="250"
            title=" melbet ad"
          />

          <Advert
            src="https://refbanners.com/I?tag=d_2157253m_45059c_&site=2157253&ad=45059"
            title="1xbet ad"
            width="300 height='250"
          />
          <Link href="https://1woolx.top" isExternal>
            <Img src="/1win.jpg" alt='1win ad'/>
          </Link>

          <Link href="https://bit.ly/3rqnRMD" isExternal>
            <Img src="/betwinner_ad.jpg" alt="betwinner ad" />
          </Link>

          <Advert
            src="https://888starz.promo/I?tag=d_1601263m_51823c_&site=1601263&ad=51823"
            width="300"
            height="300"
            title="888starzbet ad"
          />
        </Stack>
      </Box>
    </>
  );
};

export default Offers;
