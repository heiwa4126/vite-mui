import { Button, Stack } from "@mui/material";
// import { Link } from "react-router-dom";
import { Link } from "@mui/material";

function Nav() {
  return (
    <nav>
      <Stack direction="row" spacing={0.8}>
        <Button href="/">Home</Button>
        <Button href="/ex1">ex1</Button>
        <Button href="/types">types</Button>
        <Button href="/emotion1">emotion1</Button>
      </Stack>
    </nav>
  );
}

export default Nav;
