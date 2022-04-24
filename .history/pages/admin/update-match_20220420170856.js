import { Box } from "@chakra-ui/react";
import React from "react";
import UpdateMatchForm from "../../components/UpdateMatchForm";

const UpdateMatch = (predictions) => {
  return (
    <>
      <Box h="100vh">
        <UpdateMatchForm />
      </Box>
    </>
  );
};

export default UpdateMatch;

UpdateMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find();

  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
