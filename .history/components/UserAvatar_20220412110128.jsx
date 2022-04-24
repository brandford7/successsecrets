import { Avatar } from "@chakra-ui/react";
import React from "react";

const UserAvatar = ({ name,image }) => {
  return (
    <>
      <Avatar name={name} src={image} /> 
    </>
  );
};

export default Avatar;
