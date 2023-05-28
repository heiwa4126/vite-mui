import { Box, Link, SxProps, Theme, Select, Button, MenuItem, InputLabel, FormControl } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import Grid from "@mui/material/Unstable_Grid2";
import { ReactNode } from "react";
import { H1, H2, N, P, S } from "./Common";

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
      <H1>
        Grid<S> & </S>Flex
        <br />
        <N>
          グリッド<S>と</S>フレックス
        </N>
      </H1>
      <P gutterBottom>
        from <Link href="https://mui.com/material-ui/react-grid2/">Grid version 2 - Material UI</Link>
      </P>
      <H2 gutterBottom mt={3}>
        Fluid grids
      </H2>
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
      <H2 gutterBottom mt={4}>
        Flex layout
      </H2>
      <Box display="flex" alignItems="center" sx={sxGrid}>
        <Item>item</Item>
        <Item>item</Item>
      </Box>

      <H2 gutterBottom mt={4}>
        Flex box and selector
      </H2>
      <FormControl fullWidth>
        <Box display="flex">
          <InputLabel id="select1">Select one:</InputLabel>
          <Select sx={{ flexGrow: 1 }} value={1} id="select1" label="Select one:" size="small">
            <MenuItem value={1} key={1} divider sx={{ color: "warning.main" }}>
              MenuItem 1
            </MenuItem>
            <MenuItem value={2} key={2} divider>
              MenuItem 2
            </MenuItem>
            <MenuItem value={3} key={3} divider>
              MenuItem 3
            </MenuItem>
          </Select>
          <Button variant="outlined" size="small" startIcon={<ReplayIcon />}>
            Button
          </Button>
        </Box>
      </FormControl>
    </>
  );
}

export default GridFlex;
