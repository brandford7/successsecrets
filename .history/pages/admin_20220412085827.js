import { Box } from "@chakra-ui/react";
import React from "react";
import Forms from "../components/Forms";

const Admin = () => {
   if (status === "loading") {
     return <p>Loading...</p>;
   }

   if (status === "unauthenticated") {
     return <p>Access Denied</p>;
   }
  return (
    <>
      <Box h='100vh'>
        
        <Forms />
      </Box>
    </>
  );
};

export default Admin;
