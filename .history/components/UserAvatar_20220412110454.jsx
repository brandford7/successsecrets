import { Avatar } from "@chakra-ui/react";
import React from "react";

const UserAvatar = ({ name,image }) => {
  return (
    <>
      <Avatar size='md' name={name} src={image} /> 
    </>
  );
};

export default UserAvatar;
