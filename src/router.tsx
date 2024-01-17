import { createBrowserRouter } from "react-router-dom";
import TopPage from "@/pages/TopPage.tsx";

const router = createBrowserRouter([
  {
    index: true,
    element: <TopPage />,
  },
]);
export default router;
