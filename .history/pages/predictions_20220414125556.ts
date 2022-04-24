import React from "react";
import { Box } from "@chakra-ui/react";
import PredTables from "../components/PredictionTable";
import dbConnect from "../lib/dbConnect";
import Prediction from "../models/Prediction"

const predictions = ({predictions}) => {
  return (
    <>
      <Box h="100vh">
        <PredictionTable predictions={predictions} />
      </Box>
    </>
  );
};

export default predictions;

export async function getServerSideProps(){
  await dbConnect()
const res = Prediction.find({country:"Enlgand"}).lean()
 
 const predictions = await res
  return {
    props: {
      predictions
    }
  }
}