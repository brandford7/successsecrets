import { Box, } from "@chakra-ui/react";
import Head from "next/head";
import MidSection from "../components/MidSection";
import TopSection from "../components/TopSection";
import dbConnect from "../lib/dbConnect";
import Prediction from "../models/Prediction";


export default function Home() {
  return (
    <Box   overflow='hidden' h="auto">
      
        <Head>
          <title>Success Secrets</title>
          <meta
            name="description"
            content="The best site for football predictions"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <TopSection />
      <MidSection/>
    </Box>
  );
}


export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const res = await fetch("api/")
  

  return { props: { pets: pets } };
}