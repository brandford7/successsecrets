import { Stack } from "@chakra-ui/react";
import React from "react";
import { cardData } from "../../helpers/data";
import Card from "./Card";

const CardList = () => {
  return (
    <Stack spacing="10" mt="20">
      {cardData.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </Stack>
  );
};

export default CardList;
