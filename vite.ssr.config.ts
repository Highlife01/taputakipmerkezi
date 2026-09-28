import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * SSR/prerender bundle yapılandırması (istemci build'inden ayrıdır).
 *
 * Çıktı: dist-server/entry-server.js — Node'da import edilerek her rota
 * renderToString ile üretilir (bkz. scripts/prerender.mjs).
 *
 * noExternal: true ile tüm bağımlılıklar tek dosyaya bundle edilir; böylece
 * prerender çalıştıran makinede node_modules interop sorunları yaşanmaz.
 */
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    ssr: {
        noExternal: true,
    },
    build: {
        ssr: "src/entry-server.tsx",
        outDir: "dist-server",
        // Build-zamanı script: okunabilirlik + daha hızlı derleme için minify kapalı
        minify: false,
    },
});
