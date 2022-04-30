import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import UpdateMatchForm from "../../components/forms/UpdateMatchForm";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const Update = () => {
  const router = useRouter();
  const predictionId = router.query;
  const { data, error } = useSWR(
    predictionId ? `http://localhost:3000/api/predictions/${predictionId}` : null,
    fetcher
  );

  console.log(predictionId);
  console.log(data);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  const predictionForm = {
    Country: prediction.country,
    match: prediction.match,
    bet: prediction.bet,
    odd: prediction.odd,
    start_date: prediction.start_date,
    result: prediction.result,
    image_url: prediction.image_url,
  };
*/
  console.log(predictionForm);
  return (
    <>
      <Box h="100vh">
        <UpdateMatchForm  />
      </Box>
    </>
  );
};

export default Update;