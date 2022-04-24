import { Box, Container, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import {useSelector} from "react-redux"
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import {Open}

const DropdownMenu = ({) => {
  const menu = useSelector((state) =>state.menu)
  const dispatch = useDispatch()

  return (
    <>
      <Box h="auto" display={["inline-block","inline-block","none"]} p="0">
        <IconButton bg='inherit' 
          onClick={()=>dispatch(isOpen())}
          icon={isOpen ? <GrFormClose /> : <GiHamburgerMenu  />}
        />
       
      </Box>
    </>
  );
};

export default DropdownMenu;
