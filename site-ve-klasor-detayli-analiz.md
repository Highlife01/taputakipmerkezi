# Tapu Takip Merkezi — Site ve Proje Klasörü Detaylı Analiz

**İnceleme tarihi:** 27 Eylül 2026  
**Canlı adres:** https://www.taputakipmerkezi.com.tr  
**İncelenen yerel klasör:** `D:\web_siteleri\taputakipmerkezi`  
**Kapsam:** Canlı HTTP davranışı, SEO/indexlenebilirlik, içerik ve güven, dönüşüm akışları, frontend mimarisi, build/deployment, performans, erişilebilirlik, PWA, hukuki/KVKK görünürlüğü.

> Bu rapor kod veya canlı site üzerinde değişiklik yapmaz; yalnızca mevcut durumun teknik ve ürün açısından değerlendirmesidir.

---

## 1. Yönetici özeti

Site görsel ve içerik yönünden profesyonel bir temel oluşturuyor: 81 il/ilçe ölçeğinde URL yapısı, hizmet sayfaları, süreç anlatımları, WhatsApp/telefon CTA’ları, KVKK sayfası, sitemap ailesi, PWA ve JSON-LD hedeflenmiş. Üretim build’i de tamamlanıyor.

Buna karşılık **en kritik problem SEO/render/deployment katmanında**:

- Canlıda `/`, `/hizmetler`, `/tapu-takip/istanbul`, `/tapu-sureci` ve diğer route’lar ham HTTP cevabında aynı `index.html` shell’ini alıyor.
- Bu HTML’de yalnızca ana sayfanın `<title>`, canonical ve meta description’ı bulunuyor; route’a özel içerik ve JSON-LD server-side/prerender edilmiş değil.
- Canlı route testi yapılan her URL `200` ve ana sayfa canonical’ı ile dönüyor. Geçersiz URL’ler de `200` shell alıyor.
- Projede prerender kodu var, ancak normal `npm run build` script’i prerender çalıştırmıyor; Vercel yapılandırmasında da prerender akışını devreye alan bir build command görünmüyor.

İkinci kritik problem **“Anlık Durum Sorgula” formunun gerçek sorgu yapmaması**:

- `Hero.tsx` içindeki form, isim/soyisim/telefonu yalnızca React state’ine alıyor.
- 1,5 saniye sonra hiçbir backend/API çağrısı yapmadan “dosyanız sistemde güncellendi” mesajı gösteriyor.
- Kullanıcı açısından gerçek bir işlem takibi yapılmış algısı oluşuyor; bu güven ve mevzuata uyum açısından düzeltilmeli.

Üçüncü ana problem **veri toplama ve güven çerçevesinin eksikliği**:

- İletişim formu doğrudan üçüncü taraf `api.web3forms.com` servisine gönderiliyor.
- KVKK metni veri sorumlusunun tüzel/gerçek kişi bilgisi, açık iletişim/adres, saklama süreleri, aktarımın somut alıcıları ve başvuru iletişim kanalı gibi alanlarda yetersiz/çok genel kalıyor.
- Hero’daki takip formu için consent checkbox’ı var ancak gerçek bir submit olmadığı için kullanıcı akışı yanıltıcı; iletişim formundaki checkbox’ın ise `name` alanı yok, dolayısıyla onay bilgisi form payload’ına anlamlı bir alan olarak eklenmiyor.

### Genel değerlendirme

| Alan | Durum | Değerlendirme |
|---|---:|---|
| Görsel temel / marka | İyi | Tutarlı mavi-slate kimlik, net CTA ve mobil menü var. |
| İçerik kapsamı | İyi / riskli | Çok geniş hizmet ve lokasyon kapsamı var; özgünlük ve doğruluk sürekli yönetilmeli. |
| SEO stratejisi | İyi niyetli, uygulamada kritik kusurlu | Sitemap, metadata ve schema hazırlanmış; canlı route HTML’i bunları taşımıyor. |
| Lead/dönüşüm | Orta | Telefon/WhatsApp güçlü; form var. Sahte takip akışı ciddi risk. |
| Güven / hukuk | Orta-altı | KVKK ve yetki açıklamaları var; kurumsal kimlik ve süreç kanıtı eksik. |
| Teknik kalite | Orta | Build başarılı; lint hatalı, bundle tek parça ve büyük. |
| Deployment | Kritik düzeltme gerekli | `npm run build` prerender üretmiyor; Vercel rewrite SPA shell döndürüyor. |
| PWA | Orta | Temel kurulum var; cache stratejisi ve bildirim iddiası gerçek işlevle tam örtüşmüyor. |

