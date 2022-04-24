import { Box, Container, Icon, IconButton } from "@chakra-ui/react";
import React,{useState} from "react";
import Footer from "./Footer";
import {GiHamburgerMenu} from "r"

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(true)
  

  return (
    <>
      <Box bg="gray.100" h="auto" p="0">
      <IconButton icon={isOpen ? </> :</>}
    
      </Box>
    </>
  );
};

export default DropdownMenu;
