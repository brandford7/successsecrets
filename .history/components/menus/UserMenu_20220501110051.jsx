import {
  
  Menu,
  MenuButton,
  MenuItem,
  MenuList,IconButton
  
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
        <MenuButton
         
            <UserAvatar name={session?.username} image={session?.user.image} />
          }
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
