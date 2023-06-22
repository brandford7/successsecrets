/* eslint-disable react/no-unescaped-entities */
import { Box, Text } from "@chakra-ui/react";
import { endOfDay, startOfDay } from "date-fns";
import React from "react";
import Title from "../../components/titles/Title";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Head from "next/head";

const France = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>France-Uncover secret betting tips on France football</title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/france"
          key="canonical"
        />
        <meta
          name="description"
          content="Welcome to our France football predictions page. Here, you will find expert
          analysis, betting tips, and predictions for all the top football matches in France,
          including the Ligue 1,
          Ligue 2, Coupe de la ligue, Coupe de France, and French Super Cup ."
        />

        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" color="white" h={["auto", "auto",]}>
        <Title name="France" />
        <article>
          <Text fontSize="xl"  textAlign="justify" p="10" mb="10">
            Welcome to the France Soccer Predictions page, where you can find
            expertfootball analysis, insights, and football predictions on all
            things related to football in France. Our team of experienced sports
            analysts and enthusiasts are passionate about the game and are
            committed to providing you with the most accurate and up-to-date
            information possible. Whether you are a fan of Ligue 1, or any other
            soccer league in France, our page is the go-to destination for all
            your soccer predictions. We cover the France Ligue 1, Ligue 2,
            France Coupe de la ligue, Coupe de France, and French Super Cup. So
            whether you are a seasoned bettor or a casual fan, make sure to
            bookmark our page for all your France soccer predictions and
            analysis. With our team of experts on your side, you can stay one
            step ahead of the game and maximize your winnings with the sure
            soccer predictions.
          </Text>
        </article>
        <PredictionTable predictions={predictions} />
        <section className="page_details">
          <Box p="10" border="1px solid white">
            <Title name="The French Ligue 1" />
            <article>
              <Text as="p">
                Ligue 1, the top-tier football league in France, showcases the
                nation's footballing excellence and captivates fans with its
                flair and competitive spirit. Featuring renowned clubs like
                Paris Saint-Germain, Lyon, Marseille, and many more, Ligue 1
                boasts top talents from around the world. At Success Secrets
                Bet, our expert team of analysts delves into each team's
                performances, scrutinizes player statistics, studies tactical
                approaches, and considers historical data to deliver precise
                predictions for every Ligue 1 match. From over/under
                predictions, home or away wins, draws, or insights into first
                half outcomes, our platform provides various prediction options
                to cater to your preferences.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="Coupe de France and Coupe de la ligue" />
            <article>
              <Text as="p">
                The Coupe de France ad Coupe de la ligue, France's prestigious
                knockout cup competitions, add an extra layer of excitement and
                drama to the footballing landscape. Success Secrets Bet extends
                its predictions to cover this thrilling tournament, ensuring
                that you stay informed about the intense clashes between clubs
                from various divisions. We thoroughly analyze team histories,
                assess recent form, and consider factors such as squad depth and
                motivation to provide accurate predictions throughout the Coupe
                de France and Coupe de la ligue journey. From the early rounds
                to the highly anticipated final, Success Secrets Bet equips you
                with insights to make informed betting decisions.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="Ligue 2" />
            <article>
              <Text as="p">
                Success Secrets Bet acknowledges the allure of French football
                beyond Ligue 1 and the Coupe de France. We extend our
                predictions and insights to other French leagues, including
                Ligue 2 and lower divisions, where football enthusiasts can
                witness the passion and competitiveness of the sport at various
                levels.
              </Text>
            </article>
          </Box>
        </section>
      </Box>
    </>
  );
};

export default France;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: { $regex: /France/i },
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
