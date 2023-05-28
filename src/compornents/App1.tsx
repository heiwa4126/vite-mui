import PlusOneIcon from "@mui/icons-material/PlusOne";
import ThumbUp from "@mui/icons-material/ThumbUp";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import "./App1.css";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

function App1() {
  const [count, setCount] = useState(0);

  return (
    <div className="App1">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript + MUI 5</h1>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <div className="card">
        <Button variant="outlined" endIcon={<PlusOneIcon />} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Button variant="outlined" startIcon={<ThumbUp />}>
        いいね!
      </Button>
      <Typography>Almost before we knew it, we had left the ground.</Typography>
      <Typography>人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利を承認することは</Typography>
    </div>
  );
}

export default App1;