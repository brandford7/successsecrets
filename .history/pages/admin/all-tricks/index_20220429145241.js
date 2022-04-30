import { Box, Heading } from "@chakra-ui/react";
import React from "react";

import dbConnect from "../../../lib/dbConnect";


const AllTricks = ({ tricks }) => {
  return (
    <>
      <Box h="100vh">
        <Box display="flex" alignItems="center" justifyContent="center" mb="5">
          <Heading color="white">All Matches</Heading>
        </Box>
        
      </Box>
    </>
  );
};

export default AllTricks;

AllTricks.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export async function getServerSideProps() {
  await dbConnect();

  const tricks = await Trick.find();

  return { props: { tricks: JSON.parse(JSON.stringify(tricks)) } };
}
