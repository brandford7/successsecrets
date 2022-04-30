import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MatchCard from "../../components/cards/MatchCard";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const ViewMatch = ({ prediction }) => {
  const [message, setMessage] = useState("");

  const router = useRouter();

  const deletePrediction = async () => {
    const id = router.query.id;

    try {
      await fetch(`http://localhost:3000/api/predictions/${id}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      setMessage("Failed to delete the pet.");
    }
  };
console.log(prediction)

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

export async function getServerSideProps({params}) {
  await dbConnect();
const id = params.id
  const res = await fetch(`http://localhost:3000/api/predictions/${id}`)
  
  return {
    props:JSON.parse(JSON.stringify(res))
  }

}
