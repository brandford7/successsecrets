import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

import TopSection from "../components/sections/TopSection";
import MidSection from "../components/sections/MidSection";
import dbConnect from "../lib/dbConnect";
import Prediction from "../models/Prediction";
import { endOfDay, startOfDay } from "date-fns";
import CardList from "../components/cards/CardList";

export default function Home({ predictions }) {
  return (
    <Box overflow="hidden" h="auto">
      <Head>
        <title>Success Secrets bet- Best Site forbet tips.</title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com"
          key="canonical"
        />
        <meta
          name="description"
          content="Want to find successful soccer predictions? Look no further than success secrets bet, Forebet! Discover the secrets to our soccer betting predictions and start winning today."
        />
        <meta
          property="og:title"
          content="Success Secrets bet- The best Site for soccer betting tips, and
          1xbet tricks."
        />

        <meta property="og:image" content="/success-image.webp" />

        <meta
          property="og:description"
          content="Success Secrets Bet is the ultimate destination for soccer betting enthusiasts looking to stay ahead of the game with  successful soccer predictions on football. Our website offers comprehensive soccer betting predictions and analysis for the  English Premier League, La Liga, Ligue 1, Serie A, FA Cup League Cup, UEFA Champions League, Europa League Conference League CAF Champions League, UEFA
          Nations League, World Cup, European ChampionShip,English Premier League,England Championship, England FA Cup, Italian Football Predictions(Serie A,Serie B) ,MLS,NBA, Spain Football Predictions(La Liga,Segunda Liga), Saudi Arabian League, German Football Predictions(Bundesliga), France Ligue1 , Netherlands Eredivisie, Portuguese League, and more. Find all your sure predictions here.
         You can also find soccer betting predictions over and under, 1x2 soccer bet today, tips 180 1x2,
        soccer betting correct scores,soccer betting both teams to score,soccer bet today, Mathematical football predictions 100 sure, 90 tips prediction ,and betting tips for more than 700 leagues. Highly accurate betting tips,  football predictions 100 sure,tips 180 best football predictions site sure win prediction today,forebet soccer prediction , great odds, and offers from 1xbet, bet winner, 888starzbet, melbet, and 22bet."
        />

        <link rel="icon" href="/success-image.webp" />
      </Head>

      <TopSection />
      <article>
        <Text
          as="p"
          fontSize="xl"
          color="white"
          p="10"
          textAlign="justify"
          mb="10"
        >
          Success Secrets Bet is the ultimate, and best soccer betting
          predictions site for bet enthusiasts looking to stay ahead of the game
          with soccer betting tips from the English Premier League, Italian
          Football Predictions; Serie A, Serie B, Spain Football Predictions,
          Germany Football Predictions, Saudi Arabian League, France Ligue 1.Our
          website offers sure soccer best predictions, ranging from soccer
          predictions over and under, 1x2 tips, correct scores, both teams to
          score, and player to score today and analysis to help our users make
          informed soccer betting decisions. With our expert team of analysts
          and data scientists, we provide the best soccer betting tips for a
          wide range of soccer leagues and tournaments around the world. Find
          all your sure betting on football here, and soccer betting statistics
          for more than 700 leagues.Predicting the outcome of a soccer match
          accurately is no easy feat.It requires a deep understanding of the
          game, knowledge of the teams and players involved, and a bit of luck.
          On sucess secrets bet, we do our best to make this simple for you. We
          provide the best match selections from the best football betting sites
          So if you are looking for site that provides tips for soccer betting,
          here is your ultimate destination.
        </Text>
      </article>
      <MidSection predictions={predictions} />
      <CardList />
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
