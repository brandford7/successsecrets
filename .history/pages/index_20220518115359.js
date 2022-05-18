import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script";
import TopSection from "../components/sections/TopSection";
import MidSection from "../components/sections/MidSection";
import dbConnect from "../lib/dbConnect";
import Prediction from "../models/Prediction";
import { endOfDay, startOfDay } from "date-fns";

export default function Home({ predictions }) {
  return (
    <Box overflow="hidden" h="auto">
      <Head>
        <title>Success Secrets bet</title>
        <meta
          name="description"
          content="The best site for football predictions"
        />
        <link rel="icon" href="/success-image.webp" />
         
      </Head>
         <Script
        
        src="https://secure.betwaypartnersafrica.com/mediahandler/btag-P86636-PR22434-CM56766-TS1943921/"
          strategy="afterInteractive"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> 
      <TopSection />
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
