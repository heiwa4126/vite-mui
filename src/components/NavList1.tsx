import NavList from "./NavLList";
import { Drawer } from "@mui/material";

function NavList1() {
  const anchor = "right";
  return (
    <Drawer anchor={anchor} open={true}>
      <NavList />
    </Drawer>
  );
}

export default NavList1;
