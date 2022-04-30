<Menu>
  <MenuButton
    aria-label="Options"
    icon={<Avatar size="sm" name={name} src={image} />}
    variant="outline"
  />
  <MenuList>
    <MenuItem>Admin</MenuItem>
    <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
  </MenuList>
</Menu>;
