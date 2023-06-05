import { Divider, Link, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
function NavList() {
  return (
    <List component="nav">
      <Link href="/">
        <ListItem>
          <ListItemIcon>
            <HouseOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="home" />
        </ListItem>
      </Link>
      <Divider />

      <Link href="/types">
        <ListItem>
          <ListItemIcon>
            <InsertEmoticonIcon />
          </ListItemIcon>
          <ListItemText primary="types" />
        </ListItem>
      </Link>
      <Divider />

      <Link href="/gridflex">
        <ListItem>
          <ListItemIcon>
            <InsertEmoticonIcon />
          </ListItemIcon>
          <ListItemText primary="grid & flex" />
        </ListItem>
      </Link>
      <Divider />

      <Link href="/emotion1">
        <ListItem>
          <ListItemIcon>
            <InsertEmoticonIcon />
          </ListItemIcon>
          <ListItemText primary="emotion1" />
        </ListItem>
      </Link>
      <Divider />

      <Link href="/ex1">
        <ListItem>
          <ListItemIcon>
            <InsertEmoticonIcon />
          </ListItemIcon>
          <ListItemText primary="ex1" />
        </ListItem>
      </Link>
      <Divider />

      <Link href="/nav">
        <ListItem>
          <ListItemIcon>
            <InsertEmoticonIcon />
          </ListItemIcon>
          <ListItemText primary="nav" />
        </ListItem>
      </Link>
      <Divider />

      <Link href="/navlist">
        <ListItem>
          <ListItemIcon>
            <InsertEmoticonIcon />
          </ListItemIcon>
          <ListItemText primary="navlist" />
        </ListItem>
      </Link>
      <Divider />
    </List>
  );
}

export default NavList;
