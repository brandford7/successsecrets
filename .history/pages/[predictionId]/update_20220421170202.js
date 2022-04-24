import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import React from "react";
import UpdateMatchForm from "../../components/UpdateMatchForm";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const UpdateMatch = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: pet, error } = useSWR(id ? `/api/pets/${id}` : null, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!pet) return <p>Loading...</p>;

  return (
    <Box h="100vh">
      <UpdateMatchForm />
    </Box>
  );
};

export default UpdateMatch;

UpdateMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};
