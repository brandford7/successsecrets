import { Box, Container, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

import { openMenu } from "../lib/redux/menuSlice";

const DropdownMenu = () => {
  const menu = useSelector((state) =>state.menu)
  const dispatch = useDispatch()

  return (
    <>
      <Box h="auto" display={["inline-block","inline-block","none"]} p="0">
        <IconButton bg='inherit' 
          onClick={()=>dispatch(openMenu())}
          icon={menu.isOpen ? <GrFormClose /> : <GiHamburgerMenu  />}
        />
       
      </Box>
    </>
  );
};

export default DropdownMenu;
