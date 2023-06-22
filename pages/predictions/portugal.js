/* eslint-disable react/no-unescaped-entities */
import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import React from "react";
import Title from "../../components/titles/Title";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Head from "next/head";

const Portugal = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>
          Portugal-Betting tips for football matches in
          Portugal.
        </title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/portugal"
          key="canonical"
        />
        <meta
          name="description"
          content="Welcome to the Portugal football Predictions page, where we make it easy for you to select matches to bet on
           with the help of our expert analysis, betting tips, and predictions for all the major football matches
          featuring top teams from Portugal ."
        />
        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" color="white" h={["auto", "auto", ]}>
        <Title name="Portugal" />
        <article>
          <Text fontSize="xl" textAlign="justify" p="10" mb="10">
            Welcome to the Portugal football Predictions page, where we make it
            easy for you to select matches to bet on with the help of our expert
            analysis, betting tips, and predictions for all the major football
            matches featuring top teams from Portugal . Whether you are a
            die-hard fan of Benfica, Porto, or Sporting Lisbon, or just a casual
            follower of Portuguese soccer, our team of experienced analysts has
            got you covered. We use the latest data and statistical models to
            provide accurate and insightful predictions for upcoming matches,
            taking into account factors such as team form, injuries, and
            head-to-head records. From the Primeira Liga to the Taca de
            Portugal, our predictions cover all the major domestic competitions.
            Be sure to bookmark our Portugal Soccer Predictions page and check
            back regularly for the latest insights and predictions
          </Text>
        </article>
        <PredictionTable predictions={predictions} />
        <section className="page_details">
          <Box p="10" border="1px solid white">
            <Title name="Primeira Liga: The Apex of Portuguese Football" />
            <article>
              <Text as="p">
                The Primeira Liga, also known as Liga NOS, stands at the
                forefront of Portuguese football. Featuring iconic clubs such as
                Porto, Benfica, and Sporting CP, the league showcases top talent
                and fierce competition. Success Secrets Bet's expert team
                diligently analyzes each team's performances, delves into player
                statistics, assesses tactical approaches, and considers
                historical data to deliver precise predictions for every
                Primeira Liga encounter. Whether you seek over/under
                predictions, home or away wins, draws, or insights into
                first-half outcomes, our platform offers diverse prediction
                options to cater to your preferences.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="Taca de Portugal: The Thrill of the Cup" />
            <article>
              <Text as="p">
                The Taca de Portugal, Portugal's prestigious knockout
                tournament, presents a captivating blend of drama and
                excitement. Success Secrets Bet extends its soccer predictions
                to cover this exhilarating cup competition, ensuring that you
                stay informed about the intense clashes between teams from
                various football divisions. Our analysts delve into team
                history, assess recent form, and consider factors such as squad
                depth and motivation to provide accurate soccer predictions
                throughout the Taca de Portugal. From the early rounds to the
                highly anticipated final, Success Secrets Bet equips you with
                insights to make informed betting decisions.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="Beyond the Primeira Liga: Exploring Portuguese Football" />
            <article>
              <Text as="p">
                Success Secrets Bet recognizes the allure of Portuguese football
                extends beyond the Primeira Liga. We extend our predictions and
                insights to other Portuguese leagues, including the Segunda
                Liga, Campeonato de Portugal, and lower divisions. By providing
                coverage and analysis across various levels of Portuguese
                football, we cater to the passionate football enthusiasts who
                appreciate the depth and competitiveness of the sport.
              </Text>
            </article>
          </Box>
        </section>
      </Box>
    </>
  );
};

export default Portugal;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: { $regex: /Portugal/i },
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
