import { Box, Heading } from "@chakra-ui/react";
import React,{useState} from "react";
import { useRouter } from "next/router";
import PredictionTable from "../../components/PredictionTable";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const Predictions = ({ predictions }) => {
  const [message, setMessage] = useState("");

  
  const router = useRouter();

  const handleDelete = async () => {
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
      <Heading p="10">Predictions</Heading>
      <PredictionTable predictions={predictions} handleDelete={handleDelete} />
    </Box>
  );
};

export default Predictions;

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find({});

  console.log(predictions);
  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
