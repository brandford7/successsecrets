import { Box, Container, IconButton, Menu } from "@chakra-ui/react";
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
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem icon={<AddIcon />} command="⌘T">
            New Tab
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
            New Window
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
            Open Closed Tab
          </MenuItem>
          <MenuItem icon={<EditIcon />} command="⌘O">
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>
      <Box h="auto" display={["inline-block", "inline-block", "none"]} p="0">
        <IconButton
          bg="inherit"
          onClick={() => dispatch(openMenu())}
          icon={menu.isOpen ? <GrFormClose /> : <GiHamburgerMenu />}
        />
      </Box>
    </>
  );
};

export default DropdownMenu;
