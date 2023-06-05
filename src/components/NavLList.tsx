import { Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Fragment } from "react";
import pages, { page } from "../pages";

function perPage(page: page, idx: number) {
  return (
    <Fragment key={idx}>
      <ListItem disablePadding>
        <ListItemButton href={page.url} sx={{ p: 2 }}>
          <ListItemIcon sx={{ minWidth: 0, pr: 2 }}>{page.icon ?? <Icon />}</ListItemIcon>
          <ListItemText primary={page.label} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </Fragment>
  );
}

function NavList() {
  return (
    <List component="nav" disablePadding>
      {pages.map(perPage)}
    </List>
  );
}

export default NavList;
