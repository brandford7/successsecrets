/* eslint-disable react/no-unescaped-entities */
import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import React from "react";
import Title from "../../components/titles/Title";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Head from "next/head";

const Germany = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>Germany-Betting tips for German football competitions</title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/germany"
          key="canonical"
        />
        <meta
          name="description"
          content="Welcome to our Germany predictions page. Here, you will find expert football
          betting tips and predictions for all the top football matches in Germany,
          including the Bundesliga, Bundesliga 2,DFB Pokal, and German Super Cup. Get all zulubet predictions, windraw win sure matches, forebet"
        />

        <link rel="icon" href="/success-image.jpg" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="Germany" />
        <article>
          <Text fontSize="2xl" color="white" textAlign="justify" p="10" mb="10">
            Welcome to Germany predictions page. On this page, you will find
            accurate German football betting tips.Our team of football experts
            has years of experience analyzing the German football leagues,
            including the German Bundesliga,German Bundesliga 2, German DFB
            Pokal, and German Super Cup and more. We use a combination of
            statistical analysis and insider knowledge to make our predictions,
            giving you the best chance of making informed bets on Germany soccer
            matches. Make sure to bookmark this page and check back regularly
            for the latest analysis, and predictions on Germany soccer.
          </Text>
        </article>
        <PredictionTable predictions={predictions} />
        <section className="page_details">
          <Box p="10" border="1px solid white">
            <Title name="The German Bundesliga " />
            <article>
              <Text as="p">
                The Bundesliga stands at the forefront of German football,
                renowned for its vibrant atmosphere, captivating matches, and
                exceptional talent. From powerhouses like Bayern Munich and
                Borussia Dortmund to traditional clubs like Schalke 04 and
                Borussia Mönchengladbach, the Bundesliga showcases a captivating
                blend of skill, tactics, and unwavering dedication. At Success
                Secrets Bet, we employ a team of expert analysts who delve into
                every aspect of Bundesliga matches. They meticulously study team
                dynamics, scrutinize player statistics, analyze tactical
                approaches, and consider historical data to deliver accurate
                predictions for every Bundesliga encounter. Whether you're
                seeking over/under predictions, home or away wins, draws, or
                insights into correct scores, our platform offers diverse
                prediction options tailored to your unique preferences.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="DFB-Pokal: The Cup of Surprises" />
            <article>
              <Text as="p">
                The DFB-Pokal, Germany's premier knockout cup competition, adds
                an element of unpredictability and magic to the German football
                landscape. Success Secrets Bet extends its predictions to cover
                this enthralling tournament, ensuring that you stay informed
                about the exhilarating clashes between clubs from different
                divisions. Our team of analysts closely examines team histories,
                assesses recent form, and considers various factors such as
                squad depth, motivation, and the intriguing element of cup
                upsets to provide accurate predictions throughout the DFB-Pokal
                journey. From the early rounds to the highly anticipated final,
                Success Secrets Bet equips you with insights to make informed
                betting decisions and witness the surprises that make German
                football truly unique.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="Bundesliga 2 and Lower Football Divisions" />
            <article>
              <Text as="p">
                Success Secrets Bet acknowledges that German football extends
                far beyond the Bundesliga and the DFB-Pokal. We extend our
                predictions and insights to other German leagues, including the
                2. Bundesliga and the lower divisions. These lesser-known
                leagues offer a unique and grassroots football experience,
                showcasing the passion, resilience, and talent that exist
                throughout Germany's football pyramid. Our comprehensive
                coverage caters to those who seek the unexplored and yearn for
                the extraordinary.
              </Text>
            </article>
          </Box>
        </section>
      </Box>
    </>
  );
};

export default Germany;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: { $regex: /Germany/i },
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
