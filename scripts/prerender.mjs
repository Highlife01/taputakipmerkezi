/**
 * Prerender betiği — build sonrası çalışır (Node, tarayıcı GEREKMEZ).
 *
 * Akış:
 *  1. dist/index.html (Vite istemci çıktısı) şablon olarak okunur.
 *  2. prerender-urls.json (generate-sitemap.js tarafından üretilir; tüm geçerli
 *     rota URL'lerinin tek kaynağı) okunur.
 *  3. dist-server/entry-server.js her URL için renderToString ile HTML üretir.
 *  4. Rota bazlı <head> etiketleri (title/description/canonical/JSON-LD/OG)
 *     </head> öncesine, gövde ise #root içine yazılır.
 *     NOT: Vite production derlemesinde HTML yorumları silinir; bu yüzden
 *     <!--ssr-head-->/<!--ssr-root--> işaretçileri opsiyoneldir. Yoksa
 *     sırasıyla "</head>" ve '<div id="root"></div>' çıpaları kullanılır.
 *  5. Her rota dist/<rota>/index.html olarak yazılır (kök: dist/index.html).
 *     dist/404.html ayrıca üretilir → Vercel gerçek 404 döndürür.
 */
import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const distDir = path.join(rootDir, "dist");
const serverEntryPath = path.join(rootDir, "dist-server", "entry-server.js");
const urlsPath = path.join(rootDir, "prerender-urls.json");

const ROOT_DIV_RE = /<div id="root">\s*<\/div>/;

async function main() {
    const template = await readFile(path.join(distDir, "index.html"), "utf8");

    // Vite production build'ü HTML yorumlarını temizlediği için işaretçiler
    // opsiyoneldir; zorunlu olan çıpalar: </head> ve <div id="root"></div>.
    const useHeadMarker = template.includes("<!--ssr-head-->");
    const useRootMarker = template.includes("<!--ssr-root-->");

    if (!useHeadMarker && !/<\/head>/i.test(template)) {
        throw new Error(
            "Şablonda ne ssr-head işaretçisi ne de </head> çıpası bulundu — Vite çıktısı beklenmedik şekilde değişmiş olabilir."
        );
    }
    if (!useRootMarker && !ROOT_DIV_RE.test(template)) {
        throw new Error(
            'Şablonda ne ssr-root işaretçisi ne de <div id="root"></div> çıpası bulundu — Vite çıktısı beklenmedik şekilde değişmiş olabilir.'
        );
    }

    const urls = JSON.parse(await readFile(urlsPath, "utf8"));
    if (!Array.isArray(urls) || urls.length === 0) {
        throw new Error("prerender-urls.json boş veya geçersiz.");
    }

    const serverEntryUrl = pathToFileURL(serverEntryPath).href;
    const { render } = await import(serverEntryUrl);

    let ok = 0;
    const failures = [];

    for (let i = 0; i < urls.length; i++) {
        const route = urls[i].replace(/\/+$/, "") || "/";
        try {
            const { html: body, head } = render(route);

            // Function replacer kullanılır: $& benzeri diziler bozulmasın diye.
            let out = useHeadMarker
                ? template.replace("<!--ssr-head-->", () => head)
                : template.replace(/<\/head>/i, () => head + "\n  </head>");
            out = useRootMarker
                ? out.replace("<!--ssr-root-->", () => body)
                : out.replace(ROOT_DIV_RE, () => `<div id="root">${body}</div>`);

            const filePath =
                route === "/"
                    ? path.join(distDir, "index.html")
                    : path.join(distDir, route, "index.html");

            await mkdir(path.dirname(filePath), { recursive: true });
            await writeFile(filePath, out, "utf8");
            ok++;
        } catch (error) {
            failures.push({ route, error: String(error && error.stack ? error.stack : error) });
        }

        if ((i + 1) % 200 === 0 || i + 1 === urls.length) {
            console.log(`  … ${i + 1}/${urls.length} rota işlendi`);
        }
    }

    // Vercel statik deployment için gerçek 404 sayfası: dist/404.html
    const notFoundPage = path.join(distDir, "404", "index.html");
    try {
        await copyFile(notFoundPage, path.join(distDir, "404.html"));
    } catch {
        console.warn("⚠️ dist/404/index.html kopyalanamadı (rota listesinde /404 var mı?)");
    }

    if (failures.length > 0) {
        console.error(`❌ ${failures.length} rota render edilemedi:`);
        for (const f of failures.slice(0, 10)) {
            console.error(`  ${f.route} → ${f.error}`);
        }
        process.exit(1);
    }

    console.log(`✅ ${ok} rota için prerender HTML üretildi → dist/`);
}

main().catch((error) => {
    console.error("❌ Prerender başarısız:", error);
    process.exit(1);
});
