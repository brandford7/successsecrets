import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'

const ResultTable = ({predictions}) => {
  return (
    <>
      {predictions.length || predictions.result == null && (
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
                <Th>Result</Th>
              </Tr>
            </Thead>
            <Tbody>
              {predictions.map((prediction) => (
                <Tr key={prediction._id}>
                  <Td>{prediction.country}</Td>

                  <Td>{prediction.match}</Td>
                  <Td>{prediction.result !== null && prediction.result}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default ResultTable