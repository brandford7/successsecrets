import { Avatar,Menu,MenuButton,MenuItem } from "@chakra-ui/react";
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
          <MenuItem >
            Admin
          </MenuItem>
          <MenuItem >
            SiG
          </MenuItem>
         
        </MenuList>
      </Menu>
    </>
  );
};

export default UserAvatar;
