import { Box, Heading, IconButton, Img, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import dbConnect from "../../lib/dbConnect"
import Prediction from "../../models/Prediction"
import {BiTrash,BiEdit} from "react-icons/bi"
import Link from "next/link";
import { useRouter } from "next/router";

const AlterMatch = ({ predictions }) => {
  const router = useRouter()
 const { predictionId } = router.query;

  return (
    <>
      <Box h="100vh">
        <Box display="flex" alignItems="center" justifyContent="center" mb="5">
          <Heading color="white">Update/Delete a Match</Heading>
        </Box>
        <TableContainer bg="bg.200" color="whitesmoke">
          <Table variant="">
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
                    <Img src={prediction.image_url} alt="" />
                    {prediction.country}
                  </Td>

                  <Td>{prediction.match}</Td>
                  <Td>{prediction.bet}</Td>
                  <Td isNumeric>{prediction.odd}</Td>
                  <Td>
                    <Stack direction="row">
                      <Link href="/predictionId]/update-match" passHref>
                        
                        <IconButton
                          rounded="full"
                          icon={<BiEdit color="blue" />} />
                        
                      </Link>
                      <IconButton
                        rounded="full"
                        icon={<BiTrash color="red" />}
                      />
                    </Stack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
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
  console.log(predictions);

  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
