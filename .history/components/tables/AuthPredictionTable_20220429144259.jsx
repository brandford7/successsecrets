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

import React, { useState } from "react";
import { useRouter } from "next/router";
import { GrFormView } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";

const AuthPredictionTable = ({ predictions }) => {
  const router = useRouter();
console.log(predictions)

  return (
    <TableContainer bg="bg.200" maxW="100%">
      <Table size="md" variant="unstyled" colorScheme="blue" color="whitesmoke">
        <Thead>
          <Tr color="whitesmoke">
            <Th>Country</Th>

            <Th>Match</Th>
            <Th>Bet</Th>
            <Th>Odd</Th>
          </Tr>
        </Thead>
        <Tbody>
          {predictions?.map((prediction) => (
            <Tr key={prediction._id}>
              <Td>
                <Img src={prediction.image_url} alt="" /> {prediction.country}
              </Td>

              <Td>{prediction.match}</Td>
              <Td>{prediction.bet}</Td>
              <Td isNumeric>{prediction.odd}</Td>

              <Td>
                <Stack direction="row">
                  <Link
                    href="/[predictionId]/update"
                    as={`/${prediction._id}/update`}
                    passHref
                  >
                    <IconButton icon={<BiEdit color="blue" />} />
                  </Link>
                  <Link
                    href="/admin/all-matc[predictionId]"
                    as={`/admin/all-matches/${prediction._id}`}
                    passHref
                  >
                    <IconButton icon={<GrFormView />} />
                  </Link>
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AuthPredictionTable;
