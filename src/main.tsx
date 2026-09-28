import { hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Prerender edilen HTML üzerine hidrasyon yapılır (createRoot değil).
// Her rota, build sırasında o rotaya özel tam HTML ile yazıldığı için
// sunucu HTML'i ile istemci ağacı birebir eşleşir.
const container = document.getElementById("root");

if (container) {
    hydrateRoot(container, <App />);
} else {
    console.error("#root elementi bulunamadı; uygulama başlatılamadı.");
}
