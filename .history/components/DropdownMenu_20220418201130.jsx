import { Box, Container, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const DropdownMenu = ({handleIsOpen}) => {
  const menu = useSe
  

  return (
    <>
      <Box h="auto" display={["inline-block","inline-block","none"]} p="0">
        <IconButton bg='inherit' 
          onClick={handleIsOpen}
          icon={isOpen ? <GrFormClose /> : <GiHamburgerMenu  />}
        />
       
      </Box>
    </>
  );
};

export default DropdownMenu;
