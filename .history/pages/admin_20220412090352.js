import { Box } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import Forms from "../components/Forms";

const Admin = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
  return (
    <>
      <Box h="100vh">
        {status === "loading " ? <p>Loading...</p> : status === "unauthenticated" ?<><p>Access Denied</p></>}
        <Forms />
      </Box>
    </>
  );
};

export default Admin;
