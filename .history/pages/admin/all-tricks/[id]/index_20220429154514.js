import { Box } from "@chakra-ui/react";
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
      await fetch(`http://localhost:3000/api/tricks/${id}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      setMessage("Failed to delete the trick.");
    }
  };
  console.log(trick);

  return (
    <Box h="100vh">
      <TrickCard trick={trick} />
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
