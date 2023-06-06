import { LinkProps } from "@mui/material/Link";
import createTheme from "@mui/material/styles/createTheme";
import React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

const LinkBehavior = React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }>(
  (props, ref) => {
    const { href, ...other } = props;
    // Map href (Material UI) -> to (react-router)
    return <RouterLink ref={ref} to={href} {...other} />;
  }
);

const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans JP"', "Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  palette: {
    // mode: "dark",
    // <https://zenoo.github.io/mui-theme-creator/>
    primary: {
      main: "#1f791f",
    },
    secondary: {
      main: "#e00404",
    },
    error: {
      main: "#f47336",
    },
  },
});

export default theme;
