import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MatchCard from "../../components/cards/MatchCard";
import AuthPredictionTable from "../../components/tables/AuthPredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const ViewMatch = ({ prediction }) => {
  const [message, setMessage] = useState("");

  const router = useRouter();

  const deletePrediction = async () => {
    const predictionId = router.query.id;

    try {
      await fetch(`http://localhost:3000/api/predictions/${predictionId}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      setMessage("Failed to delete the pet.");
    }
  };

  return (
    <Box h="100vh">
      <MatchCard prediction={prediction} deletePrediction={deletePrediction} />
    </Box>
  );
};

export default ViewMatch;

ViewMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export async function getStaticPaths() {
  const ress = await fetch("http://localhost:3000/api/predictions")
  const data=await res.json()
  const paths = data.map((prediction) => {
    return { params: { id: prediction._id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ context }) {
  await dbConnect();
const id =context.params.id
  const prediction = await fetch(`http://localhost:3000/api/predictions/`);

  return {
    props: {
      prediction: JSON.parse(JSON.stringify(prediction)),
    },
  };
}
