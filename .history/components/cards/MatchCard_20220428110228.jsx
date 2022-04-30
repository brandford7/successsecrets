import React from "react";
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

const MatchCard = () => {
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
                  <Tbody><Tr></Tr></Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MatchCard;
