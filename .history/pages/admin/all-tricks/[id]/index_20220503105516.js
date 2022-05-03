import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import TrickCard from "../../../../components/cards/TrickCard";
import dbConnect from "../../../../lib/dbConnect";
import Trick from "../../../../models/Trick";

const ViewTrick = ({ trick }) => {
  const [message, setMessage] = useState("");

  const router = useRouter();

  const deleteTrick = async () => {
    const id = router.query.id;

    try {
      await fetch(`http:successsecrets.vercel.app/api/tricks/${id}`, {
        method: "Delete",
      });
      router.push("/admin/all-tricks");
    } catch (error) {
      setMessage("Failed to delete the trick.");
    }
  };
  console.log(trick);

  return (
    <Box h="100vh">
      <Box display="flex" alignItems="center" justifyContent="center" mb="5">
        <Heading color="white">Delete Trick</Heading>
      </Box>
      <TrickCard trick={trick} deleteTrick={deleteTrick} />
    </Box>
  );
};

export default ViewTrick;

ViewTrick.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const id = params.id;

  const trick = await Trick.findById(id);
  return {
    props: {
      trick: JSON.parse(JSON.stringify(trick)),
    },
  };
}
