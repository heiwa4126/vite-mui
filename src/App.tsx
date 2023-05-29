import { AppBar, Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import App1 from "./compornents/App1";
import Emotion1 from "./compornents/Emotion1";
import Ex1 from "./compornents/Ex1";
import Nav from "./compornents/Nav";
import Types from "./compornents/Types";
import GridFlex from "./compornents/GridFlex";
import { Logo } from "./compornents/Logo";

function App() {
  return (
    <>
      <AppBar>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center" py={0.8}>
            <Logo sx={{ flexGrow: 1 }} />
            <Nav />
          </Box>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <Box mt={7.5}>
          <Routes>
            <Route path="/">
              <Route index element={<App1 />} />
              <Route path="ex1" element={<Ex1 />} />
              <Route path="types" element={<Types />} />
              <Route path="emotion1" element={<Emotion1 />} />
              <Route path="gridflex" element={<GridFlex />} />
            </Route>
          </Routes>
        </Box>
      </Container>
    </>
  );
}

export default App;
