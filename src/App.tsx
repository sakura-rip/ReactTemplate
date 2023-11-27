import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";

import theme from "@/theme.tsx";
import {HeroPage} from "@/pages/Hero.tsx";
import {NotFound} from "@/pages/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <HeroPage></HeroPage>
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
