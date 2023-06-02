import ReplayIcon from "@mui/icons-material/Replay";
import { Box, Button, FormControl, InputLabel, Link, MenuItem, Select, SxProps, Theme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { H1, H2, N, P, S, TO } from "./Tags";

const sxGrid: SxProps<Theme> = {
  borderRadius: 1,
  backgroundColor: "lightgrey",
};

function Item({ children, ...props }: TO<"div">) {
  return (
    <Box border={1} borderRadius={1} bgcolor="background.default" px={1} py={0.5} {...props}>
      {children}
    </Box>
  );
}

function BasicGrid() {
  return (
    <Box flexGrow={1} p={1} sx={sxGrid}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
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
        from <Link href="https://mui.com/material-ui/react-grid/">React Grid component - Material UI</Link>
      </P>
      <H2 gutterBottom mt={3}>
        Basic Grid
      </H2>
      <BasicGrid />
      <H2 gutterBottom mt={4}>
        Flex layout
      </H2>
      <Box display="flex" alignItems="center" p={1} sx={sxGrid}>
        <Item>item</Item>
        <Item flexGrow={1}>item</Item>
        <Item flexGrow={2}>item</Item>
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
