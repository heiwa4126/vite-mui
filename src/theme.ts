import red from "@mui/material/colors/red";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", '"Noto Sans JP"', "Helvetica", "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
