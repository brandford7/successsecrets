import {
  
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import UserAvatar from "../avatars/UserAvatar"

const UserMenu = ({name}) => {
  return (
    <>
      
      <Menu>
        <MenuButton
          aria-label="Options"
          icon={<UserAvatar  />}
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

export default UserMenu;
