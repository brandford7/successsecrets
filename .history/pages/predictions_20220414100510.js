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
.findOne().exec((err, doc) => {
  if (!err) {
    doc.toObject({ getters: true });
    console.log("doc _id:", doc._id);
  }
});
 const predictions = await docs
  return {
    props: {
      predictions: predictions
    }
  }
}