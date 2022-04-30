import { Box, Stack,Flex } from "@chakra-ui/react";
import React from "react";

const TrickTable = ({ tricks }) => {
  return (
    <>
      <Stack spacing="5">
        {tricks.map((trick) => (
          <Flex>
        
            <Box key={trick._id}
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
            <IconButton onClick={deletePrediction} icon={<BiTrash />} />
          </Flex>
        ))}
      </Stack>
    </>
  );
};

export default TrickTable;