---

## 2. Canlı site bulguları

### 2.1 Doğrulanan canlı endpoint davranışı

Aşağıdaki istekler canlıda `200`, yaklaşık **4.406 byte** ve ana sayfa canonical’ı döndürdü:

- `/`
- `/hizmetler`
- `/tapu-islemleri/tapu-devri`
- `/tapu-rehberi/tapu-devri-ne-kadar-surer`
- `/tapu-takip/istanbul`
- `/tapu-takip/istanbul/kadikoy`
- `/tapu-takip/olmayan-il`
- `/rastgele-404`

Ham HTML’de:

- `<div id="root"></div>` boş.
- Route’a özel `<h1>` yok.
- JSON-LD script’i yok.
- Ana sayfanın canonical’ı tüm route’larda tekrar ediyor.
- Route’a özel title/description da server cevabında bulunmuyor.

Tarayıcı JavaScript’i çalıştırınca React sayfayı ve `react-helmet-async` metadata’sını oluşturuyor. Bu, Google’ın render edebilen crawler’ları için kısmen toparlanabilir; ancak sosyal paylaşım botları, basit crawler’lar, bazı SEO araçları ve ilk HTML’ye dayalı sistemler açısından ciddi kayıptır.

### 2.2 Site güçlü yönleri

- Ana mesaj kısa ve anlaşılır: “doğru evrak, doğru başvuru”.
- Telefon, WhatsApp ve form CTA’ları görünür.
- 81 il ve çok sayıda ilçe için bilgi mimarisi kurulmuş.
- Tapu süreci sayfasında başvuru, kontrol, kayıt, SMS, harç ve imza adımları anlatılmış.
- Hizmet, veraset/intikal, icra, tapu süreci ve KVKK sayfaları var.
- `robots.txt`, sitemap index, alt sitemap’ler, `llms.txt` ve `llms-full.txt` yayınlanıyor.
- HTTPS çalışıyor ve HTTP → HTTPS yönlendirmesi var.
- Vercel tarafından `X-Frame-Options: DENY`, HSTS ve `X-Content-Type-Options: nosniff` gibi temel başlıklar geliyor.
- Canlı il sayfası içeriği; şehir başlığı, hizmet özeti, FAQ, WhatsApp CTA ve süreç açıklamalarını bir arada sunuyor.

### 2.3 Canlı site riskleri

#### A. SEO ve indexlenebilirlik

**Öncelik: P0**

`vercel.json` içindeki genel rewrite:

```json
{
  "source": "/(.*)",
  "destination": "/index.html"
}
```

SPA fallback olarak anlaşılır; fakat route bazlı prerender/SSR devrede değilse bütün URL’ler ana shell’e düşüyor. Sonuçları:

- Şehir, ilçe, hizmet ve rehber URL’lerinin ilk HTML değeri zayıf.
- Canonical tüm sayfalarda ana sayfaya işaret ediyor.
- Sosyal paylaşım kartlarında route’a özel title/description güvenilir değil.
- 404 URL’leri HTTP seviyesinde `200` alıyor.
- 2.238 URL’lik sitemap kapsamı ile gerçek yayınlanan HTML kapsamı arasında uyumsuzluk oluşuyor.

**Düzeltme:** Ya gerçek SSR/SSG kullanın ya da deployment sırasında tüm önemli route’ları gerçekten prerender edin. Build sonunda örneğin `/tapu-takip/istanbul/index.html` ve `/hizmetler/index.html` dosyalarının üretildiği CI kontrolü zorunlu olmalı.

#### B. 81 il/ilçe ve programatik SEO kalitesi

**Öncelik: P1**

İl/ilçe sayfaları teknik olarak kapsamlı; ancak birçok sayfa aynı Hero, aynı evrak, aynı iletişim ve benzer şablonlarla dolduruluyor. Bu model:

- düşük özgünlük,
- “doorway/programmatic SEO” algısı,
- şehirle doğrulanmamış süre/kurum/yerel iddialar,
- yanlış yerel bilgi nedeniyle güven kaybı

açısından riskli.

