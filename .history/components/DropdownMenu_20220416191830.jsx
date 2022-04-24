import { Box, Container } from "@chakra-ui/react";
import React,{useState} from "react";
import Footer from "./Footer";
import MainLogo from "./MainLogo";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(true)
  

  return (
    <>
      <Box bg="gray.100" h="auto" p="0">
      <Stack ></Stack>
    
      </Box>
    </>
  );
};

export default DropdownMenu;
