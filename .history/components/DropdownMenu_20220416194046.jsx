import { Box, Container, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const DropdownMenu = ("handleOpen) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box bg="gray.100" h="auto" p="0">
        <IconButton
          onClick={() => setIsOpen(!isOpen)}
          icon={isOpen ? <GrFormClose /> : <GiHamburgerMenu />}
        />
       
      </Box>
    </>
  );
};

export default DropdownMenu;
