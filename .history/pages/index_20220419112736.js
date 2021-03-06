import { Box } from "@chakra-ui/react";
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

export async function getServerSideProps() {
  await dbConnect();

  
  const res = await fetch("http://localhost:3000/api/predictions");
  const predictions = await res.json();
console.log(predictions);
  return { props: { predictions } };
}
