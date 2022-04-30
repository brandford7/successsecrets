import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import React from "react";
import UpdateMatchForm from "../../components/forms/UpdateMatchForm";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ViewMatch = () => {
  const router = useRouter();
  const predictionId = router.query.id;
  const { data: prediction, error } = useSWRConfig(id ? `http://localhost:3000/api/predictions/${predictionId}` : null, fetcher);

 console.log(id);


  if (error) return <p>Failed to load</p>;
  if (!prediction) return <p>Loading...</p>;

  const predictionForm = {
    Country:prediction.country,
    match: prediction.match,
    bet: prediction.bet,
    odd: prediction.odd,
    start_date: prediction.start_date,
    result:prediction.result,
    image_url: prediction.image_url,
    
  }

   console.log(predictionForm);


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