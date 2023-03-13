import Advert from "../components/adverts/Advert";
import { Box, Button, Flex, Heading, Img, Link, Stack } from "@chakra-ui/react";

const Offers = () => {
  return (
    <>
      <Box>
        <Heading color="white" p="10px">
          Bet Offers
        </Heading>
        <Stack direction="column" alignItems="center">
          <Flex align="center" justify="center" w="md">
            <Link href="https://bit.ly/3rqnRMD" isExternal>
              <Img src="/betwinner_ad.jpg" alt="melbetad" />
              <Button rounded="full" bg="blue.400" mt="4">
                Claim
              </Button>
            </Link>
          </Flex>
          <Advert
            src="https://refbanners.com/I?tag=d_1532459m_47237c_&site=1532459&ad=47237"
            title="1xbet ad"
            width="md"
          />
          <Flex align="center" justify="center" w="md">
            <Link href="https://bit.ly/38ZyOyX" isExternal>
              <Img src="/melbet_ad.jpg" alt="melbetad" />
              <Button rounded="full" bg="blue.400" mt="4">
                Claim
              </Button>
            </Link>
          </Flex>
          <Flex align="center" justify="center" h="" w="md">
            <Link href="https://1woolx.top" isExternal>
              <Img src="/1win_ad.jpg" alt="1win ad" />
              <Button rounded="full" bg="blue.400" mt="4">
                Claim
              </Button>
            </Link>
          </Flex>
          <Advert src="https://888starz.promo/I?tag=d_1601263m_51857c_&site=1601263&ad=51857" />
        </Stack>
      </Box>
    </>
  );
};

export default Offers;
