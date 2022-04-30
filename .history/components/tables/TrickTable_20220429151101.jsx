import { Box, Stack,Flex,IconButton } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";

const TrickTable = ({ tricks }) => {
  return (
    <>
      <Stack spacing="5">
        {tricks.map((trick) => (
          <Flex key={trick._id} direction="column">
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
            <Stack direction="row">
              <Link
                href="/admin/all-matches/[predictionId]/update-match"
                as={`/admin/all-matches/${prediction._id}/update-match`}
                passHref
              >
                <IconButton icon={<BiEdit color="blue" />} />
              </Link>
              <Link
                href="/admin/all-tricks/[trickId]"
                as={`/admin/all-mtricks/${trick._id}`}
                passHref
              >
                <IconButton icon={<GrFormView />} />
              </Link>
            </Stack>
          </Flex>
        ))}
      </Stack>
    </>
  );
};

export default TrickTable;
