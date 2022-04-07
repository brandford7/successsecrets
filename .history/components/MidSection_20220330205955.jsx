import React from "react";
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Img,
} from "@chakra-ui/react";

const MidSection = ({ predictions }) => {
  /* const predictions = [
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
    {
      match: "Nigeria v Ghana",
      bet: "Ghana Win",
      odd: "3.5",
    },
  ]; */

  return (
    <>
      <Box>
        <Heading p="20px" bg="bg.200">
          Tips Of the Day
        </Heading>
        <TableContainer>
          <Table size="sm">
            <Thead color="white" bg="brand.800">
              <Tr>
                <Th>Match</Th>
                <Th>Bet</Th>
                <Th>Odd</Th>
              </Tr>
            </Thead>
            <Tbody bg="bg.100">
              {predictions.data.map((prediction) => (
                <Tr key={prediction._id}>
                  <Td>
                    <Img src={prediction.country} 
                  </Td>
                  <Td><Img src={prediction.image_url}</Td>
                  <Td>{prediction.match}</Td>
                  <Td>{prediction.bet}</Td>
                  <Td>{prediction.odd}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default MidSection;
