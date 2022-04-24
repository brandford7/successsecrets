import { Box, Container, IconButton } from "@chakra-ui/react";
import React,{useState} from "react";
import Footer from "./Footer";
import { GiHamburgerMenu } from "react-icons/gi"
import{GrFormClose} from "react-icons/gr"

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(true)
  

  return (
    <>
      <Box bg="gray.100" h="auto" p="0">
      <IconButton icon={isOpen ? <GrFormClose/> : <GiHamburgerMenu/>} />
    
      </Box>
    </>
  );
};

export default DropdownMenu;
