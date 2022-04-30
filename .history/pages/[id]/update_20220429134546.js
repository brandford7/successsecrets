import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import UpdateMatchForm from "../../components/forms/UpdateMatchForm";



const Update = () => {
  const router = useRouter();
7* const id = router.query;
  const { data: prediction, error } = useSWR(`http://localhost:3000/api/predictions/${id}` ,
    fetcher
  );

  console.log(id);
  console.log(prediction);

  if (error) return <p>Failed to load</p>; */
  if (!prediction) return <p>Loading...</p>;

  const predictionForm = {
    Country: prediction.country,
    match: prediction.match,
    bet: prediction.bet,
    odd: prediction.odd,
    start_date: prediction.start_date,
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