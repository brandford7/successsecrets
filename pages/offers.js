import Advert from "../components/adverts/Advert";
import Head from "next/head";
import { Box, Heading, Img, Link, Stack, Text } from "@chakra-ui/react";

const Offers = () => {
  return (
    <>
      <Box>
        <Head>
          <title>Offers</title>
          <link
            rel="canonical"
            href="https://www.successsecretsbet.com/offers"
            key="canonical"
          />
          <meta
            name="description"
            content="  Welcome to our page dedicated to the latest and greatest betting
          offers from top bookmakers around the world. Here, you will find a
          comprehensive list of the best betting promotions and betting bonuses available,
          designed to give you an edge in your betting journey. We understand
          the importance of getting the most value for your money, and that is
          why we have scoured the web to bring you the most lucrative betting deals
          available.From 1xbet offers, betwinner offers, 22bet offers, melbet, betway ,and many more"
          />
          <link rel="icon" href="/success-image.webp" />
        </Head>
        <Heading color="white" p="10px">
          Offers- Discover the best and lucrative betting offers from bookmakers
        </Heading>
        <Text fontSize="2xl" color="white" textAlign="justify" p="10" mb="10">
          Welcome to our page dedicated to the latest and greatest betting
          offers from top bookmakers around the world. Here, you will find a
          comprehensive list of the best betting promotions and bonuses
          available, designed to give you an edge in your betting journey. We
          understand the importance of getting the most value for your money,
          and that is why we have scoured the web to bring you the most
          lucrative betting deals available. From free bets, to matched deposit
          bonuses, enhanced odds to cashback offers, we have got you covered
          with a wide range of betting promotions to suit your betting style.
          Our team of experts are constantly updating our list of betting
          offers, ensuring that you always have access to the latest and most
          attractive deals.Currently available are offers from 1xbet, betwinner,
          melbet, 888starz bet, and 1win bet. So no more matter your experience
          in sports betting, this page is the perfect place to start. Do not
          miss out on the chance to boost your bankroll and increase your
          chances of success, check out our betting offers page today and start
          taking advantage of the best betting promotions in the business!
        </Text>
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
            <Img src="/1win.jpg" alt="1win ad" />
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
