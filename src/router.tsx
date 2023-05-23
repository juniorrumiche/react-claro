import { createBrowserRouter } from "react-router-dom";
import { PostpagoPage } from "./pages/PostpagoPage";
import { FullClaroPage } from "./pages/FullClaroPage";
import { PlanesNetflixPage } from "./pages/PlanesNetflixPage";
import { PromocionesClaroPage } from "./pages/PromocionesClaroPage";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/404";
import { DashboardPage } from "./pages/admin/DashboardPage";

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
    path: "/full-claro",
    element: <FullClaroPage />,
  },
  {
    path: "/planes/netflix",
    element: <PlanesNetflixPage />,
  },

  {
    path: "/promociones",
    element: <PromocionesClaroPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <DashboardPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
