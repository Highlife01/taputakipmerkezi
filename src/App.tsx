import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProviders, AppRoutes, type PageMap } from "./routes";

/**
 * İstemci girişi: sayfalar React.lazy ile kod bölünür (route-level splitting).
 * Sunucu tarafında aynı rota tablosu statik import ile kullanılır
 * (bkz. src/entry-server.tsx); React 18 hidrasyon sırasında sunucu HTML'ini
 * korur ve lazy chunk'lar gelince ilgili ağacı hidrate eder.
 */
const pages: PageMap = {
  Index: lazy(() => import("./pages/Index")),
  NotFound: lazy(() => import("./pages/NotFound")),
  AllServices: lazy(() => import("./pages/AllServices")),
  TapuServiceInfo: lazy(() => import("./pages/TapuServiceInfo")),
  VerasetIntikal: lazy(() => import("./pages/VerasetIntikal")),
  IcraTakip: lazy(() => import("./pages/IcraTakip")),
  ServicePage: lazy(() => import("./pages/ServicePage")),
  GuidePage: lazy(() => import("./pages/GuidePage")),
  CityPage: lazy(() => import("./pages/CityPage")),
  KVKK: lazy(() => import("./pages/KVKK")),
  TermsOfService: lazy(() => import("./pages/TermsOfService")),
};

const App = () => (
  <BrowserRouter>
    <AppProviders>
      <Suspense fallback={null}>
        <AppRoutes pages={pages} />
      </Suspense>
    </AppProviders>
  </BrowserRouter>
);

export default App;
