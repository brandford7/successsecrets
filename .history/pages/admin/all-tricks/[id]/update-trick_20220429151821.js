import { Box } from "@chakra-ui/react";
import React from "react";
import UpdateTrickForm from "../../../../components/forms/UpdateTrickForm";


const UpdateTrick = () => {

const TriForm = {
  country: prediction.country,
  match: prediction.match,
  bet: prediction.bet,
  odd: prediction.odd,
  start_date: prediction.start_date,
  result: prediction.result,
  image_url: prediction.image_url,
};

  return (
    <>
      <Box h="100vh">
       <UpdateTrickForm/>
      </Box>
    </>
  );
};

export default UpdateTrick;

UpdateTrick.getLayout = function getLayout(page) {
  return <>{page}</>;
};

