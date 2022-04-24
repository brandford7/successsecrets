import { Box, Container, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const DropdownMenu = ({handleOpen,}) => {
  const [isOpen, setIsOpen] = useState(false);
 {
   isOpen && <Box bg="gray">Hi</Box>;
 }
  return (
    <>
      <Box bg="gray.100" h="auto" p="0">
        <IconButton
          onClick={handleOpen}
          icon={isOpen ? <GrFormClose /> : <GiHamburgerMenu />}
        />
       
      </Box>
    </>
  );
};

export default DropdownMenu;
