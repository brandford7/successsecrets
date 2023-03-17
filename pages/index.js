import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

import TopSection from "../components/sections/TopSection";
import MidSection from "../components/sections/MidSection";
import dbConnect from "../lib/dbConnect";
import Prediction from "../models/Prediction";
import { endOfDay, startOfDay } from "date-fns";

export default function Home({ predictions }) {
  return (
    <Box overflow="hidden" h="auto">
      <Head>
        <title>
          Success Secrets bet- Best football predictions site, and tricks.
        </title>
        <meta
          name="description"
          content="Success Secrets Bet is the ultimate destination for soccer enthusiasts looking to stay ahead of the game. Our website offers comprehensive soccer predictions and analysis to help our users make informed betting decisions. Predictions from The best site for football predictions. English Premier League, La Liga, Ligue 1, Serie A, FA Cup League Cup, UEFA Champions League, Europa League Conference League CAF Champions League, UEFA
          Nations League, World Cup, European ChampionShip,Premier League, Serie A , La Liga, Bundesliga, Ligue1 , Eredivisie, Portuguese League, and more."
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>

      <TopSection />
      <Text fontSize='2xl' p="10" mb="10">
        Success Secrets Bet is the ultimate destination for soccer enthusiasts
        looking to stay ahead of the game. Our website offers comprehensive
        soccer predictions and analysis to help our users make informed betting
        decisions. With our expert team of analysts and data scientists, we
        provide accurate and reliable predictions for a wide range of soccer
        leagues and tournaments around the world. Our predictions are based on a
        combination of statistical analysis, team and player form, as well as
        the latest news and updates from the world of soccer.So whether you are
        a seasoned soccer bettor or just getting started, Success Secrets Bet
        has everything you need to take your betting to the next level. Join us
        today and start winning big!
      </Text>
      <MidSection predictions={predictions} />
    </Box>
  );
}

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    start_date: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date()),
    },
  }).sort({ country: 1 });

  return {
    props: { predictions: JSON.parse(JSON.stringify(predictions)) },
    revalidate: 10,
  };
}
