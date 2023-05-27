import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoutes } from "./components/PrivateRoutes";
import { DashboardPage } from "./pages/admin/DashboardPage";
import {
  FULL_CLARO_PATH,
  HOME_PATH,
  LANDING_DATA_PATH,
  LOGIN_PATH,
  MOVILES_LISTA_PATH,
  PLANES_NETFLIX_PATH,
  PLAY1_PATH,
  POSTPAGO_CLARO_PATH,
  PROMOCIONES_PATH,
  WEB_DATA_PATH,
} from "./config/config";
import { PublicRoutes } from "./components/PublicRoutes";
import { LoginPage } from "./pages/LoginPage";
import { DatosLandingPage } from "./pages/admin/DatosLanding";
import { DatosWeb } from "./pages/admin/DatosWeb";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/404";
import { FullClaroPage } from "./pages/FullClaroPage";
import { PlanesNetflixPage } from "./pages/PlanesNetflixPage";
import { PostpagoPage } from "./pages/PostpagoPage";
import { PromocionesClaroPage } from "./pages/PromocionesClaroPage";
import { Play1Page } from "./pages/Play1Page";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<PublicRoutes />}>
              <Route path={HOME_PATH} element={<HomePage />} />
              <Route path={LOGIN_PATH} element={<LoginPage />} />
              <Route path={FULL_CLARO_PATH} element={<FullClaroPage />} />
              <Route path={POSTPAGO_CLARO_PATH} element={<PostpagoPage />} />
              <Route path={PLAY1_PATH} element={<Play1Page />} />
              <Route
                path={MOVILES_LISTA_PATH + "/:marca"}
                element={<PostpagoPage />}
              />
              <Route
                path={PROMOCIONES_PATH}
                element={<PromocionesClaroPage />}
              />
              <Route
                path={PLANES_NETFLIX_PATH}
                element={<PlanesNetflixPage />}
              />
            </Route>
          </Route>

          <Route path="/admin" element={<PrivateRoutes />}>
            <Route index element={<DashboardPage />}></Route>
            <Route path={LANDING_DATA_PATH} element={<DatosLandingPage />} />
            <Route path={WEB_DATA_PATH} element={<DatosWeb />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
