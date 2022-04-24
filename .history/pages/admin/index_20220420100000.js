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
            <Button w='40' _hover={{ bg:'yellow',color:'white'}}>Home</Button>
          </Link>
          <Link href="/admin/post-match" passHref>
            <Button w='40'>Post a match</Button>
          </Link>

          <Link href="/admin/update-match" passHref>
            <Button w="40">Update a match</Button>
          </Link>
          <Link href="/admin/update-match" passHref>
            <Button w='40'>Post a trick</Button>
          </Link>
          <Link href="/admin/update-match" passHref>
            <Button w='40'>Update a trick</Button>
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
