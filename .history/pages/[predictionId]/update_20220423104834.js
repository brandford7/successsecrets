import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import React from "react";
import UpdateMatchForm from "../../components/UpdateMatchForm";

const fetcher = (url) => fetch(url).then);

const UpdateMatch = () => {
  const router = useRouter();
  const { predictionId } = router.query;
  const { data: prediction, error } = useSWR(predictionId ? `http://localhost:3000/api/predictions/${predictionId}` : null, fetcher);

 console.log(prediction);


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

export default UpdateMatch;

UpdateMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};
