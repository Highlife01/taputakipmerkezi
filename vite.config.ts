import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Öncelikli sayfalar - bunlar build sırasında statik HTML olarak oluşturulur
const prerenderRoutes = [
  '/',
  '/hizmetler',
  '/tapu-islemleri',
  '/tapu-sureci',
  '/veraset-intikal',
  '/kvkk',
  '/hizmet-sartlari',
  // Hizmetler
  '/tapu-islemleri/tapu-devri',
  '/tapu-islemleri/satis-tapusu',
  '/tapu-islemleri/miras-tapu-islemleri',
  '/tapu-islemleri/hisseli-tapu',
  '/tapu-islemleri/ipotek-kaldirma',
  '/tapu-islemleri/iskan-sorgulama',
  '/tapu-islemleri/veraset-intikal',
  '/tapu-islemleri/vergi-ilisik-kesme',
  // Büyük şehirler
  '/tapu-takip/istanbul',
  '/tapu-takip/ankara',
  '/tapu-takip/izmir',
  '/tapu-takip/bursa',
  '/tapu-takip/antalya',
  '/tapu-takip/adana',
  '/tapu-takip/konya',
  '/tapu-takip/gaziantep',
  '/tapu-takip/mersin',
  '/tapu-takip/kocaeli',
  '/istanbul-iskan-sorgulama',
  '/ankara-iskan-sorgulama',
  '/izmir-iskan-sorgulama',
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

// Export for prerender script
export { prerenderRoutes };
