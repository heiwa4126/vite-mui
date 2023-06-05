import { AppBar, Box, Container, CssBaseline, IconButton, Toolbar } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Route, Routes } from "react-router-dom";
import App1 from "./components/App1";
import Emotion1 from "./components/Emotion1";
import Ex1 from "./components/Ex1";
import GridFlex from "./components/GridFlex";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Types from "./components/Types";
import theme from "./theme";
import MenuIcon from "@mui/icons-material/Menu";
import NavList1 from "./components/NavList1";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* ----------------------- */}
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters variant="dense">
            <Logo mt={0.8} sx={{ flexGrow: 1 }} />
            <IconButton size="small" edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      {/* ----------------------- */}
      <Container maxWidth="lg" id="back-to-top-anchor">
        <Box pt={6} pb={1} component="main">
          <Nav />
          <Routes>
            <Route path="/">
              <Route index element={<App1 />} />
              <Route path="types" element={<Types />} />
              <Route path="emotion1" element={<Emotion1 />} />
              <Route path="gridflex" element={<GridFlex />} />
              <Route path="ex1" element={<Ex1 />} />
              <Route path="navlist1" element={<NavList1 />} />
            </Route>
          </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
