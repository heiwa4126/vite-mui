import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Stack direction="row" spacing={0.8}>
        <Link to="/">Home</Link>
        <Link to="/ex1">ex1</Link>
        <Link to="/types">types</Link>
        <Link to="/emotion1">emotion1</Link>
      </Stack>
    </nav>
  );
}

export default Nav;
