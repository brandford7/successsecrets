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
