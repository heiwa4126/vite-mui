import { Box } from "@mui/material";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { ReactNode } from "react";

export function H1({ children, ...props }: Omit<TypographyProps<"h1">, "component">) {
  return (
    <Typography component="h1" variant="h3" fontWeight={900} {...props}>
      {children}
    </Typography>
  );
}

export function H2({ children, ...props }: Omit<TypographyProps<"h2">, "component">) {
  return (
    <Typography component="h2" variant="h4" fontWeight={700} {...props}>
      {children}
    </Typography>
  );
}
export function P({ children, ...props }: Omit<TypographyProps<"p">, "component">) {
  return (
    <Typography component="p" variant="body1" {...props}>
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
