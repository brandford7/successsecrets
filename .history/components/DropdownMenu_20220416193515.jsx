import { Box, Container, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Box bg="gray.100" h="auto" p="0">
        <IconButton onClick={() => signOu} icon={isOpen ? <GrFormClose /> : <GiHamburgerMenu />} />
      </Box>
      {isOpen &&<Box bg='red'>Hello</Box>}
    </>
  );
};

export default DropdownMenu;
