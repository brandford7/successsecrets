import { Box, Button, Img, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import UpdateMatchForm from "../../components/UpdateMatchForm";
import dbConnect from "../../lib/dbConnect"
import Prediction from "../../models/Prediction"

const UpdateMatch = (predictions) => {
  return (
    <>
      <Box h="100vh">
        <TableContainer bg="bg.200" color="whitesmoke">
          <Table variant="simple">
            <Thead>
              <Tr color="whitesmoke">
                <Th>Country</Th>

                <Th>Match</Th>
                <Th>Bet</Th>
                <Th>Odd</Th>
              </Tr>
            </Thead>
            <Tbody>
              {predictions.map((prediction) => (
                <Tr key={prediction._id} bg="">
                  <Td display="flex">
                    <Img src={prediction.image_url} alt="" />{" "}
                    {prediction.country}
                  </Td>

                  <Td>{prediction.match}</Td>
                  <Td>{prediction.bet}</Td>
                  <Td isNumeric>{prediction.odd}</Td>
                  <Td><Button>Delete</Button></Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
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
