import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "@/router.tsx";
import { HelmetProvider } from "react-helmet-async";
import { createCustomTheme } from "@/theme";

function App() {
  const theme = createCustomTheme();
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
