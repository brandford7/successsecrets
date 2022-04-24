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
      <Box bg='brand.900'>
        <Heading p="20px" bg="">
          Tips Of the Day
        </Heading>
        <TableContainer bg=''>
          <Table variant='striped'>
            <Thead color="white" >
              <Tr>
                <Th>Country</Th>

                <Th>Match</Th>
                <Th>Bet</Th>
                <Th>Odd</Th>
              </Tr>
            </Thead>
            <Tbody >
              {predictions.data.map((prediction) => (
                <Tr key={prediction._id} bg='gray'>
                  <Td display="flex">
                    <Img src={prediction.image_url} alt='' /> {prediction.country}
                  </Td>

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
