import React from "react";
import { Box } from "@chakra-ui/react";
import Tables from "../components/Tables";
import dbConnect from "../lib/dbConnect";
import Prediction from "../models/Prediction"

const predictions = ({predictions}) => {
  return (
    <>
      <Box h="100vh">
        <Tables predictions={predictions} />
      </Box>
    </>
  );
};

export default predictions;

export async function getServerSideProps(){
  await dbConnect()
  const res = await Prediction.find({country:'Enlgand'});
await re.text()
  return {
    props: {
      predictions: predictions
    }
  }
}