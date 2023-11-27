import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "@/theme.tsx";

const router = createBrowserRouter([]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
