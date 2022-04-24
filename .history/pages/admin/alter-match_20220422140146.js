import { Box, Heading, IconButton, Img, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import dbConnect from "../../lib/dbConnect"
import Prediction from "../../models/Prediction"
import {BiTrash,BiEdit} from "react-icons/bi"
import Link from "next/link";


const AlterMatch = ({ predictions }) => {
  
 

  return (
    <>
      <Box h="100vh">
        <Box display="flex" alignItems="center" justifyContent="center" mb="5">
          <Heading color="white">Update/Delete a Match</Heading>
        </Box>
      <Predict
      </Box>
    </>
  );
};

export default AlterMatch;

AlterMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find();
  

  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
