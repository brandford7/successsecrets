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
          Success Secrets bet- Best Site for bet predictions on football, and
          1xbet tricks.
        </title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com"
          key="canonical"
        />
        <meta
          name="description"
          content="Success Secrets Bet is the ultimate destination for soccer enthusiasts looking to stay ahead of the game with  successful prediction on football. Our website offers comprehensive soccer bet predictions and analysis for the  English Premier League, La Liga, Ligue 1, Serie A, FA Cup League Cup, UEFA Champions League, Europa League Conference League CAF Champions League, UEFA
          Nations League, World Cup, European ChampionShip,English Premier League,England Championship, England FA Cup, Italian Football Predictions(Serie A,Serie B) , Spain Football Predictions(La Liga,Segunda Liga), Saudi Arabian League, German Football Predictions(Bundesliga), France Ligue1 , Netherlands Eredivisie, Portuguese League, and more. Find all your sure predictions here.
         "
        />

        <link rel="icon" href="/success-image.webp" />
      </Head>

      <TopSection />
      <Text fontSize="2xl" color="white" p="10" textAlign="justify" mb="10">
        Success Secrets Bet is the ultimate destination for soccer enthusiasts
        looking to stay ahead of the game with sure tips and sure predictions fROm the English Premier League, Italian Footbal Predictions(Serie A, Serie B), Spain Football Predictions, Germany Football Predictions, Saudi Arabian League, France Ligue1 . Our website offers sure
        soccer predictions and analysis to help our users make informed betting
        decisions. With our expert team of analysts and data scientists, we
        provide accurate and reliable predictions for a wide range of soccer
        leagues and tournaments around the world. Our predictions are based on a
        combination of statistical analysis, team and player form, as well as
        the latest news and updates from the world of soccer. Find all your sure
        predictions here. American NBA tips will be included soon.
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
