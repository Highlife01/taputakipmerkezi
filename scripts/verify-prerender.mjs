/**
 * Prerender doğrulama betiği — build zincirinin son adımı.
 *
 * Kabul kriterleri (analiz raporundan):
 *  - /hizmetler ham HTML başlığı ana sayfa başlığından FARKLI olmalı.
 *  - /tapu-takip/istanbul ham HTML'inde İstanbul başlığı, canonical,
 *    JSON-LD ve geo etiketi bulunmalı.
 *  - dist/404.html mevcut ve noindex içermeli.
 *  - Hiçbir sayfada SSR marker kalıntısı olmamalı.
 *  - Kritik rota dosyaları diskte mevcut olmalı.
 */
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");

const errors = [];
const check = (condition, message) => {
    if (!condition) errors.push(message);
};

async function mustExist(relPath) {
    try {
        await access(path.join(distDir, relPath));
        return true;
    } catch {
        errors.push(`Eksik dosya: dist/${relPath}`);
        return false;
    }
}

async function readPage(relPath) {
    if (!(await mustExist(relPath))) return "";
    return readFile(path.join(distDir, relPath), "utf8");
}

const extractTitle = (html) => {
    const m = html.match(/<title\b[^>]*>([^<]*)<\/title>/i);
    return m ? m[1] : "";
};

async function main() {
    // 1. Ana sayfa
    const home = await readPage("index.html");
    const homeTitle = extractTitle(home);
    check(homeTitle.includes("81 İlde"), `Ana sayfa başlığı beklenmedik: "${homeTitle}"`);
    check(home.includes('rel="canonical"'), "Ana sayfada canonical eksik");
    check(home.includes('"Organization"'), 'Ana sayfada Organization JSON-LD eksik');
    check(!home.includes("<!--ssr-head-->") && !home.includes("<!--ssr-root-->"),
        "Ana sayfada SSR marker kalıntısı kaldı");

    // 2. /hizmetler — başlık ana sayfadan farklı olmalı (P0 kabul kriteri)
    const services = await readPage("hizmetler/index.html");
    const servicesTitle = extractTitle(services);
    check(servicesTitle.length > 0, "/hizmetler başlığı boş");
    check(servicesTitle !== homeTitle, `/hizmetler başlığı ana sayfayla aynı: "${servicesTitle}"`);
    check(services.includes('href="https://www.taputakipmerkezi.com.tr/hizmetler"'),
        "/hizmetler canonical hatalı");

    // 3. /tapu-takip/istanbul — İstanbul SEO (P0 kabul kriteri)
    const istanbul = await readPage("tapu-takip/istanbul/index.html");
    const istanbulTitle = extractTitle(istanbul);
    check(istanbulTitle.includes("İstanbul"), `İstanbul başlığı hatalı: "${istanbulTitle}"`);
    check(istanbul.includes("/tapu-takip/istanbul"), "İstanbul canonical/URL eksik");
    check(istanbul.includes("geo.region"), "İstanbul geo.region etiketi eksik");
    check(istanbul.includes('"Service"'), 'İstanbul Service JSON-LD eksik');
    check(istanbul.includes("TR-34"), "İstanbul plaka kodu (TR-34) JSON-LD/geo içinde yok");
    check(!istanbul.includes('"LocalBusiness"'),
        'İstanbul sayfasında hâlâ LocalBusiness şeması var (Service olmalı)');

    // 4. Geo-service örneği: /tapu-islemleri/veraset-intikal/istanbul
    const geoService = await readPage("tapu-islemleri/veraset-intikal/istanbul/index.html");
    check(geoService.includes("/tapu-islemleri/veraset-intikal/istanbul"),
        "Geo-service sayfa canonical hatalı");

    // 5. İlçe sayfası örneği (Kadıköy)
    const district = await readPage("tapu-takip/istanbul/kadikoy/index.html");
    check(district.includes("Kadıköy"), "İstanbul/Kadıköy sayfası içeriği hatalı");

    // 6. İskan sayfası örneği
    const iskan = await readPage("istanbul-iskan-sorgulama/index.html");
    const iskanTitle = extractTitle(iskan);
    check(iskanTitle.length > 0 && iskan.includes("İskan Sorgulama"),
        "istanbul-iskan-sorgulama sayfası SEO içeriği hatalı");

    // 7. Rehber sayfası örneği
    const guide = await readPage("tapu-rehberi/tapu-devri-ne-kadar-surer/index.html");
    check(guide.includes("tapu-rehberi/tapu-devri-ne-kadar-surer"), "Rehber sayfası canonical hatalı");

    // 8. 404 — gerçek 404 + noindex
    const notFound = await readPage("404.html");
    check(notFound.includes("noindex"), "404 sayfası noindex içermiyor");
    check(notFound.includes("Bulunamadı"), "404 sayfası içeriği hatalı");

    // 9. Rapor
    if (errors.length > 0) {
        console.error(`❌ Doğrulama başarısız (${errors.length} sorun):`);
        for (const e of errors) console.error(`  - ${e}`);
        process.exit(1);
    }

    console.log("✅ Prerender doğrulaması geçti:");
    console.log(`   Ana sayfa   : "${homeTitle}"`);
    console.log(`   /hizmetler  : "${servicesTitle}"`);
    console.log(`   /tapu-takip/istanbul: "${istanbulTitle}"`);
}

main().catch((error) => {
    console.error("❌ Doğrulama betiği hata verdi:", error);
    process.exit(1);
});
