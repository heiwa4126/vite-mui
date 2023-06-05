import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Container, CssBaseline, Drawer, IconButton, Toolbar } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Route, Routes } from "react-router-dom";
import App1 from "./components/App1";
import Emotion1 from "./components/Emotion1";
import Ex1 from "./components/Ex1";
import GridFlex from "./components/GridFlex";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import NavList from "./components/NavLList";
import Types from "./components/Types";
import useNav from "./states/navState";
import theme from "./theme";

function NavButton() {
  const { setOpen } = useNav();
  return (
    <IconButton
      size="small"
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={() => {
        setOpen(true);
      }}
    >
      <MenuIcon />
    </IconButton>
  );
}

function NavList1() {
  const { isOpen, setOpen } = useNav();
  const anchor = "right";
  return (
    <Drawer
      anchor={anchor}
      open={isOpen}
      onClick={() => {
        setOpen(false);
      }}
      transitionDuration={100}
    >
      <NavList />
    </Drawer>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* ----------------------- */}
      <AppBar>
        <Container maxWidth="lg">
          <NavList1 />
          <Toolbar disableGutters variant="dense">
            <Logo mt={0.8} sx={{ flexGrow: 1 }} />
            <NavButton />
          </Toolbar>
        </Container>
      </AppBar>
      {/* ----------------------- */}
      <Container maxWidth="lg" id="back-to-top-anchor">
        <Box pt={7.5} pb={1} component="main">
          <Routes>
            <Route path="/">
              <Route index element={<App1 />} />
              <Route path="types" element={<Types />} />
              <Route path="emotion1" element={<Emotion1 />} />
              <Route path="gridflex" element={<GridFlex />} />
              <Route path="ex1" element={<Ex1 />} />
              <Route path="nav" element={<Nav />} />
              <Route path="navlist" element={<NavList />} />
            </Route>
          </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
