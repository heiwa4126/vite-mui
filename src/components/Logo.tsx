import { Typography, Link, Box } from "@mui/material";
import { TO } from "./Tags";
import DummyLogo from "../assets/logoipsum-286w.svg";

export function Logo({ ...props }: TO<"h6">) {
  return (
    <Typography component="h6" variant="h4" {...props}>
      <Link href="/">
        <Box component="img" src={DummyLogo} alt="A dummy logo" height={28} />
      </Link>
    </Typography>
  );
}
