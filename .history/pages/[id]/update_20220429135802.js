import { Box } from "@chakra-ui/react";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import UpdateMatchForm from "../../components/forms/UpdateMatchForm";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";



const Update = ({prediction}) => {
  const router = useRouter();
/* const id = router.query;/*
  const { data: prediction, error } = useSWR(`http://localhost:3000/api/predictions/${id}` ,
    fetcher
  );

  console.log(id);
  console.log(prediction);

  if (error) return <p>Failed to load</p>; */
  if (!prediction) return <p>Loading...</p>;

  const predictionForm = {
    country: prediction.country,
    match: prediction.match,
    bet: prediction.bet,
    odd: prediction.odd,
    start_date:format(prediction.start_date, 'YYYY'),
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

export default Update;

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