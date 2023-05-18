import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { PostpagoPage } from "./pages/PostpagoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
      path: '/moviles/postpago',
      element: <PostpagoPage/>
    }
]);
