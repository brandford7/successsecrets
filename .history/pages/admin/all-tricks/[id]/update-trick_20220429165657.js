import { Box } from "@chakra-ui/react";
import React from "react";
import UpdateTrickForm from "../../../../components/forms/UpdateTrickForm";
import dbConnect from "../../../../lib/dbConnect";
import Trick from "../../../../models/Trick";


const UpdateTrick = ({trick}) => {

 if (!prediction) return <p>Loading...</p>;


const TrickForm = {
  title: trick.title,
  video_Link: trick.video_Link,
  
};

  return (
    <>
      <Box h="100vh">
        <UpdateTrickForm Values={TrickForm} />
      </Box>
    </>
  );
};

export default UpdateTrick;

UpdateTrick.getLayout = function getLayout(page) {
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