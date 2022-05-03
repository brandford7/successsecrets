import {
  
  Menu,
  MenuButton,
  MenuItem,
  MenuList, Link
  
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import UserAvatar from "../avatars/UserAvatar"

const UserMenu = () => {

  const { data: session } = useSession()
   console.log(session);

  return (
    <>
      <Menu isLazy>
        <MenuButton variant="outline" aria-label="user Options">
          gello
        </MenuButton>

        <MenuList>
          <MenuItem as={Link} href="/admin">
            Admin
          </MenuItem>
          <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserMenu;
