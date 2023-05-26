import "@fontsource/noto-sans-jp/300.css";
import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/500.css";
import "@fontsource/noto-sans-jp/700.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

function AppMUI() {
  const apptheme = createTheme({
    typography: {
      fontFamily: ["Roboto", '"Noto Sans JP"', "Helvetica", "Arial", "sans-serif"].join(","),
    },
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={apptheme}>
        <App />
      </ThemeProvider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppMUI />
    </Router>
  </React.StrictMode>
);
