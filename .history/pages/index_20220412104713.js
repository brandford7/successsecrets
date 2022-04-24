import { Box } from "@chakra-ui/react";
import Head from "next/head";
import {useSession}
import MidSection from "../components/MidSection";
import TopSection from "../components/TopSection";
import dbConnect from "../lib/dbConnect";


export default function Home({ predictions }) {
  const {data:session} =useSession();

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
      <TopSection  />
      <MidSection predictions={predictions} />
    </Box>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const res = await fetch("http://localhost:3000/api/predictions");
  const data = await res.json();

  return { props: { predictions: data } };
}
