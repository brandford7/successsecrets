import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React,{ useState} from "react";
import dbConnect from "../../lib/dbConnect";
import Prediction from "../../models/Prediction";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ViewMatch = ({prediction}) => {
 const [message, setMessage] = useState("");

 const router = useRouter();

 const deletePrediction = async () => {
   const predictionId = router.query.id;

   try {
     await fetch(`http://localhost:3000/api/predictions/${id}`, {
       method: "Delete",
     });
     router.push("/");
   } catch (error) {
     setMessage("Failed to delete the pet.");
   }
 };
 
  


  return (
    <Box h="100vh">
      {prediction}
    </Box>
  );
};

export default ViewMatch;

ViewMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};


export async function getServerSideProps({params}) {
  await dbConnect();

  const prediction = await Prediction.findById(params.id);


  return {
    props: {
      prediction: JSON.parse(JSON.stringify(prediction)),
    },
  };
}