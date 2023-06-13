import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoutes } from "./components/PrivateRoutes";
import { DashboardPage } from "./pages/admin/DashboardPage";
import {
  FULL_CLARO_PATH,
  HOME_PATH,
  LOGIN_PATH,
  MOVILES_LISTA_PATH,
  PLANES_NETFLIX_PATH,
  PLAY1_PATH,
  PLAY2_AVANZADO_PATH,
  PLAY2_PATH,
  PLAY2_SUPERIOR_PATH,
  PLAY3_AVANZADO_PATH,
  PLAY3_SUPERIOR_PATH,
  PROMOCIONES_PATH,
  WEB_DATA_PATH,
} from "./config/config";
import { PublicRoutes } from "./components/PublicRoutes";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/404";
import { FullClaroPage } from "./pages/FullClaroPage";
import { PlanesNetflixPage } from "./pages/PlanesNetflixPage";
import { PostpagoPage } from "./pages/PostpagoPage";
import { PromocionesClaroPage } from "./pages/PromocionesClaroPage";
import { Play1Page } from "./pages/Play1Page";
import { DatosClientePage } from "./pages/admin/DatosClientesPage";
import { Play2Page } from "./pages/Play2Page";
import { Play2AdvancePage } from "./pages/Play2AdvancePage";
import { Play2SuperPage } from "./pages/Play2SuperPage";
import { Play3AdvancePage } from "./pages/Play3Advance";
import { Play3SuperPage } from "./pages/Play3SuperPage";
import { DashboardEquiposPage } from "./pages/admin/DashboardEquiposPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<PublicRoutes />}>
              <Route path={HOME_PATH} element={<HomePage />} />
              <Route path={PLAY2_PATH} element={<Play2Page />} />
              <Route
                path={PLAY2_AVANZADO_PATH}
                element={<Play2AdvancePage />}
              />
              <Route path={PLAY2_SUPERIOR_PATH} element={<Play2SuperPage />} />
              <Route
                path={PLAY3_AVANZADO_PATH}
                element={<Play3AdvancePage />}
              />
              <Route path={PLAY3_SUPERIOR_PATH} element={<Play3SuperPage />} />
              <Route path={LOGIN_PATH} element={<LoginPage />} />
              <Route path={FULL_CLARO_PATH} element={<FullClaroPage />} />
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
            <Route path={WEB_DATA_PATH} element={<DatosClientePage />} />
            <Route path="equipos" element={<DashboardEquiposPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
