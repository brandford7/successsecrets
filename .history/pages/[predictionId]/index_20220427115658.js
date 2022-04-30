import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import React from "react";
import UpdateMatchForm from "../../components/forms/UpdateMatchForm";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ViewMatch = () => {
  const router = useRouter();
  const predictionId = router.query.id;
 
  


  return (
    <Box h="100vh">
      <UpdateMatchForm Values={predictionForm} />
    </Box>
  );
};

export default ViewMatch;

ViewMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};


export async function getServerSideProps({params}) {
  await dbConnect();

  const prediction = await Prediction.findById(params.id);

  return {
    props: {
      predictions: JSON.parse(JSON.stringify(prediction)),
    },
  };
}