Örneğin canlı İstanbul sayfası “24–48 saat” ifadesini kullanıyor. Bu tür süreler resmi kurum yoğunluğu, evrak ve işlem türüne göre değiştiği için “genellikle / dosyaya ve kuruma göre” bağlamıyla verilmelidir; garanti gibi algılanmamalıdır.

**Düzeltme:** Her il/ilçe sayfasına gerçekten yerel ve doğrulanabilir içerik ekleyin: ilgili tapu/kadastro birimi, belediye kaynakları, randevu yöntemi, güncelleme tarihi, işlem türüne göre farklılıklar ve açık bir “garanti değildir” çerçevesi.

#### C. Güven ve resmi kurum algısı

Site “Resmi Gayrimenkul Takip Portalı” ve “Resmi Danışmanlık” ifadelerini kullanıyor. Footer’da “resmi kurumlarla herhangi bir ayrıcalık veya öncelik sağlamaz” açıklaması olumlu; ancak ilk izlenimde resmi kurum sitesi sanılma ihtimalini azaltmak için daha görünür bir açıklama gerekli.

**Öneri:** Üst bölümde açıkça şu tip bir cümle bulunmalı:

> “Tapu ve Kadastro Genel Müdürlüğü’ne bağlı/resmî bir kurum değiliz; noter vekâleti kapsamında özel danışmanlık ve süreç takip hizmeti sunuyoruz.”

Ayrıca `Yetki Belge No: 0100277` ifadesi için belgenin sahibi, düzenleyen kurum, tarih ve doğrulama yöntemi açıklanmalı. Doğrulanamayan veya yanlış anlaşılabilecek kurumsal ifadeler kullanılmamalı.

#### D. Hukuki/KVKK görünürlüğü

KVKK sayfası mevcut, ancak canlı metin genel bir şablon niteliğinde. Özellikle aşağıdakiler netleştirilmeli:

- Veri sorumlusunun gerçek/tüzel kişi tam unvanı.
- Açık adres, e-posta ve başvuru kanalı.
- Web3Forms gibi hizmet sağlayıcıların ve olası yurt dışı aktarımın açıklanması.
- Toplanan her veri kategorisi: ad-soyad, telefon, e-posta, işlem türü, iletişim kayıtları vb.
- Saklama süreleri veya kriterleri.
- Çerez/Google Analytics işleme ve tercih yönetimi.
- Silme, erişim ve düzeltme başvurusu için uygulanabilir iletişim adresi.
- Açık rıza ile aydınlatma metninin ayrımı.

Bu konu hukuki danışmanlık değildir; nihai metin bir KVKK uzmanı/avukat tarafından gözden geçirilmelidir.

---

## 3. Yerel proje klasörü analizi

### 3.1 Mimari

Proje:

- Vite + React 18 + TypeScript.
- React Router v6.
- Tailwind CSS + shadcn/Radix bileşenleri.
- `react-helmet-async` ile route metadata.
- Puppeteer tabanlı prerender script’i.
- Vercel deployment hedefi.
- PWA manifest/service worker.
- Form için Web3Forms harici API’si.

`App.tsx` route kapsamı geniş: ana sayfa, hizmetler, tapu süreci, veraset, icra, il/ilçe, hizmet x şehir, rehber, KVKK ve hizmet şartları rotaları tanımlı.

### 3.2 Build ve lint sonucu

#### Build

`npm run build` **başarılı**:

- Sitemap üretildi.
- Toplam URL sayısı: **2.238**.
- Vite build tamamlandı.

Ancak normal build yalnızca `generate-sitemap.js && vite build` çalıştırıyor. `prerender.js` çalışmıyor. `build:prerender` script’i mevcut olsa da deployment’ın bunu kullandığını gösteren bir ayar görülmedi.

#### Lint

`npm run lint` **başarısız**:

- Toplam **12 problem**: **5 error**, **7 warning**.
- Hatalar en azından `src/components/InstallPWA.tsx` içinde `any` kullanımları ve forbidden `require()` kullanımını içeriyor.
- Çıktıda React Fast Refresh kuralına ilişkin bileşen dışa aktarma uyarıları da bulunuyor.

Lint’in CI’da zorunlu hale getirilmesi ve hataların giderilmesi gerekir. Build’in başarılı olması lint’in temiz olduğu anlamına gelmez.

### 3.3 Performans

Build sonrası temel bundle’lar:

