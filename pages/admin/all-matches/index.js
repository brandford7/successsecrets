import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import AuthPredictionTable from "../../../components/tables/AuthPredictionTable";
import dbConnect from "../../../lib/dbConnect";
import Prediction from "../../../models/Prediction";


const AllMatches = ({ predictions }) => {
  
 

  return (
    <>
      <Box overflow='hidden' h="auto">
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

  const predictions = await Prediction.find({}).sort({start_date:-1,createdAt:-1,updatedAt:-1}).limit(150);
  

  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
