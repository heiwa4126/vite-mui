import { Divider, Link, Stack, SxProps, Theme } from "@mui/material";
const sx1: SxProps<Theme> = { color: "inherit", underline: "none" };

function D1() {
  return <Divider orientation="vertical" color="primary.contrastText" flexItem />;
}
function Nav() {
  return (
    <nav>
      <Stack direction="row" spacing={1}>
        <Link sx={sx1} href="/">
          home
        </Link>
        <D1 />
        <Link sx={sx1} href="/ex1">
          ex1
        </Link>
        <D1 />
        <Link sx={sx1} href="/types">
          types
        </Link>
        <D1 />
        <Link sx={sx1}>emotion1</Link>
        <D1 />
        <Link sx={sx1} href="/gridflex">
          grid & flex
        </Link>
      </Stack>
    </nav>
  );
}

export default Nav;