- JavaScript: yaklaşık **583.571 byte** minified.
- CSS: yaklaşık **84.334 byte** minified.
- JavaScript gzip boyutu build çıktısında yaklaşık **174,97 kB**.
- CSS gzip: yaklaşık **14,04 kB**.

Vite, 500 kB minified chunk uyarısı veriyor. Proje bütün sayfaları tek büyük JavaScript chunk’ında topluyor.

**Öncelikli iyileştirmeler:**

1. Sayfaları `React.lazy()` + route-level `Suspense` ile bölmek.
2. Ağır ikon/bileşenleri gerektiği sayfada yüklemek.
3. Üretimde source map ve kullanılmayan Radix bağımlılıklarını gözden geçirmek.
4. Google Fonts’u kritik render açısından optimize etmek; mümkünse fontları self-host/preload etmek.
5. Görsellerde `width`, `height`, responsive `srcset`, modern format ve lazy loading kullanmak.
6. Lighthouse/PageSpeed ile mobil ölçüm alıp LCP, INP ve CLS takibi yapmak.

### 3.4 Form akışları

#### Hero “Anlık Durum Sorgula”

`src/components/Hero.tsx` içinde `handleTrackingSearch`:

- API çağrısı yok.
- Veritabanı/CRM bağlantısı yok.
- Form değerleri yalnızca state’te tutuluyor.
- 1.500 ms sonra başarı mesajı gösteriliyor:
  “dosyanız sistemde güncellendi. Uzmanımız ... arayacaktır.”

Bu davranış bir demo/placeholder ise açıkça “Ön kayıt talebi” olarak adlandırılmalı. Gerçek takip isteniyorsa:

- benzersiz dosya numarası,
- güvenli backend endpoint,
- kimlik doğrulama veya tek kullanımlık doğrulama,
- rate limit ve abuse protection,
- audit log,
- gerçek durum kaynağı,
- KVKK veri minimizasyonu
kurulmalı.

#### İletişim formu

`src/components/ContactSection.tsx` formu `https://api.web3forms.com/submit` adresine doğrudan POST ediyor.

Olumlu taraflar:

- Telefon ve e-posta doğrulaması var.
- Gönderim, hata ve başarı durumları var.
- Submit sırasında buton devre dışı kalıyor.

Riskler/eksikler:

- Üçüncü taraf servise doğrudan tarayıcıdan veri gönderiliyor.
- `access_key` frontend bundle içinde görünür; Web3Forms modeli bunu gerektirebilir, ancak kötüye kullanım/rate limit kontrolü ayrıca ele alınmalı.
- KVKK checkbox’ı formda `id` ile var, fakat `name` yok; onay bilgisi payload’a açık bir alan olarak gitmiyor.
- Bot/spam önleme görünmüyor.
- Sunucu tarafı doğrulama ve yapılandırılmış CRM kayıt akışı yok.
- `replyto` alanı sabit kurumsal e-posta; kullanıcı e-postasının yanıt adresi olarak kullanılması hedefleniyorsa `replyto` ile `email` ayrımı net yapılmalı.

### 3.5 Routing ve 404

React içinde `NotFound` rotası ve `Navigate to="/404"` kullanılıyor. Ancak Vercel tüm istekleri `index.html`’e rewrite ettiği için HTTP seviyesinde geçersiz URL’ler `200` alıyor.

**Öneri:** Bilinen statik/prerender route’lar ile bilinmeyen route’ları ayırın. En azından fallback 404 için Vercel/hosting davranışını kontrol edin; Google Search Console’da Soft 404 sinyali oluşup oluşmadığını izleyin.

### 3.6 PWA/service worker

`public/sw.js` network-first cache yaklaşımı kullanıyor ve başarılı cevapları cache’e yazıyor.

Riskler:

- Aynı cache adı (`tapu-takip-v1`) değişikliklerde eski içerik davranışını uzatabilir.
- Her başarılı GET isteğini cache’e almak, dinamik/kişisel olmayan tüm sayfalar için kontrolsüz büyümeye yol açabilir.
- Offline fallback olarak yalnızca cache’de olan yanıt döner; kullanıcıya özel güvenli veri için uygun değil.
- `InstallPWA.tsx` arayüzünde “Çevrimdışı” ve “Bildirimler” faydaları gösteriliyor; fakat gerçek push notification altyapısı görünmüyor. Bildirim iddiası kaldırılmalı veya gerçek Web Push kurulmalı.
- PWA banner’ının iOS/Android davranışı test cihazlarıyla doğrulanmalı.

