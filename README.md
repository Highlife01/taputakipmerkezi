# Tapu Takip Merkezi

81 il ve ~970 ilçe için tapu, vergi ve miras süreç takibi danışmanlık hizmetinin
tanıtım sitesi. **Resmî kurum değildir**; noter vekâletnamesi çerçevesinde
resmî kurumlar nezdinde süreç takibi yapan özel bir danışmanlık hizmetidir
(bu beyan sitenin navbar şeridinde, footer'ında ve KVKK metninde yer alır).

## Teknoloji

- **Vite 5 + React 18 + TypeScript** (SPA, route-level code splitting)
- **React Router v6** — 16 rota deseni, ~2.238 geçerli URL
- **Tailwind CSS + shadcn/ui**
- **react-helmet-async** — rota bazlı title/description/canonical/JSON-LD/OG
- **Web3Forms** — iletişim ve ön kayıt formlarının iletimi (honeypot + KVKK onayı ile)

## Build & Prerender (P0 pipeline)

`npm run build` şu zinciri çalıştırır:

1. **generate-sitemap.js** — 7 sitemap + `sitemap.xml` indeksi üretir ve
   **`prerender-urls.json`** dosyasını yazar. Bu JSON, prerender edilecek tüm
   geçerli rotaların (sitemap + `/404`) **tek doğruluk kaynağıdır**.
2. **vite build** — istemci bundle'ı (manualChunks ile vendor bölmesi +
   `React.lazy` route bölmesi).
3. **vite build --config vite.ssr.config.ts** — `dist-server/entry-server.js`
   (renderToString tabanlı SSR bundle; tarayıcı gerekmez, Puppeteer YOKTUR).
4. **scripts/prerender.mjs** — her rota için tam HTML üretir:
   - Rota bazlı `<head>` (title, description, canonical, OG, Twitter, geo, JSON-LD)
     `</head>` öncesine enjekte edilir.
   - Gövde `#root` içine yazılır; istemci `hydrateRoot` ile devralır.
   - `dist/404.html` üretilir → Vercel geçersiz URL'lere **gerçek 404** döndürür.
5. **scripts/verify-prerender.mjs** — kabul kriterleri:
   - `/hizmetler` başlığı ana sayfadan farklı,
   - `/tapu-takip/istanbul` başlığı + canonical + geo + Service JSON-LD,
   - `/tapu-islemleri/veraset-intikal/istanbul`, `/istanbul-iskan-sorgulama`,
     `/tapu-takip/istanbul/kadikoy`, rehber sayfası mevcut,
   - `404.html` noindex içerir,
   - hiçbir sayfada SSR marker kalıntısı yoktur.

## Deployment (Vercel)

- `vercel.json` **rewrite içermez**; statik dosyalar doğrudan servis edilir.
  Geçersiz URL'ler `404.html` üzerinden gerçek 404 döner (soft-404 yok).
- `cleanUrls: true` + `trailingSlash: false`.
- `sw.js` için `must-revalidate` başlığı (cache sürümü: `tapu-takip-v2`).

## Klasör Düzeni

```
scripts/          prerender.mjs, verify-prerender.mjs (build zinciri)
src/config/site.ts  tek doğruluk kaynağı: telefon, e-posta, alan adı, Web3Forms anahtarı, feragat metni
src/routes.tsx    paylaşılan rota tablosu + sağlayıcılar (istemci & SSR ortak)
src/entry-server.tsx  sunucu render girişi (yalnızca build zamanında)
src/App.tsx       istemci girişi (React.lazy + hydrateRoot)
generate-sitemap.js   sitemap + prerender-urls.json üretimi
```

## Formlar ve KVKK

- Her iki form da Web3Forms'a gönderilir; `kvkkConsent` onayı **payload içinde**
  iletilir (+ zaman damgası ve metin sürümü).
- Hero formu canlı bir dosya sorgusu **değildir**; dürüst "ön kayıt talebi"
  olarak çalışır ve kullanıcıya bu açıkça bildirilir.
- Spam koruması: honeypot alanı (`botcheck`) + istemci doğrulaması.
- KVKK metni; veri sorumlusu kimliği, Web3Forms/Google Analytics aktarım
  beyanı, saklama süreleri ve başvuru usulünü içerir.

## Geliştirme

```bash
npm install        # bağımlılıkları kur
npm run dev        # http://localhost:8080
npm run lint       # eslint (0 hedef: 0 error)
npm run build      # sitemap + build + prerender + doğrulama
npm run preview    # dist/ önizleme
```
