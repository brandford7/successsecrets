import React from "react";
import { Box, Heading, Container, Img, Flex } from "@chakra-ui/react";

const LeagueTables = ({ tables }) => {

  const leagues = {
    country:'England'
  }
    
console.log(tables)

  return <><Box h='100vh'></Box></>;
};

export default LeagueTables;

/*export async function getServerSideProps() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "85b017f1bemshfdfe04229fffef3p122fe4jsn23af65ecd5f2",
    },
  };

  const res = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/leagues",
    options
  );

  const data = await res.json();

  return {
    props: { tables:data },
  };
}*/
