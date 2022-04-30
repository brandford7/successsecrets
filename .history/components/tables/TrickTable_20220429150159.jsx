import { Box, Stack } from "@chakra-ui/react";
import React from "react";

const TrickTable = ({ tricks }) => {
  return (
    <>
      <Stack >
        {" "}
        {tricks.map((trick) => (
          <Box
            display="flex"
            justifyContent="center"
            w="auto"
            key={trick._id}
            h="auto"
          >
            <iframe
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              src={trick.video_Link}
            />
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default TrickTable;
