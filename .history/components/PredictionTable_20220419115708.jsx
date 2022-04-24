import {
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const PredictionTable = ({ predictions }) => {
 
  return (
    <TableContainer bg="bg.200" color='whitesmoke>
      <Table variant="simple">
        <Thead color="white">
          <Tr>
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
                <Img src={prediction.image_url} alt="" /> {prediction.country}
              </Td>

              <Td>{prediction.match}</Td>
              <Td>{prediction.bet}</Td>
              <Td isNumeric>{prediction.odd}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PredictionTable;
