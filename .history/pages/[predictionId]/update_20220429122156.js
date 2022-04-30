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
  const id = router.query;
  const { data, error } = useSWR(
    id ? `http://localhost:3000/api/predictions/${id}` : null,
    fetcher
  );

  console.log(id);
  console.log(pre);

  if (error) return <p>Failed to load</p>;
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
