import { Avatar, Menu, MenuButton, MenuItem, MenuList,IconButton } from "@chakra-ui/react";
import React from "react";
import { signOut } from "next-auth/react";

const UserAvatar = ({ name, image }) => {
  return (
    <>
      <Avatar size="sm" name={name} src={image} />
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<Avatar size="sm" name={name} src={image} />}
          variant="outline"
        />
        <MenuList>
          <MenuItem>Admin</MenuItem>
          <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserAvatar;
