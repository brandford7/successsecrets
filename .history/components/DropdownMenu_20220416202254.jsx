import { Box, Container, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const DropdownMenu = ({handleIsOpen}) => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <>
      <Box h="auto" displ p="0">
        <IconButton bg='inherit' 
          onClick={handleIsOpen}
          icon={isOpen ? <GrFormClose /> : <GiHamburgerMenu  />}
        />
       
      </Box>
    </>
  );
};

export default DropdownMenu;
