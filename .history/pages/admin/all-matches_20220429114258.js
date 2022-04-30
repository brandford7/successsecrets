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
  const ps = result.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });

  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
