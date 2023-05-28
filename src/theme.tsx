import { LinkProps } from "@mui/material/Link";
import red from "@mui/material/colors/red";
import { createTheme } from "@mui/material/styles";
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
    fontFamily: ["Roboto", '"Noto Sans JP"', "Helvetica", "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
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
});

export default theme;