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
import React from "react";
import { BiTrash, BiEdit } from "react-icons/bi";
import {useSession} from "next-auth/react"


const PredictionTable = ({ predictions }) => {
  const { data: session } = useSession()
  

  return (
    <>
    <TableContainer bg="bg.200" color="whitesmoke">
      <Table variant="">
        <Thead >
          <Tr color="whitesmoke">
            <Th>Country</Th>

            <Th>Match</Th>
            <Th>Bet</Th>
            <Th>Odd</Th>
          </Tr>
        </Thead>
        <Tbody>
          {predictions.map((prediction) => (
            const Id =prediction._id.toString()
           
              <> Tr key = { Id } bg = "" >
              <Td display="flex">
                <Img src={prediction.image_url} alt="" /> {prediction.country}
              </Td>

              <Td>{prediction.match}</Td>
              <Td>{prediction.bet}</Td>
              <Td isNumeric>{prediction.odd}</Td>
             {session && <Td>
                    <Stack direction="row">
                  <Link href='/[id]' as={`/${prediction._id}/update`} passHref >
                        
                        <IconButton
                          rounded="full"
                          icon={<BiEdit color="blue" />} />
                        
                      </Link>
                      <IconButton
                        rounded="full"
                        icon={<BiTrash color="red" />}
                      />
                </Stack>
                </Td> }
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer >
      </>
  );
};

export default PredictionTable;
