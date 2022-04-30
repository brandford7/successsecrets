import { Box } from "@chakra-ui/react";
import Head from "next/head";
import TopSection from "../components/sections/TopSection";
import MidSection from "../components/sections/MidSection";
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

/*export async function getStaticProps() {
  await dbConnect();

  const predictions = await Prediction.find();

  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };
}
*/

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Pet.find({});
  const predictions = result.map((doc) => {
    const predictions = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });

  return { props: { pets: pets } };
}