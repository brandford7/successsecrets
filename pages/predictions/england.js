/* eslint-disable react/no-unescaped-entities */
import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import React from "react";
import Title from "../../components/titles/Title";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Head from "next/head";

const England = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>England Football Predictions</title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/england"
          key="canonical"
        />
        <meta
          name="description"
          content="  Welcome to our England predictions page. Here, you will find betting tips
          and football predictions for all the top football matches in England.
           Find all your sure  forebet betting tips, and accurate predictions here."
        />

        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" color="white" h={["auto", "auto"]}>
        <Title name="England" />
        <article>
          <Text p="10" textAlign="justify" mb="10">
            Welcome to our England football predictions page. We provide you
            with the most accurate betting tips and football predictions for all
            the top football matches in England, including the Premier League,
            FA Cup,Community Shield, and Carabao Cup. Find all your sure and
            accurate predictions here.
          </Text>
        </article>
        <PredictionTable predictions={predictions} />

        <section className="page_details ">
          <Box p="10" border="1px solid white">
            <Title name="Premier League Predictions" />
            <article>
              <Text as="p">
                As the most prestigious and widely followed football league in
                England, the Premier League captivates fans with its
                electrifying football matches, fierce rivalries, and top-class
                talent. At Success Secrets Bet, we leave no stone unturned in
                analyzing each teams performance, studying their tactics, player
                statistics, injury reports, and other vital factors that
                influence football outcomes. Our predictions for the Premier
                League cover a wide range of options forbet, including
                over/under, home win, away win, draw, and 1st half predictions.
                By leveraging our insights, you can make informed bets and stay
                ahead of the game.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="Championship, League One, and League Two Predictions" />
            <article>
              <Text as="p">
                While the Premier League garners much of the spotlight, English
                football's lower divisions offer their own thrills and
                surprises. Success Secrets Bet recognizes the value of these
                leagues and provides extensive coverage and predictions for the
                Championship, League One, and League Two. Our team of experts
                delves into each team's form, player performance, head-to-head
                records, and other crucial variables to deliver accurate
                predictions. Whether you are following your favorite team's
                journey or seeking betting opportunities in the lower leagues,
                Success Secrets Bet equips you with the knowledge to make
                strategic decisions.
              </Text>
            </article>
          </Box>
        </section>
      </Box>
    </>
  );
};

export default England;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: { $regex: /England/i },
    start_date: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date()),
    },
  });

  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
    revalidate: 5,
  };
}
