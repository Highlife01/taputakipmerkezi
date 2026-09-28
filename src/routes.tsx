/**
 * Paylaşılan uygulama kabuğu: sağlayıcılar + rota tablosu.
 *
 * Bu dosya hem istemci (src/App.tsx) hem sunucu (src/entry-server.tsx)
 * girişleri tarafından kullanılır; böylece rota tablosu TEK yerde tanımlı
 * kalır ve prerender edilen HTML ile istemci hidrasyonu birebir eşleşir.
 */
import type { ComponentType, ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import InstallPWA from "./components/InstallPWA";
import SchemaData from "./components/SchemaData";
import { SITE } from "./config/site";

const queryClient = new QueryClient();

/**
 * Sayfa bileşen haritası. İstemcide React.lazy ile, sunucuda statik import
 * ile doldurulur. Anahtarlar her iki tarafta aynı olmalıdır.
 */
export interface PageMap {
    Index: ComponentType;
    NotFound: ComponentType;
    AllServices: ComponentType;
    TapuServiceInfo: ComponentType;
    VerasetIntikal: ComponentType;
    IcraTakip: ComponentType;
    ServicePage: ComponentType;
    GuidePage: ComponentType;
    CityPage: ComponentType;
    KVKK: ComponentType;
    TermsOfService: ComponentType;
}

export const AppRoutes = ({ pages }: { pages: PageMap }) => (
    <Routes>
        <Route path="/" element={<pages.Index />} />
        {/* /404 için açık rota: :slug catch-all'una düşüp sonsuz yönlendirme döngüsü oluşturmasını engeller */}
        <Route path="/404" element={<pages.NotFound />} />
        <Route path="/hizmetler" element={<pages.AllServices />} />
        <Route path="/tapu-islemleri" element={<pages.AllServices />} />
        <Route path="/tapu-sureci" element={<pages.TapuServiceInfo />} />
        <Route path="/veraset-intikal" element={<pages.VerasetIntikal />} />
        <Route path="/icra-islemleri" element={<pages.IcraTakip />} />
        <Route path="/tapu-takip/:il" element={<pages.CityPage />} />
        <Route path="/tapu-takip/:il/:ilce" element={<pages.CityPage />} />
        <Route path="/tapu-islemleri/:service" element={<pages.ServicePage />} />
        <Route path="/tapu-islemleri/:service/:il" element={<pages.ServicePage />} />
        <Route path="/tapu-rehberi/:slug" element={<pages.GuidePage />} />
        <Route path="/kvkk" element={<pages.KVKK />} />
        <Route path="/hizmet-sartlari" element={<pages.TermsOfService />} />
        <Route path="/:slug" element={<pages.CityPage />} />
        <Route path="*" element={<pages.NotFound />} />
    </Routes>
);

interface AppProvidersProps {
    children: ReactNode;
    /** Sunucu tarafında head çıktısını toplamak için react-helmet-async bağlamı */
    helmetContext?: Record<string, unknown>;
}

export const AppProviders = ({ children, helmetContext }: AppProvidersProps) => (
    <HelmetProvider {...(helmetContext ? { context: helmetContext } : {})}>
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <InstallPWA />
                <SchemaData
                    type="Organization"
                    data={{
                        name: SITE.name,
                        url: SITE.baseUrl,
                        logo: SITE.logoUrl,
                        description:
                            "81 ilde profesyonel tapu, vergi ve miras işlemleri takibi. Noter vekâletnamesi çerçevesinde resmî kurumlar nezdinde süreç yönetimi.",
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: SITE.phoneE164,
                            contactType: "customer service",
                            areaServed: "TR",
                            availableLanguage: "Turkish",
                        },
                    }}
                />
                <SchemaData
                    type="WebSite"
                    data={{
                        name: SITE.name,
                        url: SITE.baseUrl,
                        inLanguage: "tr-TR",
                        publisher: {
                            "@type": "Organization",
                            name: SITE.name,
                            url: SITE.baseUrl,
                            logo: SITE.logoUrl,
                        },
                    }}
                />
                {children}
            </TooltipProvider>
        </QueryClientProvider>
    </HelmetProvider>
);
