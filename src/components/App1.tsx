import { Box, Button, Link, SxProps, Theme, Typography } from "@mui/material";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const sxLogo: SxProps<Theme> = {
  height: "10em",
  padding: "1.5em",
  marginTop: "3em",
  willChange: "filter",
  transition: "filter 300ms",
};

const sxVite: SxProps<Theme> = {
  ...sxLogo,
  "&:hover": {
    filter: "drop-shadow(0 0 2em #646cffaa)",
  },
};

const sxReact: SxProps<Theme> = {
  ...sxLogo,
  "&:hover": {
    filter: "drop-shadow(0 0 2em #61dafbaa)",
    animation: "logo-spin infinite 20s linear",
    "@keyframes logo-spin": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
  },
};

function App1() {
  const [count, setCount] = useState(0);

  return (
    <Box textAlign="center">
      <Box>
        <Link href="https://vitejs.dev" target="_blank">
          <Box component="img" src={viteLogo} sx={sxVite} alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <Box component="img" src={reactLogo} sx={sxReact} alt="React logo" />
        </Link>
      </Box>
      <Typography component="h1" variant="h3" fontWeight={700}>
        Vite + React + TypeScript + MUI 5
      </Typography>
      <Box p="2em">
        <Button variant="outlined" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Typography>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </Box>
      <Typography className="read-the-docs">Click on the Vite and React logos to learn more</Typography>
    </Box>
  );
}

export default App1;
