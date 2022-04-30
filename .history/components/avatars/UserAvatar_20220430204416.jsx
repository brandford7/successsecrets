import { Avatar, Menu, MenuButton, MenuItem, MenuList,IconButton } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

const UserAvatar = ({ name, image }) => {
  return (
    <>
      <Avatar size="sm" name={name} src={image} />
     
    </>
  );
};

export default UserAvatar;
