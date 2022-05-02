import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import TrickTable from "../../../components/tables/TrickTable";
import dbConnect from "../../../lib/dbConnect";
import Trick from "../../../models/Trick";

const AllTricks = ({ tricks }) => {
  return (
    <>
      <Box overfh="100vh">
        <Box display="flex" alignItems="center" justifyContent="center" mb="5">
          <Heading color="white">All Tricks</Heading>
        </Box>
              <TrickTable tricks={tricks} />
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
