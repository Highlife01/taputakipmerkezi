import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * Vendor chunk bölmesi: tek devasa bundle yerine mantıksal parçalar.
 * Route-level kod bölmesi (src/App.tsx'teki React.lazy) ile birlikte
 * ilk yükleme boyutu belirgin şekilde düşer.
 */
/**
 * Vendor chunk bölmesi: tek devasa bundle yerine mantıksal parçalar.
 *
 * DİKKAT (chunk döngüsü): React çekirdeği ve React'i import eden yardımcı
 * paketler (@remix-run/router, react-remove-scroll, @babel/runtime vb.) aynı
 * chunk'ta olmalıdır; aksi hâlde Rollup "circular chunk" uyarısı üretir.
 * Bu yüzden vendor-react grubu geniştir ve vendor-misc fallback YOKTUR —
 * eşleşmeyen paketler Rollup'un doğal paylaşım chunk'larına gider.
 */
function manualChunks(id: string): string | undefined {
  if (!id.includes("node_modules")) return undefined;
  const normalized = id.replace(/\\/g, "/");
  const seg = normalized.split("node_modules/").pop() ?? "";
  const pkg = seg.startsWith("@")
    ? seg.split("/").slice(0, 2).join("/")
    : seg.split("/")[0];

  // Ağır görselleştirme/takvim kütüphaneleri (lazy chunk'lara yüklenir)
  if (
    ["recharts", "embla-carousel-react", "react-day-picker", "react-resizable-panels"].includes(pkg) ||
    pkg.startsWith("d3-") ||
    pkg === "victory-vendor"
  ) {
    return "vendor-heavy";
  }
  // Uygulama seviyesi yardımcılar
  if (
    ["@tanstack", "react-hook-form", "@hookform", "zod", "date-fns", "sonner", "next-themes", "react-helmet-async"].includes(pkg)
  ) {
    return "vendor-app";
  }
  // Radix UI primitifleri
  if (pkg.startsWith("@radix-ui") || ["cmdk", "vaul", "input-otp"].includes(pkg)) {
    return "vendor-ui";
  }
  // React çekirdeği + runtime yardımcıları (döngüye girmemesi için tek yerde)
  if (
    ["react", "react-dom", "react-router", "react-router-dom", "@remix-run/router", "scheduler", "@babel/runtime", "tslib", "invariant", "shallowequal", "react-fast-compare"].includes(pkg) ||
    pkg.startsWith("react-remove")
  ) {
    return "vendor-react";
  }
  // lucide-react ve diğerleri: Rollup doğal paylaşım chunk'ı oluşturur
  return undefined;
}

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
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
}));
