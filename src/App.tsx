import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Container, CssBaseline, Drawer, IconButton, Toolbar } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import NavList from "./components/NavLList";
import pages from "./pages";
import useNav from "./states/navState";
import theme from "./theme";
import ScrollTop from "./components/ScrollTop";

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
        <ScrollTop />
        <Box pt={7.5} pb={1} component="main">
          <Routes>
            <Route path="/">
              {pages.map((page, idx) => {
                return <Route key={idx} path={page.url} element={page.component} />;
              })}
            </Route>
          </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
