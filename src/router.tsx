import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { PostpagoPage } from "./pages/PostpagoPage";
import { FullClaroPage } from "./pages/FullClaroPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/moviles/postpago",
    element: <PostpagoPage />,
  },
  {
    path: "full-claro",
    element: <FullClaroPage />,
  },
]);
