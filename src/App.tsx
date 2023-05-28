import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import App1 from "./compornents/App1";
import Emotion1 from "./compornents/Emotion1";
import Ex1 from "./compornents/Ex1";
import Nav from "./compornents/Nav";
import Types from "./compornents/Types";

function App() {
  return (
    <Container maxWidth="xl">
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<App1 />} />
          <Route path="ex1" element={<Ex1 />} />
          <Route path="types" element={<Types />} />
          <Route path="emotion1" element={<Emotion1 />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
