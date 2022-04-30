import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import AuthPredictionTable from "../../components/tables/AuthPredictionTable";
import dbConnect from "../../lib/dbConnect"
import Prediction from "../../models/Prediction"


const AllMatches = ({ predictions }) => {
  
 

  return (
    <>
      <Box h="100vh">
        <Box display="flex" alignItems="center" justifyContent="center" mb="5">
          <Heading color="white">All Matches</Heading>
        </Box>
      <AuthPredictionTable predictions={predictions}/>
      </Box>
    </>
  );
};

export default AllMatches;

AllMatches.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export async function getServerSideProps() {
  await dbConnect();

  const results = await Prediction.find({});
  const predictions = result.map((doc) => {
    const prediction = doc.toObject();
    prediction._id = prediction._id.toString();
    return prediction;
  });

  return { props: { predictions: J} };
}