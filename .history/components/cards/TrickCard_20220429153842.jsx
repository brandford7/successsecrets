import { Box, Flex, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react'

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
        <Stack direction="row" mt="3">
          <Link
            href="/admin/all-tricks/[trickId]/update-trick"
            as={`/admin/all-tricks/${trick._id}/update-trick`}
            passHref
          >
            <IconButton icon={<BiEdit color="blue" />} />
          </Link>
          <Link
            href="/admin/all-tricks/[trickId]"
            as={`/admin/all-tricks/${trick._id}`}
            passHref
          >
            <IconButton icon={<GrFormView />} />
          </Link>
        </Stack>
      </Flex>
    </>
  );
}

export default TrickCard