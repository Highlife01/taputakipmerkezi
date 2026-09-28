import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InstallPWA from "./components/InstallPWA";
import ServicePage from "./pages/ServicePage";
import GuidePage from "./pages/GuidePage";
import CityPage from "./pages/CityPage";

import AllServices from "./pages/AllServices";
import KVKK from "./pages/KVKK";
import TermsOfService from "./pages/TermsOfService";
import TapuServiceInfo from "./pages/TapuServiceInfo";
import VerasetIntikal from "./pages/VerasetIntikal";
import IcraTakip from "./pages/IcraTakip";

import SchemaData from "./components/SchemaData";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <InstallPWA />
        <SchemaData
          type="Organization"
          data={{
            name: "Tapu Takip Merkezi",
            url: "https://www.taputakipmerkezi.com.tr",
            logo: "https://www.taputakipmerkezi.com.tr/favicon.png",
            description: "81 ilde profesyonel tapu, vergi ve miras işlemleri takibi. Resmi danışmanlık ve süreç yönetimi.",
            contactPoint: {
              "@type": "ContactPoint",
              "telephone": "+90-532-055-09-45",
              "contactType": "customer service",
              "areaServed": "TR",
              "availableLanguage": "Turkish"
            }
          }}
        />
        <SchemaData
          type="WebSite"
          data={{
            name: "Tapu Takip Merkezi",
            url: "https://www.taputakipmerkezi.com.tr",
            inLanguage: "tr-TR",
            publisher: {
              "@type": "Organization",
              name: "Tapu Takip Merkezi",
              url: "https://www.taputakipmerkezi.com.tr",
              logo: "https://www.taputakipmerkezi.com.tr/favicon.png"
            }
          }}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* /404 için açık rota: :slug catch-all'una düşüp sonsuz yönlendirme döngüsü oluşturmasını engeller */}
            <Route path="/404" element={<NotFound />} />
            <Route path="/hizmetler" element={<AllServices />} />
            <Route path="/tapu-islemleri" element={<AllServices />} />
            <Route path="/tapu-sureci" element={<TapuServiceInfo />} />
            <Route path="/veraset-intikal" element={<VerasetIntikal />} />
            <Route path="/icra-islemleri" element={<IcraTakip />} />
            <Route path="/tapu-takip/:il" element={<CityPage />} />
            <Route path="/tapu-takip/:il/:ilce" element={<CityPage />} />
            <Route path="/tapu-islemleri/:service" element={<ServicePage />} />
            <Route path="/tapu-islemleri/:service/:il" element={<ServicePage />} />
            <Route path="/tapu-rehberi/:slug" element={<GuidePage />} />
            <Route path="/kvkk" element={<KVKK />} />
            <Route path="/hizmet-sartlari" element={<TermsOfService />} />
            <Route path="/:slug" element={<CityPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
