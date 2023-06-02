import { Divider, Link, Stack, SxProps, Theme } from "@mui/material";
const sx1: SxProps<Theme> = { color: "inherit", underline: "none" };

function D1() {
  return <Divider orientation="vertical" color="primary.contrastText" flexItem />;
}

function Nav() {
  return (
    <Stack direction="row" spacing={1} component="nav">
      <Link sx={sx1} href="/">
        home
      </Link>
      <D1 />
      <Link sx={sx1} href="/types">
        types
      </Link>
      <D1 />
      <Link sx={sx1} href="/gridflex">
        grid & flex
      </Link>
      <D1 />
      <Link sx={sx1} href="/emotion1">
        emotion1
      </Link>
      <D1 />
      <Link sx={sx1} href="/ex1">
        ex1
      </Link>
    </Stack>
  );
}

export default Nav;