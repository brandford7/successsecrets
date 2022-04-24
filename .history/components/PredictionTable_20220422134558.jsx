import {
  IconButton,
  Img,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BiTrash, BiEdit } from "react-icons/bi";
import { useSession } from "next-auth/react";

const PredictionTable = ({ predictions }) => {
  const { data: session } = useSession();

  console.log(predictions);
  return (
    <TableContainer bg='bg.200'maxW='100%'>
      <Table size="md" variant='' colorScheme="blue" color="whitesmoke">
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
            <Tr key={prediction._id}>
              <Td>
                <Img src={prediction.image_url} alt="" /> {prediction.country}
              </Td>

              <Td>{prediction.match}</Td>
              <Td>{prediction.bet}</Td>
              <Td isNumeric>{prediction.odd}</Td>
              {session && (
                <Td>
                  <Stack direction="row">
                    <Link
                      href="/[predictionId]/update"
                      as={`/${prediction._id}/update`}
                      passHref
                    >
                      <IconButton
                        rounded="full"
                        icon={<BiEdit color="blue" />}
                      />
                    </Link>
                    <IconButton rounded="full" icon={<BiTrash color="red" />} />
                  </Stack>
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PredictionTable;
