import { Divider, Icon, Link, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import pages from "../pages";

function NavList() {
  return (
    <List component="nav">
      {pages.map((item, idx) => {
        return (
          <>
            <Link href={item.url}>
              <ListItem key={idx}>
                <ListItemIcon sx={{ minWidth: 0, pr: 2 }}>{item.icon ?? <Icon />}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
            <Divider />
          </>
        );
      })}
    </List>
  );
}

export default NavList;
