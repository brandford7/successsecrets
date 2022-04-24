import { Box, Container, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const DropdownMenu = ({handleOpen,}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = ()=> setIsOpen()

  return (
    <>
      <Box bg="" h="auto" p="0">
        <IconButton bg='inherit'
          onClick={handleOpen}
          icon={isOpen ? <GrFormClose /> : <GiHamburgerMenu  />}
        />
       
      </Box>
    </>
  );
};

export default DropdownMenu;
