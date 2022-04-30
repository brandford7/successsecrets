import { Avatar,Menu,MenuButton } from "@chakra-ui/react";
import React from "react";

const UserAvatar = ({ name,image }) => {
  return (
    <>
      <Avatar size="sm" name={name} src={image} />
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={< Avatar size="sm" name={name} src={image}  />}
          variant="outline"
        />
        <MenuList>
          <MenuItem icon={<AddIcon />} command="⌘T">
            Admin
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
    </>
  );
};

export default UserAvatar;
