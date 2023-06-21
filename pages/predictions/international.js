/* eslint-disable react/no-unescaped-entities */
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { endOfDay, startOfDay } from "date-fns";
import PredictionTable from "../../components/tables/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";
import Title from "../../components/titles/Title";
import Head from "next/head";

const International = ({ predictions }) => {
  return (
    <>
      <Head>
        <title>
          International Matches-All international competitions, and friendly
          matches are available here.
        </title>
        <link
          rel="canonical"
          href="https://www.successsecretsbet.com/predictions/international"
          key="canonical"
        />
        <meta
          name="description"
          content="Welcome to our International predictions page. Here, you will find expert
          analysis and predictions for all the top international football matches ,
          including the World Cup, Club World Cup, Olympics, U17 and U20 World Cups"
        />

        <link rel="icon" href="/success-image.webp" />
      </Head>
      <Box overflow="hidden" h={["auto", "auto", "100vh"]}>
        <Title name="International" />
        <article>
          <Text fontSize="xl" textAlign="justify" color="white" p="10" mb="10">
            International football predictions page is the ultimate destination
            for soccer enthusiasts who are looking to stay updated on the latest
            predictions, and insights about international soccer. Whether your
            are a casual fan or a seasoned follower of football, our page has
            everything you need to stay informed and make informed decisions.
            Our team of experienced analysts and are dedicated to providing
            accurate predictions and in-depth analysis of international soccer
            matches across various tournaments. We cover all major soccer events
            including the FIFA World Cup,FIFA WOMEN WORLD CUP, FIFA Club World
            Cup, Olympics Games,FIFA U17 World Cup and FIFA U20 World Cups and
            more. We also provide expert opinions and statistical analysis to
            help you make informed decisions when placing bets on soccer
            matches.
          </Text>
        </article>
        <PredictionTable predictions={predictions} />
        <section className="page_details">
          <Box p="10" border="1px solid white">
            <Title name="FIFA Competitions: The Pinnacle of International Football " />
            <article>
              <Text as="p">
                FIFA competitions stand as the pinnacle of international
                football, where nations compete for glory on the grandest stage.
                From the prestigious FIFA World Cup, the ultimate showcase of
                footballing talent and national pride, to regional tournaments
                like the FIFA Club World Cup,FIFA U17 World Cup,FIFA U20 World
                Cup, CONMEBOL Copa America, and AFC Asian Cup, these
                competitions capture the imagination of millions worldwide.
                Success Secrets Bet covers these tournaments with meticulous
                precision, employing a team of expert analysts who delve into
                team histories, assess recent form, analyze player performances,
                and consider a myriad of factors that influence match outcomes.
                Whether it's predicting group stage results, knockout stage
                battles, or even the eventual tournament winners, our platform
                provides accurate insights to enhance your understanding and
                enjoyment of these spectacular competitions.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="International Friendlies: Exhibitions of Footballing Excellence" />
            <article>
              <Text as="p">
                International friendlies serve as platforms for teams to
                fine-tune their strategies, test new formations, and showcase
                emerging talents. While the competitive element may be relaxed,
                these matches often offer a glimpse into the future and can
                surprise with unexpected outcomes. Success Secrets Bet extends
                its predictions to international friendlies, analyzing team
                dynamics, assessing player form, and considering various factors
                such as squad rotations, tactical experimentation, and the
                motivation of both teams involved. Our platform equips you with
                valuable insights to navigate the intricacies of these
                exhibition matches and make informed betting decisions.
              </Text>
            </article>
          </Box>
          <Box p="10" border="1px solid white">
            <Title name="Unleashing the Secrets of International Football" />
            <article>
              <Text as="p">
                At Success Secrets Bet, our predictions for international
                matches are fueled by a combination of expert analysis and
                advanced algorithms. Our team of football analysts closely
                follows the international scene, studying team dynamics,
                assessing player performances, and considering external factors
                that influence match outcomes. By leveraging extensive data and
                our analysts' deep understanding of the game, Success Secrets
                Bet empowers you with valuable insights to enhance your betting
                strategies and make informed decisions in the unpredictable
                realm of international football.
              </Text>
            </article>
          </Box>
        </section>
      </Box>
    </>
  );
};

export default International;

export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find({
    country: { $regex: /International/i },
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
