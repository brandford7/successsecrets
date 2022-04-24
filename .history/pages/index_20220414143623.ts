import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import MidSection from "../components/MidSection";
import TopSection from "../components/TopSection";
import dbConnect from "../lib/dbConnect";

export default function Home({ predictions }) {
  return (
    <Box overflow="hidden" h="auto">
      <Head>
        <title>Success Secrets bet</title>
        <meta
          name="description"
          content="The best site for football predictions"
        />
        <link rel="icon" href="/success-image.jpg" />
      </Head>
      <TopSection />
      <MidSection predictions={predictions} />
    </Box>
  );
}

export const getServerSideProps:GetServerSideProps=() {
  await dbConnect();

  /* find all the data in our database */
  const res = await fetch("http://localhost:3000/api/predictions");
  const data = await res.json();

  return { props: { predictions: data } };
}
