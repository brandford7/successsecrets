import { Box } from "@chakra-ui/react";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import UpdateMatchForm from "../../../../components/forms/UpdateMatchForm";
import dbConnect from "../../../../lib/dbConnect";
import Prediction from "../../../../models/Prediction";



const UpdateMatch = ({prediction}) => {
 
  if (!prediction) return <p>Loading...</p>;

  const predictionForm = {
    country: prediction.country,
    match: prediction.match,
    bet: prediction.bet,
    odd: prediction.odd,
    start_date:prediction.start_date,
    result: prediction.result,
    image_url: prediction.image_url,
  };

  console.log(predictionForm);
  return (
    <>
      <Box h="100vh">
        <UpdateMatchForm Values={predictionForm} />
      </Box>
    </>
  );
};

export default UpdateMatch;

UpdateMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const id = params.id;

  const prediction = await Prediction.findById(id);
  return {
    props: {
      prediction: JSON.parse(JSON.stringify(prediction)),
    },
  };
}