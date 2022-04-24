import { Box } from "@chakra-ui/react";
import React from "react";
import UpdateMatchForm from "../../components/UpdateMatchForm";


const UpdateMatch = () => {
     const router = useRouter();
     const { predictionId } = router.query;
  return (
    <Box h="100vh">
      <UpdateMatchForm />
    </Box>
  );
};

export default UpdateMatch;
