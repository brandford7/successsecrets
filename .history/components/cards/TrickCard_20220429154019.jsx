import { Box, Flex, IconButton, Stack } from '@chakra-ui/react';
import React from 'react'
import { BiEdit } from "react-icons/bi";

const TrickCard = () => {
  return (
    <>
      <Flex align="center"  direction="column">
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
       
            <IconButton icon={<BiTrash color="blue" />} />
         
          
            
      </Flex>
    </>
  );
}

export default TrickCard