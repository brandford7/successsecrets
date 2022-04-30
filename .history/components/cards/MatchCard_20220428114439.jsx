import React from "react";
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
import { BiTrash, BiEdit } from "react-icons/bi";
import Link from "next/link";

const MatchCard = ({ prediction }) => {
  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Match</Th>
              <Th>Bet</Th>
              <Th>Odd</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{prediction.country}</Td>
              <Td>{prediction.match} </Td>
              <Td>{prediction.bet}</Td>
              <Td>{prediction.odd}</Td>
              <Td>
                <Stack direction="row">
                  <Link>
                    <IconButton />
                                  </Link>
                                  <IconButton />
                </Stack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MatchCard;
