import { Box } from "@chakra-ui/react";
import Head from "next/head";
import MidSection from "../components/MidSection";
import TopSection from "../components/TopSection";
import dbConnect from "../lib/dbConnect";
import Prediction from "../models/Prediction";

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

  const res = await Prediction.find();
    const predictions = result.map((doc) => {
      const prediction = doc.toObject();
      prediction._id = prediction._id.toString();
      return prediction;
    });

  return { props: { predictions: predictions} };
}
