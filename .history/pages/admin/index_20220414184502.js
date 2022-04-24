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
        <Stack spacing="5" align="center" justify="center">
          <Link href="/admin/post" passHref>
            <Button>Post a match</Button>
          </Link>
          <Link href="/admin/post" passHref>
            <Button>u a match</Button>
          </Link>
          <Link href="/admin/post" passHref>
            <Button>Post a match</Button>
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
