import { Avatar} from "@chakra-ui/react";


const UserAvatar = ({ name, image }) => {
  return (
    <>
      <Avatar size="sm" name={name} src={image} />
     
    </>
  );
};

export default UserAvatar;
