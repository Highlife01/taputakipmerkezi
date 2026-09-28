/**
 * Sunucu tarafı render girişi (yalnızca build zamanında Node'da çalışır).
 *
 * scripts/prerender.mjs bu dosyadan derlenen bundle'ı import eder ve her URL
 * için render(url) çağırır. Sayfalar burada statik import edilir; böylece
 * renderToString senkron tam HTML üretir (lazy/suspense bekleme sorunu yok).
 */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppRoutes, type PageMap } from "./routes";

/** react-helmet-async head çıktısının minimum arayüzü (sürüm bağımsız tip güvenliği) */
interface HelmetHeadPart {
    toString(): string;
}

interface HelmetHead {
    title?: HelmetHeadPart;
    meta?: HelmetHeadPart;
    link?: HelmetHeadPart;
    script?: HelmetHeadPart;
    style?: HelmetHeadPart;
}

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllServices from "./pages/AllServices";
import TapuServiceInfo from "./pages/TapuServiceInfo";
import VerasetIntikal from "./pages/VerasetIntikal";
import IcraTakip from "./pages/IcraTakip";
import ServicePage from "./pages/ServicePage";
import GuidePage from "./pages/GuidePage";
import CityPage from "./pages/CityPage";
import KVKK from "./pages/KVKK";
import TermsOfService from "./pages/TermsOfService";

const pages: PageMap = {
    Index,
    NotFound,
    AllServices,
    TapuServiceInfo,
    VerasetIntikal,
    IcraTakip,
    ServicePage,
    GuidePage,
    CityPage,
    KVKK,
    TermsOfService,
};

export interface RenderResult {
    /** <div id="root"> içerisine yazılacak gövde HTML'i */
    html: string;
    /** <head> içerisine yazılacak title/meta/link/script etiketleri */
    head: string;
}

export function render(url: string): RenderResult {
    const helmetContext: { helmet?: HelmetHead } = {};

    const html = renderToString(
        <AppProviders helmetContext={helmetContext}>
            <StaticRouter location={url}>
                <AppRoutes pages={pages} />
            </StaticRouter>
        </AppProviders>
    );

    const helmet = helmetContext.helmet;
    const head = helmet
        ? [
            helmet.title?.toString(),
            helmet.meta?.toString(),
            helmet.link?.toString(),
            helmet.script?.toString(),
            helmet.style?.toString(),
        ]
            .filter((part): part is string => Boolean(part))
            .join("\n  ")
        : "";

    return { html, head };
}
