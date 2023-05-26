import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Stack direction="row" spacing={0.8}>
        <Link to="/">Home</Link>
        <Link to="/ex1">Ex1</Link>
        <Link to="/types">Types</Link>
      </Stack>
    </nav>
  );
}

export default Nav;