### 3.7 SEO implementation ayrıntıları

Olumlu:

- `SEO.tsx` title, description, canonical, hreflang, OG, Twitter ve JSON-LD üretmeye çalışıyor.
- `CityPage.tsx` şehir bazlı BreadcrumbList, LocalBusiness ve FAQ schema üretiyor.
- `ServicePage.tsx` BreadcrumbList, Service ve FAQ schema üretiyor.

Dikkat edilmesi gerekenler:

- Schema üretimi yalnızca React render olduktan sonra oluşuyor; canlı ham HTML’de yok.
- Her şehir/ilçe için `LocalBusiness` kullanımı gerçek bir fiziksel işletme/şube izlenimi oluşturabilir. Türkiye geneli hizmet veren tek bir danışmanlık işletmesi için `Organization` + `areaServed` daha doğru olabilir; her bölgeye gerçek adres gibi `Tapu Hizmet Noktası` üretmekten kaçınılmalı.
- `CityPage.tsx` içinde şehir adına göre gerçek kurum ve süre ifadeleri üretildiği için veri doğrulama/güncelleme mekanizması gerekli.
- `index.html` içindeki geo meta verileri Adana koordinatlarını genel siteye uyguluyor. Türkiye geneli bir marka için bunu “merkez adres” olarak açıkça tanımlayın veya doğrulanmış merkez adresi yoksa kaldırın.
- `hreflang="tr"` ve `x-default` tek dilde sorun çıkarmaz; fakat ileride farklı dil URL’leri eklenirse karşılıklı alternatifler kurulmalı.

### 3.8 Kod temizliği

- `App.css` içinde Vite başlangıç şablonundan kalan `.logo`, `.logo.react`, `logo-spin`, `.read-the-docs` gibi kullanılmayan kurallar görünüyor.
- `package.json` proje adı hâlâ `vite_react_shadcn_ts`, sürüm `0.0.0`; gerçek ürün adı ve sürüm stratejisiyle güncellenmeli.
- `README.md` hâlâ Lovable başlangıç şablonunu kullanıyor ve gerçek proje bilgilerini açıklamıyor.
- Kaynak dosyada doğrudan sabit telefon, e-posta ve harici form endpoint’i birçok yerde tekrarlanıyor. Merkezi config/constants kullanmak bakım ve değişiklik riskini azaltır.
- Yerel klasörde `.git` görünmediği için bu klasör üzerinden değişiklik geçmişi/branch/remote doğrulanamadı. Deployment kaynağının hangi repo/branch olduğu ayrıca teyit edilmeli.

---

## 4. Önceliklendirilmiş düzeltme planı

### P0 — Yayına alınmadan önce

1. **Gerçek SSR/SSG/prerender pipeline’ını devreye alın.**
   - `npm run build:prerender` deployment build command olarak kullanılsın veya ayrı statik üretim pipeline’ı kurulsun.
   - CI: `/hizmetler`, `/tapu-sureci`, `/tapu-takip/istanbul`, en az bir ilçe, bir hizmet ve `/kvkk` dosyalarının gerçekten üretildiğini kontrol etsin.
   - Her prerender HTML’inde route’a özel title, description, canonical, H1 ve JSON-LD assert edilsin.

2. **Anlık Durum Sorgula formunu düzeltin.**
   - Gerçek endpoint yoksa başarı mesajını kaldırın ve “Talebiniz alındı / sizi arayacağız” gibi doğru bir ön kayıt akışı yapın.
   - Gerçek dosya takibi isteniyorsa backend + güvenli doğrulama + durum veritabanı kurun.

3. **Geçersiz URL’lerin Soft 404 davranışını düzeltin.**
   - Hosting seviyesinde gerçek 404 veya doğru noindex/redirect davranışı uygulayın.
   - Search Console’da örnek URL testleri yapın.

4. **Form ve KVKK akışını hukuk/uyum incelemesine sokun.**
   - Veri sorumlusu, aktarım, saklama, çerez/analytics ve başvuru kanallarını gerçek bilgilerle tamamlayın.

### P1 — 1–2 sprint içinde

