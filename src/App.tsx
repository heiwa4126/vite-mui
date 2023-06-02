import { CssBaseline, Container, AppBar, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import App1 from "./components/App1";
import Types from "./components/Types";
import theme from "./theme";
import Nav from "./components/Nav";
import GridFlex from "./components/GridFlex";
import Emotion1 from "./components/Emotion1";
import Ex1 from "./components/Ex1";
import { Logo } from "./components/Logo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box id="back-to-top-anchor">
        {/* ----------------------- */}
        <AppBar>
          <Container maxWidth="lg">
            <Logo sx={{ flexGrow: 1, ml: 0.8, mt: 0.3 }} />
          </Container>
        </AppBar>
        {/* ----------------------- */}
        <Container maxWidth="lg">
          <Box pt={6} pb={1}>
            <Nav />
            <Routes>
              <Route path="/">
                <Route index element={<App1 />} />
                <Route path="types" element={<Types />} />
                <Route path="emotion1" element={<Emotion1 />} />
                <Route path="gridflex" element={<GridFlex />} />
                <Route path="ex1" element={<Ex1 />} />
              </Route>
            </Routes>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
