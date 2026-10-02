import { Divider, Link, Stack, SxProps, Theme } from "@mui/material";

import { Fragment } from "react";
import pages, { page } from "../pages";

const sx1: SxProps<Theme> = { color: "inherit", underline: "none" };

function D1() {
  return <Divider orientation="vertical" color="primary.contrastText" flexItem />;
}

function perPage(page: page, idx: number) {
  return (
    <Fragment key={idx}>
      <Link sx={sx1} href={page.url}>
        {page.label}
      </Link>
      {idx >= pages.length - 1 ? undefined : <D1 />}
    </Fragment>
  );
}

function Nav() {
  return (
    <Stack direction="row" spacing={1} component="nav">
      {pages.map(perPage)}
    </Stack>
  );
}

export default Nav;
