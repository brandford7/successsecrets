import {
  IconButton,
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
import { useRouter } from "next/router";
import { GrFormView } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";

const AuthPredictionTable = ({ predictions }) => {
  const router = useRouter();

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
              <Td>{prediction.country}</Td>

              <Td>{prediction.match}</Td>
              <Td>{prediction.bet}</Td>
              <Td isNumeric>{prediction.odd}</Td>

              <Td>
                <Stack direction="row">
                  <Link
                    href="/admin/all-matches/[predictionId]/update-match"
                    as={`/admin/all-matches/${prediction._id}/update-match`}
                    passHref
                  >
                    <IconButton icon={<BiEdit color="blue" />} />
                  </Link>
                  <Link
                    href="/admin/all-matches/[predictionId]"
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
