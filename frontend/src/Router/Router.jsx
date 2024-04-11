import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Kitabi from "../Pages/Kitabi";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/kitabi-keeda",
        element: <Kitabi />,
      },
    ],
  },
]);

export default router;
