import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Title from "../titles/Title";

const Card = ({ card }) => {
  return (
    <Box p="10" border="1px solid white">
      <Title name={card.title} />
      <article>
        <Text as="p">{card.content}</Text>
      </article>
    </Box>
  );
};

export default Card;
