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
const res = Prediction.find().exec((err, doc) => {
  if (!err) {
    doc.toObject({ getters: true });
    console.log("doc _id:", doc._id);
  }
});
 const predictions = await res
  return {
    props: {
      predictions: predictions
    }
  }
}