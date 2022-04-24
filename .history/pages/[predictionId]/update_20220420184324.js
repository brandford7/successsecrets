import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import UpdateMatchForm from "../../components/UpdateMatchForm";


const UpdateMatch = () => {
     const router = useRouter();
    const { predictionId } = router.query;
     const { data: pet, error } = useSWR(id ? `/api/pets/${id}` : null, fetcher)
  return (
    <Box h="100vh">
      <UpdateMatchForm />
    </Box>
  );
};

export default UpdateMatch;
