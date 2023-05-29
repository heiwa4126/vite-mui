import { Box, Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

export type TOA = Omit<TypographyProps, "component">;
export type TO<T extends React.ElementType> = Omit<TypographyProps<T>, "component">;

export function H1({ children, ...props }: TO<"h1">) {
  return (
    <Typography component="h1" variant="h3" fontWeight={900} {...props}>
      {children}
    </Typography>
  );
}

export function H2({ children, ...props }: TO<"h2">) {
  return (
    <Typography component="h2" variant="h4" fontWeight={700} {...props}>
      {children}
    </Typography>
  );
}

export function P({ children, ...props }: TO<"p">) {
  return (
    <Typography component="p" variant="body1" {...props}>
      {children}
    </Typography>
  );
}

export function P2({ children, ...props }: TO<"p">) {
  return (
    <Typography component="p" variant="body2" {...props}>
      {children}
    </Typography>
  );
}

export function N({ children }: { children: ReactNode }) {
  return (
    <Box component="span" sx={{ letterSpacing: -5 }}>
      {children}
    </Box>
  );
}

export function S({ children }: { children: ReactNode }) {
  return (
    <Box component="span" sx={{ fontSize: "85%" }}>
      {children}
    </Box>
  );
}
