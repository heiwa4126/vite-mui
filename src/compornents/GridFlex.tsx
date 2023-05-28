import { Box, Link, SxProps, Theme, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ReactNode } from "react";

const sxItem: SxProps<Theme> = {
  border: 1,
  borderRadius: 1,
  py: 0.5,
  px: 1,
  backgroundColor: "white",
};
const sxGrid: SxProps<Theme> = {
  borderRadius: 1,
  backgroundColor: "lightgrey",
};

function Item({ children }: { children: ReactNode }) {
  return <Box sx={sxItem}>{children}</Box>;
}

function GridFlex() {
  return (
    <>
      <Typography variant="h1">Grid & Flex</Typography>
      <Typography variant="body1" gutterBottom mb={3}>
        from <Link href="https://mui.com/material-ui/react-grid2/">Grid version 2 - Material UI</Link>
      </Typography>
      <Grid container spacing={2} sx={sxGrid}>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </>
  );
}

export default GridFlex;
