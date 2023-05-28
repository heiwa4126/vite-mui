import { Stack } from "@mui/material";
// import { Link } from "react-router-dom";
import { Link } from "@mui/material";

function Nav() {
  return (
    <nav>
      <Stack direction="row" spacing={0.8}>
        <Link href="/">Home</Link>
        <Link href="/ex1">ex1</Link>
        <Link href="/types">types</Link>
        <Link href="/emotion1">emotion1</Link>
      </Stack>
    </nav>
  );
}

export default Nav;
