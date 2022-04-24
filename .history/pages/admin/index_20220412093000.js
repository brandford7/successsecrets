import { Box, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import Forms from "../../components/Forms";

const Admin = () => {
  //const { data: session, status } = useSession();
 
  return (
    <>
      <Box h="100vh">
       
          <Forms />
        
      </Box>
    </>
  );
};

export default Admin;
