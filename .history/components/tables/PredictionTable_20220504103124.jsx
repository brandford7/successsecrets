import {
 
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import React, { useState } from "react";

const PredictionTable = ({ predictions }) => {
  console.log(predictions)
  return (
    <>
      {predictions.length > 0 && (
        <TableContainer bg="bg.200" maxW="100%">
          <Table
            fontSize={["12px", "12px", "16px"]}
            size="sm"
            variant="striped"
            colorScheme=""
            color="whitesmoke"
          >
            <Thead>
              <Tr color="whitesmoke">
                <Th>Country</Th>

                <Th>Match</Th>
                <Th>Bet</Th>
                <Th>Odd</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {predictions.map((prediction) => (
                <Tr key={prediction._id}>
                  <Td>{prediction.country}</Td>

                  <Td>{prediction.match}</Td>
                  <Td>{prediction.bet}</Td>
                  <Td isNumeric>{prediction.odd}</Td>
                  <Td>prediction.result</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default PredictionTable;
