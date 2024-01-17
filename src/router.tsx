import { createBrowserRouter } from "react-router-dom";
import TopPage from "@/pages/TopPage.tsx";
import { DefaultLayout } from "@/layouts/DefaultLayout.tsx";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <TopPage />,
      },
    ],
  },
]);
export default router;
