/* eslint-disable react/no-unescaped-entities */
import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import Head from "next/head";
import React from "react";
import PredictionTable from "../../components//tables/PredictionTable";
import Title from "../../components/titles/Title";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Spain = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>
          Spain-Betting tips for all the exciting football competitions in Spain
        </title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/spain"
          key="canonical"
        />
        <meta
          name="description"
          content="   Welcome to our Spain predictions page. This is your ultimate
          destination for accurate and insightful betting tips, and predictions on the most
          popular football leagues in Spain, La Liga, Copa del Rey,Spanish Super
          Cup and the Segunda division,"
        />

        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" color="white" h={["auto", "auto", "100vh"]}>
        <Title name="Spain" />
        <article>
          <Text fontSize="xl" textAlign="justify" p="10" mb="10">
            Welcome to our Spain football predictions page. This is your
            ultimate destination for sure and insightful spanish football and
            betting tips, predictions . La Liga, Copa del Rey,Spanish Super Cup
            and the Segunda division are all included. Our team of expert
            analysts and writers closely follow the Spanish football scene to
            provide you with reliable predictions and tips that you can count
            on.So why wait? Join us today and start winning big on the Spanish
            football scene with our expert predictions and analysis.
          </Text>
        </article>
        <PredictionTable predictions={predictions} />
        <section className="page_details">
          <Box p="10" border="1px solid white">
            <Title name="La Liga: The Epitome of Spanish Football" />
            <article>
              <Text as="p">
                La Liga, also known as LaLiga Santander, stands as the pinnacle
                of Spanish football. It showcases some of the world's most
                talented players and globally recognized clubs. Success Secrets
                Bet's team of expert analysts diligently study each team's
                performances, scrutinize player statistics, assess tactical
                approaches, and consider historical data to deliver precise
                predictions for every La Liga match. Whether you're interested
                in predicting over/under outcomes, home or away wins, draws, or
                1st half results, our platform offers a diverse range of
                prediction options to cater to your preferences.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="Copa del Rey: The Thrill of Cup Competitions" />
            <article>
              <Text as="p">
                The Copa del Rey, Spain's prestigious knockout tournament,
                provides a unique platform for teams from various divisions to
                compete against each other. Success Secrets Bet extends its
                predictions to cover the Copa del Rey, ensuring that you stay
                informed about the exciting cup clashes. Our analysts delve into
                the historical performance of teams, assess their recent form,
                and consider factors such as squad depth and motivation to
                provide accurate predictions. Be it the early rounds or the
                exhilarating final, Success Secrets Bet enables you to make
                strategic betting decisions throughout the Copa del Rey journey.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="Spanish Football Leagues and Beyond" />
            <article>
              <Text as="p">
                Success Secrets Bet recognizes the charm and excitement beyond
                the top-tier competitions. We extend our predictions and
                insights to various Spanish football leagues, including the
                Segunda División, Segunda División B, and Tercera División. By
                delving into these leagues, we aim to cater to football
                enthusiasts who appreciate the passion and competitive nature of
                Spanish football beyond the spotlight.
              </Text>
            </article>
          </Box>
        </section>
      </Box>
    </>
  );
};

export default Spain;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: { $regex: /Spain/i },
    start_date: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date()),
    },
  });

  console.log(predictions);
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
    revalidate: 5,
  };
}
