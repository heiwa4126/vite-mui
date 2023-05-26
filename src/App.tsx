import { Route, Routes } from "react-router-dom";
import App1 from "./compornents/App1";
import Ex1 from "./compornents/Ex1";
import Nav from "./compornents/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<App1 />} />
          <Route path="ex1" element={<Ex1 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
