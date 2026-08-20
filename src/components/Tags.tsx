import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

export type TOA = Omit<TypographyProps, "component">;
export type TO<T extends React.ElementType> = Omit<TypographyProps<T>, "component">;

/* eslint-disable-next-line */
export function H1({ children, ...props }: TO<"h1">) {
	return (
		<Typography variant="h3" sx={{ fontWeight: 900 }} {...props}>
			{children}
		</Typography>
	);
}

/* eslint-disable-next-line */
export function H2({ children, ...props }: TO<"h2">) {
	return (
		<Typography variant="h4" sx={{ fontWeight: 700 }} {...props}>
			{children}
		</Typography>
	);
}

/* eslint-disable-next-line */
export function P({ children, ...props }: TO<"p">) {
	return (
		<Typography variant="body1" {...props}>
			{children}
		</Typography>
	);
}

/* eslint-disable-next-line */
export function P2({ children, ...props }: TO<"p">) {
	return (
		<Typography variant="body2" {...props}>
			{children}
		</Typography>
	);
}

/* eslint-disable-next-line */
export function N({ children }: { children: ReactNode }) {
	return <span style={{ letterSpacing: -5 }}>{children}</span>;
}

/* eslint-disable-next-line */
export function S({ children }: { children: ReactNode }) {
	return <span style={{ fontSize: "85%" }}>{children}</span>;
}
