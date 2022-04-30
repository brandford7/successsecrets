import { Box, Button, Stack, Text } from "@chakra-ui/react";

import React from "react";
import Link from "next/link";

const Admin = () => {
  return (
    <>
      <Box h="100vh">
        <Box display="flex" mt="50px" justifyContent="center">
          <Text color="white" fontSize="18px" fontWeight="bold" p="10">
            Welcome to the Admin page
          </Text>
        </Box>
        <Stack h="50vh" spacing="5" align="center" justify="center">
          <Link href="/" passHref>
            <Button w="40" _hover={{ bg: "brand.700", color: "white" }}>
              Home
            </Button>
          </Link>
          <Link href="/admin/post-match" passHref>
            <Button w="40" _hover={{ bg: "brand.700", color: "white" }}>
              Post a match
            </Button>
          </Link>

          <Link href="/admin/all-matches" passHref>
            <Button w="40" _hover={{ bg: "brand.700", color: "white" }}>
              View All matches
            </Button>
          </Link>
          <Link href="/admin/post-trick" passHref>
            <Button w="40" _hover={{ bg: "brand.700", color: "white" }}>
              Post a trick
            </Button>
          </Link>
          <Link href="/admin/update-trick" passHref>
            <Button w="40" _hover={{ bg: "brand.700", color: "white" }}>
              Update a Trick
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page) {
  return <>{page}</>;
};
