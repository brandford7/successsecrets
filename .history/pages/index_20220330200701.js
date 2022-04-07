import { Box, } from "@chakra-ui/react";
import Head from "next/head";
import MidSection from "../components/MidSection";
import TopSection from "../components/TopSection";


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
  const result = await Pet.find({});
  const pets = result.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });

  return { props: { pets: pets } };
}