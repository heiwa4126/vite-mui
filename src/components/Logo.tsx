import { Link, Typography } from "@mui/material";
import DummyLogo from "../assets/logoipsum-286w.svg";
import { TO } from "./Tags";

export function Logo({ ...props }: TO<"h6">) {
	return (
		<Typography component="h6" variant="h4" {...props}>
			<Link href="/">
				<img src={DummyLogo} alt="A dummy logo" height={28} />
			</Link>
		</Typography>
	);
}

export default Logo;
