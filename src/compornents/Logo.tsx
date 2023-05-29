import { Typography, Link } from "@mui/material";
import { TO } from "./Tags";

export function Logo({ ...props }: TO<"h6">) {
  return (
    <Typography component="h6" variant="h4" fontWeight={500} {...props}>
      <Link
        href="/"
        sx={{
          color: "inherit",
          underline: "none",
          "&:hover": {
            textDecoration: "none",
          },
        }}
      >
        LOGO
      </Link>
    </Typography>
  );
}
