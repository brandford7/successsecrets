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
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
    </>
  );
};

export default MatchCard;
