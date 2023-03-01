import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MatchCard from "../../../../components/cards/MatchCard";
import dbConnect from "../../../../lib/dbConnect";
import Prediction from "../../../../models/Prediction";

const ViewMatch = ({ prediction }) => {
  const [message, setMessage] = useState("");

  const router = useRouter();

  const deletePrediction = async () => {
    const id = router.query.id;

    try {
      await fetch(`https://successsecrets.vercel.app/api//${id}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      setMessage("Failed to delete the match.");
    }
  };
  console.log(prediction);

  return (
    <Box overflow="hidden" h="100vh">
      <Box display="flex" alignItems="center" justifyContent="center" mb="5">
        <Heading color="white">Delete Match</Heading>
      </Box>
      <MatchCard prediction={prediction} deletePrediction={deletePrediction} />
    </Box>
  );
};

export default ViewMatch;

ViewMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};

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
