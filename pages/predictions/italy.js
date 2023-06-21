/* eslint-disable react/no-unescaped-entities */
import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import React from "react";
import Title from "../../components/titles/Title";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Head from "next/head";

const Italy = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>
          Italy- Your destination betting tips for Italian football matches
        </title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/italy"
          key="canonical"
        />
        <meta
          name="description"
          content="Welcome to our Italy predictions page. Discover a lot of
          betting tips, and accurate predictions for all the top football matches in Italy, including Serie A, Serie B, Coppa Italia, and Supercoppa Italiana."
        />

        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="Italy" />
        <article>
          <Text fontSize="xl" textAlign="justify" color="white" p="10" mb="10">
            Welcome to our Italy football predictions page. We help you discover
            a lot of betting tips, and accurate predictions for all the top
            football matches in Italy, including Italian Serie A,Italian Serie
            B, Coppa Italia, and Supercoppa Italiana. Our team of experts use a
            variety of statistical tools, historical data, and other factors to
            arrive at their predictions. Whether you are a die-hard Italian
            soccer fan or simply looking to make informed bets, our Italy
            football Predictions page has got you covered. We update our
            predictions regularly, so be sure to check back often for the latest
            insights and information on Italian soccer matches.
          </Text>
        </article>
        <PredictionTable predictions={predictions} />
        <section className="page_details">
          <Box p="10" border="1px solid white">
            <Title name="SERIE A" />
            <article>
              <Text as="p">
                Serie A stands as the pinnacle of Italian football, captivating
                fans around the globe with its unique blend of skill, tactical
                prowess, and intense rivalries. With iconic clubs like Juventus,
                Milan, Inter, and Roma, Serie A showcases some of the world's
                most talented players. At Success Secrets Bet, our team of
                expert analysts meticulously studies each team's performances,
                scrutinizes player statistics, analyzes tactical approaches, and
                considers historical data to deliver precise predictions for
                every Serie A encounter. Whether you seek over/under
                predictions, home or away wins, draws, or insights into
                first half betting tips, our platform offers diverse prediction
                options tailored to your preferences.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="Coppa Italia: The Battle for Cup Glory" />
            <article>
              <Text as="p">
                The Coppa Italia, Italy's prestigious knockout cup competition,
                provides a thrilling platform for teams across various divisions
                to compete against each other. Success Secrets Bet extends its
                predictions to cover this captivating tournament, ensuring that
                you stay informed about the exciting clashes between Italian
                clubs. Our analysts delve into team histories, assess recent
                form, and consider factors such as squad depth and motivation to
                provide accurate predictions throughout the Coppa Italia
                journey. From the early rounds to the highly anticipated final,
                Success Secrets Bet equips you with insights to make informed
                betting decisions.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="SERIE B AND SERIE C" />
            <article>
              <Text as="p">
                Success Secrets Bet recognizes the allure of Italian football
                extends beyond Serie A and the Coppa Italia. We extend our
                predictions and insights to other Italian leagues, including
                Serie B, and Serie C. By providing coverage and analysis across
                various levels of Italian football, we cater to the passionate
                football enthusiasts who appreciate the depth and
                competitiveness of the sport in Italy.
              </Text>
            </article>
          </Box>
        </section>
      </Box>
    </>
  );
};

export default Italy;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: { $regex: /Italy/i },
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
