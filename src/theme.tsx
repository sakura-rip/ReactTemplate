import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans JP, sans-serif",
  },
  palette: {
    primary: {
      main: "#2144FF",
    },
    background: { default: "#F8FAFC", paper: "#fff" },
  },
});

export default theme;