1. Route-level code splitting.
2. Lint’i temizleme ve CI’da lint/typecheck zorunluluğu.
3. Web3Forms yerine güvenli backend proxy veya kontrollü form hizmeti.
4. Spam koruması/rate limit/anti-abuse.
5. Şehir/ilçe sayfalarına doğrulanmış özgün içerik ve güncelleme tarihi.
6. “Resmî kurum değiliz” açıklamasını görünür hale getirme.
7. Schema’da gerçek işletme/adres modelinin revizyonu.
8. PWA cache versiyonlama ve gerçek bildirim özelliği yoksa “Bildirimler” iddiasını kaldırma.

### P2 — 2–4 sprint içinde

1. Gerçek analytics event’leri: CTA tıklaması, telefon, WhatsApp, form başlatma/tamamlama, hata.
2. Consent mode/cookie tercih yönetimi.
3. Lighthouse ve gerçek kullanıcı metrikleri takibi.
4. İçerik editoryal kalite sistemi: süre/harç/mevzuat bilgileri için kaynak ve son kontrol tarihi.
5. Gerçek proje README’si, environment variable dokümantasyonu ve deployment runbook.
6. Ortak iletişim ve marka sabitlerinin tek config dosyasına alınması.

---

## 5. Önerilen kabul kriterleri

Düzeltmeler tamamlandığında aşağıdaki maddeler otomatik veya manuel test olarak koşulmalı:

- [ ] `npm run lint` 0 error ile tamamlanıyor.
- [ ] TypeScript typecheck ayrı bir CI adımı olarak başarılı.
- [ ] `npm run build` ve prerender build başarılı.
- [ ] `/hizmetler` ham HTML title’ı ana sayfadan farklı.
- [ ] `/tapu-takip/istanbul` ham HTML’de İstanbul başlığı, description, canonical ve JSON-LD var.
- [ ] `/tapu-takip/istanbul/kadikoy` route’u doğru ilçe içeriği ve canonical üretiyor.
- [ ] Geçersiz URL gerçek 404 veya bilinçli noindex soft-404 davranışı veriyor.
- [ ] Hero formu gerçek backend’e gidiyor veya kullanıcıya açıkça “ön talep” olarak sunuluyor; sahte durum mesajı yok.
- [ ] Form onayının tarih/sürüm ve rıza kaydı için veri modeli tanımlı.
- [ ] KVKK metnindeki veri sorumlusu ve iletişim bilgileri gerçek ve doğrulanabilir.
- [ ] Web3Forms/yurt dışı veri aktarımı açıkça değerlendirildi.
- [ ] PWA eski bundle’ı sonsuza kadar sunmuyor; cache invalidation test edildi.
- [ ] Mobil Lighthouse ölçümleri kabul edilen eşiklere ulaşıyor.

---

## 6. Sonuç

Bu proje **tasarım ve içerik kapsamı açısından iyi bir başlangıç**, fakat mevcut yayın şekliyle özellikle SEO ve güven bakımından beklenen potansiyelini kullanamıyor. En yüksek getirili iş, yeni sayfa eklemek değil:

1. **route bazlı gerçek HTML üretimini düzeltmek,**
2. **sahte dosya takip başarısını kaldırmak/gerçekleştirmek,**
3. **KVKK ve resmi kurum algısını netleştirmek,**
4. **lint, bundle ve deployment hattını disipline etmek** olmalıdır.

Bu dört konu çözülmeden daha fazla il/ilçe URL’si üretmek teknik borcu ve indeksleme riskini büyütür. Önce yayın altyapısı ve güven akışı sağlamlaştırılmalı, ardından yerel SEO kapsamı doğrulanmış özgün içerikle genişletilmelidir.

---

## İnceleme sırasında kullanılan doğrulamalar

- Canlı ana sayfa ve alt sayfalar HTTP GET ile kontrol edildi.
- `robots.txt`, sitemap index ve alt sitemap cevapları kontrol edildi.
- HTTP → HTTPS yönlendirmesi kontrol edildi.
- Canlı ham HTML’de root/metadata/JSON-LD durumu kontrol edildi.
- Yerel `npm run build` çalıştırıldı: başarılı.
- Yerel `npm run lint` çalıştırıldı: 5 error, 7 warning.
- Yerel `package.json`, `index.html`, `vercel.json`, `prerender.js`, `App.tsx`, `Index.tsx`, `Hero.tsx`, `ContactSection.tsx`, `SEO.tsx`, `CityPage.tsx`, `ServicePage.tsx`, `KVKK.tsx`, `InstallPWA.tsx`, `sw.js` ve ilgili stil/config dosyaları incelendi.
