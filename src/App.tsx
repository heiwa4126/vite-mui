import { Route, Routes } from "react-router-dom";
import App1 from "./compornents/App1";
import Ex1 from "./compornents/Ex1";
import Types from "./compornents/Types";

import Nav from "./compornents/Nav";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg">
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<App1 />} />
          <Route path="ex1" element={<Ex1 />} />
          <Route path="types" element={<Types />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
