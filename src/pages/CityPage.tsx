import { useParams, Navigate, useLocation, Link } from "react-router-dom";
import { iller } from "@/data/turkiye";
import { services } from "@/data/services";
import { getCityGeo } from "@/data/geoData";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DocumentRequirements from "@/components/DocumentRequirements";
import ServicesGrid from "@/components/ServicesGrid";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Gavel, ShieldOff, Search, Zap, ArrowRight, MapPin, Building2, HelpCircle } from "lucide-react";

const CityPage = () => {
    const { slug, il: ilParam, ilce: ilceParam } = useParams();
    const location = useLocation();

    let citySlug = ilParam;
    let districtSlug = ilceParam;
    let isIskanPage = false;

    if (slug) {
        const parts = slug.split("-");
        const tapuIndex = parts.indexOf("tapu");
        const iskanIndex = parts.indexOf("iskan");

        if (tapuIndex !== -1 && parts[tapuIndex + 1] === "takip" && tapuIndex !== 0) {
            citySlug = parts[0];
            districtSlug = tapuIndex > 1 ? parts.slice(1, tapuIndex).join("-") : null;
        } else if (iskanIndex !== -1 && parts[iskanIndex + 1] === "sorgulama" && iskanIndex !== 0) {
            citySlug = parts[0];
            districtSlug = iskanIndex > 1 ? parts.slice(1, iskanIndex).join("-") : null;
            isIskanPage = true;
        } else {
            return <Navigate to="/404" />;
        }
    }

    if (!citySlug) return <Navigate to="/" />;

    const city = iller.find((il) => il.slug === citySlug);
    if (!city) return <Navigate to="/404" />;

    const district = districtSlug
        ? city.ilceler.find((d) => d.slug === districtSlug)
        : null;

    if (districtSlug && !district) return <Navigate to="/404" />;

    const cityGeo = getCityGeo(city.slug);

    // Tekil kanonik yol hesaplanır; tüm varyantlar buraya yönlendirilir
    const canonicalPath = isIskanPage
        ? (district ? `${city.slug}-${district.slug}-iskan-sorgulama` : `${city.slug}-iskan-sorgulama`)
        : (district ? `tapu-takip/${city.slug}/${district.slug}` : `tapu-takip/${city.slug}`);

    const canonicalUrl = `https://www.taputakipmerkezi.com.tr/${canonicalPath}`;

    const title = isIskanPage
        ? (district ? `${city.name} ${district.name} İskan Sorgulama | Yapı Kullanma İzin Belgesi Kontrolü` : `${city.name} İskan Sorgulama | Yapı Kullanma İzin Belgesi Kontrolü`)
        : (district ? `${city.name} ${district.name} Tapu Takip Hizmeti | Tapu İşlemleri & Randevu` : `${city.name} Tapu Takip Hizmeti | Resmi Tapu ve Vergi İşlemleri`);

    const description = isIskanPage
        ? (district ? `${city.name} ${district.name} taşınmazları için iskan (yapı kullanma izin belgesi) sorgulamasını resmi kayıtlar üzerinden hızlıca yapın. Tapu, ada-parsel veya adresle durum kontrolü.` : `${city.name} geneli iskan (yapı kullanma izin belgesi) sorgulama hizmeti. Tüm ilçelerde tapu ve adres bilgisi ile resmi iskan durumu kontrolü.`)
        : (district ? `${city.name} ${district.name} tapu takip hizmeti ile tapu devri, intikal, ipotek fekki ve randevu süreçlerini noter yetkisiyle hızlı ve güvenilir şekilde sonuçlandırın.` : `${city.name} genelinde profesyonel tapu takip hizmeti. Tapu devri, intikal, ipotek fekki ve vergi ilişik kesme süreçleriniz uzman kadromuzla takip edilir.`);

    const geoTags = cityGeo ? {
        region: `TR-${cityGeo.plateCode}`,
        placename: district ? `${district.name}, ${city.name}, Türkiye` : `${city.name}, Türkiye`,
        position: `${cityGeo.latitude};${cityGeo.longitude}`,
        icbm: `${cityGeo.latitude}, ${cityGeo.longitude}`
    } : undefined;

    const breadcrumbData = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": "https://www.taputakipmerkezi.com.tr"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": `${city.name} Tapu Takip`,
                "item": `https://www.taputakipmerkezi.com.tr/tapu-takip/${city.slug}`
            },
            ...(district ? [{
                "@type": "ListItem",
                "position": 3,
                "name": `${district.name} Tapu Takip`,
                "item": `https://www.taputakipmerkezi.com.tr/tapu-takip/${city.slug}/${district.slug}`
            }] : [])
        ]
    };

    const localBusinessSchema = {
        "@type": "LocalBusiness",
        "@id": canonicalUrl,
        "name": `Tapu Takip Merkezi - ${city.name}${district ? ` (${district.name})` : ""}`,
        "image": "https://www.taputakipmerkezi.com.tr/favicon.png",
        "url": canonicalUrl,
        "telephone": "+905320550945",
        "priceRange": "₺₺",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": cityGeo?.tapuMudurlugu || `${city.name} Tapu Hizmet Noktası`,
            "addressLocality": district ? district.name : city.name,
            "addressRegion": city.name,
            "addressCountry": "TR",
            ...(cityGeo?.postalCode ? { "postalCode": cityGeo.postalCode } : {})
        },
        ...(cityGeo ? {
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": cityGeo.latitude,
                "longitude": cityGeo.longitude
            }
        } : {}),
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": district ? `${district.name}, ${city.name}` : city.name
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
        }
    };

    const localFaqSchema = isIskanPage ? {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `${city.name} ${district ? district.name + " " : ""}iskan sorgulama nasıl yapılır?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${city.name} ${district ? district.name + " " : ""}bölgesindeki taşınmazın iskan (yapı kullanma izin belgesi) durumu, ada-parsel numarası veya açık adres bilgisi ile ilgili belediye arşivinden sorgulanır. Tapu Takip Merkezi uzmanları bu sorgulamayı sizin adınıza yapıp raporlar.`
                }
            },
            {
                "@type": "Question",
                "name": `${city.name} ${district ? district.name + " " : ""}iskanı olmayan daireye konut kredisi çıkar mı?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Genellikle çıkmaz. Bankalar konut kredisi kullandırımı için yapı kullanma izin belgesi (iskan) ister. İskanı olmayan taşınmazlarda önce iskan alım süreci yürütülmelidir."
                }
            },
            {
                "@type": "Question",
                "name": `İskan sorgulama ücretli mi, ne kadar sürer?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Belediyeye bağlı olarak 1-3 iş günü içinde neticelenir. Tapu Takip Merkezi olarak ilk sorgulama ve durum tespiti tamamen ücretsizdir."
                }
            }
        ]
    } : {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `${city.name} ${district ? district.name + " " : ""}tapu devir işlemleri kaç gün sürer?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${city.name} ${district ? district.name + " " : ""}bölgesinde Web Tapu üzerinden yapılan başvurularda evraklar eksiksiz ise ortalama 1-2 iş günü içerisinde harç mesajı gelir ve resmi imza işlemi tamamlanır.`
                }
            },
            {
                "@type": "Question",
                "name": `${city.name} tapu müdürlüğüne gitmeden işlem yapılabilir mi?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, noter onaylı sınırlı tapu takip vekâletnamesi vererek Tapu Takip Merkezi uzmanları aracılığıyla başvuru, harç yatırma ve süreç takibini tapu dairesine gitmeden yaptırabilirsiniz."
                }
            },
            {
                "@type": "Question",
                "name": `${city.name} ${district ? district.name + " " : ""}belediyesi rayiç bedeli nasıl alınır?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tapu devri öncesinde ilgili ilçe belediyesi emlak servisine başvurularak veya e-belediye sistemi üzerinden güncel rayiç bedel ve 'borcu yoktur' yazısı temin edilir. Uzman kadromuz bu işlemi sizin adınıza takip eder."
                }
            }
        ]
    };

    const currentSlug = isIskanPage
        ? (district ? `${city.slug}-${district.slug}-iskan-sorgulama` : `${city.slug}-iskan-sorgulama`)
        : (district ? `tapu-takip/${city.slug}/${district.slug}` : `tapu-takip/${city.slug}`);

    if (slug) {
        const currentPath = location.pathname.replace(/^\//, "");
        if (currentPath !== currentSlug && currentPath !== canonicalPath) {
            return <Navigate to={`/${canonicalPath}`} replace />;
        }
    }

    return (
        <div className="min-h-screen overflow-x-hidden">
            <SEO
                title={title}
                description={description}
                url={canonicalUrl}
                geo={geoTags}
                schemas={[breadcrumbData, localBusinessSchema, localFaqSchema]}
                keywords={`${city.name} tapu takip, ${city.name} tapu randevu, ${district ? district.name + ' tapu takip, ' : ''}${city.name} veraset intikal, ${city.name} iskan sorgulama, ${city.name} tapu mudurlugu`}
            />
            <WhatsAppButton />
            <Navbar />

            {/* Breadcrumb Navigation */}
            <div className="bg-slate-50 border-b py-3">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="flex text-xs font-bold uppercase tracking-wider text-slate-400 gap-2 items-center">
                        <a href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</a>
                        <span>/</span>
                        {district ? (
                            <>
                                <a href={`/tapu-takip/${city.slug}`} className="hover:text-blue-600 transition-colors">{city.name}</a>
                                <span>/</span>
                                <span className="text-blue-600">{district.name} Tapu Takip</span>
                            </>
                        ) : (
                            <span className="text-blue-600">{city.name} Tapu Takip Hizmeti</span>
                        )}
                    </nav>
                </div>
            </div>

            <Hero />

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
                                <MapPin size={14} />
                                {cityGeo?.region || "Türkiye"} Bölgesi • Plaka: {cityGeo?.plateCode || city.id}
                            </div>
                            <h1 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                {city.name} {district ? district.name : ""} <br />
                                <span className="text-blue-600">{isIskanPage ? "İskan Sorgulama" : "Tapu Takip Süreci"}</span>
                            </h1>
                        </div>

                        {/* GEO Direct Answer Snippet Box (Yapay Zeka ve Arama Motoru Özet Bloğu) */}
                        <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-100 p-6 rounded-3xl">
                            <div className="flex items-center gap-2 text-blue-900 font-black text-xs uppercase tracking-widest mb-2">
                                <Building2 size={16} /> Resmi Takip Özeti
                            </div>
                            <p className="text-sm font-medium text-slate-700 leading-relaxed">
                                <strong>{city.name} {district ? district.name + " " : ""}</strong>
                                sınırları içerisindeki tüm taşınmazlar için tapu devri, veraset intikal, ipotek terkini, imar durumu ve iskan araştırmaları
                                <strong> {cityGeo?.tapuMudurlugu || `${city.name} Tapu Müdürlüğü`} </strong>
                                ve ilgili belediye nezdinde yetkili uzmanlarımızca yürütülmektedir.
                                Süreçler randevulu ve 24-48 saat içinde hızlıca neticelendirilir.
                            </p>
                        </div>

                        <div className="prose prose-slate max-w-none">
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                {isIskanPage
                                    ? `${city.name} ${district ? district.name : ""} bölgesindeki taşınmazlarınızın yapı kullanma izin belgesi (iskan) durumunu resmi belediye ve tapu kayıtları üzerinden sizin adınıza sorguluyor ve raporluyoruz.`
                                    : `${city.name} ${district ? district.name : ""} bölgesindeki tüm gayrimenkul işlemleriniz için profesyonel, hızlı ve güvenilir takip hizmeti sunuyoruz. Tapu müdürlüklerinde vakit kaybetmeden, uzman danışmanlarımız aracılığıyla işlemlerinizi sonuçlandırıyoruz.`
                                }
                            </p>

                            <div className="bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100 my-8">
                                <h3 className="text-xl font-black text-blue-900 mb-4 uppercase">
                                    {isIskanPage ? "İskan Neden Önemlidir?" : `Neden ${city.name} Tapu Takip?`}
                                </h3>
                                <ul className="grid md:grid-cols-2 gap-4 list-none p-0 text-sm font-bold text-blue-800 uppercase tracking-wide">
                                    {isIskanPage ? (
                                        <>
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                                Yasal Abonelik İşlemleri
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                                Konut Kredisi Uygunluğu
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                                Kat Mülkiyeti Geçiş Süreci
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                                Değer Kaybının Önlenmesi
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                                Hızlı Randevu ve Başvuru
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                                Veraset ve İntikal İşlemleri
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                                Vergi İlişik Kesme Hizmeti
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                                Güvenli Alım-Satım Takibi
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>

                        {/* District vs City Navigation Block */}
                        {district ? (
                            <div className="space-y-6">
                                <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full -mr-16 -mt-16" />
                                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight relative z-10">
                                        {district.name} Özel Hizmet Hattı
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium relative z-10">
                                        {district.name} Tapu Müdürlüğü'ndeki tüm devir, ipotek, intikal ve şerh işlemleriniz
                                        bölge uzmanımız tarafından titizlikle takip edilir.
                                    </p>
                                    <a
                                        href={`/tapu-takip/${city.slug}`}
                                        className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors uppercase tracking-widest text-xs"
                                    >
                                        ← {city.name} GENELİ TÜM İLÇELER
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight border-l-4 border-blue-600 pl-4">
                                    {city.name} İlçeleri ve Takip Bölgeleri
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {city.ilceler.map((ilce) => (
                                        <a
                                            key={ilce.slug}
                                            href={`/tapu-takip/${city.slug}/${ilce.slug}`}
                                            className="bg-white border-2 border-slate-100 p-4 rounded-2xl text-center text-xs font-black uppercase tracking-widest text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-50 transition-all"
                                        >
                                            {ilce.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Localized FAQ Section (Yerel Sıkça Sorulan Sorular) */}
                        <div className="bg-white rounded-3xl border-2 border-slate-100 p-8">
                            <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-3">
                                <HelpCircle size={16} /> Yerel Rehber
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6">
                                {city.name} {district ? district.name + " " : ""}Tapu ve Kadastro Sıkça Sorulanlar
                            </h3>
                            <div className="space-y-4">
                                <div className="border-b border-slate-100 pb-4">
                                    <h4 className="text-sm font-black text-slate-800 uppercase mb-2">
                                        {city.name} {district ? district.name + " " : ""}tapu devir işlemleri kaç gün sürer?
                                    </h4>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                        Web Tapu üzerinden yapılan başvurularda evraklar eksiksiz ise ortalama 1-2 iş günü içerisinde harç mesajı gelir ve aynı gün veya ertesi gün randevu oluşturularak işlem tamamlanır.
                                    </p>
                                </div>
                                <div className="border-b border-slate-100 pb-4">
                                    <h4 className="text-sm font-black text-slate-800 uppercase mb-2">
                                        {city.name} tapu müdürlüğüne gitmeden vekâletle işlem yapılabilir mi?
                                    </h4>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                        Evet. Noterden vereceğiniz özel sınırlı tapu takip vekâleti ile ekibimiz sizin yerinize tüm başvuru, harç ödeme ve imza işlemlerini yürütür. Şehir dışında veya yurt dışında olsanız dahi işlemleriniz aksamaz.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-slate-800 uppercase mb-2">
                                        {city.name} belediyesi rayiç bedeli ve emlak vergisi ilişik kesme nasıl yapılır?
                                    </h4>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                        Taşınmazın bulunduğu ilçe belediyesine gidilerek veya online e-belediye sistemi üzerinden geçmiş dönem emlak vergisi borçları kapatılır ve tapu harcına esas rayiç bedel belgesi alınır.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Nearby Cities */}
                    <div className="space-y-8">
                        <div className="bg-slate-50 p-8 rounded-[2rem] border-2 border-slate-100">
                            <h3 className="font-black text-slate-800 uppercase tracking-widest text-sm mb-6 pb-4 border-b">
                                Popüler Hizmet Bölgeleri
                            </h3>
                            <div className="flex flex-col gap-3">
                                {iller.filter(il => il.slug !== city.slug).slice(0, 10).map(il => (
                                    <a
                                        key={il.slug}
                                        href={`/tapu-takip/${il.slug}`}
                                        className="group flex items-center justify-between p-3 rounded-xl bg-white border border-transparent hover:border-blue-200 transition-all font-bold text-xs text-slate-500 hover:text-blue-600"
                                    >
                                        {il.name} Tapu Takip
                                        <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-blue-600 rounded-full transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl shadow-blue-100">
                            <h4 className="font-black text-xl mb-4 uppercase tracking-tighter italic">Profesyonel Destek</h4>
                            <p className="text-blue-100 text-sm font-bold leading-relaxed mb-6">
                                İşleminiz ne olursa olsun, tapu dairesine gitmeden önce mutlaka uzmanımıza danışın.
                            </p>
                            <a
                                href="https://wa.me/905320550945"
                                className="block w-full bg-white text-blue-600 py-4 rounded-2xl text-center font-black uppercase tracking-widest text-xs hover:bg-blue-50 transition-colors"
                            >
                                WhatsApp İle Sorun
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* İcra & Haciz Hizmetleri - İl/İlçe SEO */}
            <section className="py-20 bg-gradient-to-br from-red-50 to-slate-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-red-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-red-100 decoration-4 underline-offset-8">
                            İcra & Haciz Danışmanlığı
                        </h2>
                        <h3 className="text-2xl lg:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                            {city.name} {district ? district.name : ""} <span className="text-red-600">İcra Takip Hizmetleri</span>
                        </h3>
                        <p className="text-slate-500 max-w-3xl mx-auto font-medium text-sm">
                            {city.name} {district ? district.name + " " : ""}bölgesinde taşınmaz üzerindeki icra takipleri, haciz kaldırma, e-haciz ve icra satış süreçlerinde profesyonel danışmanlık.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                title: "Haciz Kaldırma",
                                slug: "haciz-kaldirma",
                                desc: `${city.name} ${district ? district.name + " " : ""}tapu kaydındaki haciz şerhlerinin kaldırılması`,
                                icon: ShieldOff,
                                color: "red"
                            },
                            {
                                title: "Haciz Sorgulama",
                                slug: "haciz-serhi-sorgulama",
                                desc: `${city.name} ${district ? district.name + " " : ""}taşınmazlarında haciz şerhi araştırması`,
                                icon: Search,
                                color: "purple"
                            },
                            {
                                title: "İcra Takip",
                                slug: "icra-takip",
                                desc: `${city.name} ${district ? district.name + " " : ""}icra dairelerinde taşınmaz takip süreçleri`,
                                icon: Gavel,
                                color: "blue"
                            },
                            {
                                title: "E-Haciz Kaldırma",
                                slug: "e-haciz-kaldirma",
                                desc: `${city.name} ${district ? district.name + " " : ""}vergi dairesi e-haciz ve bloke kaldırma`,
                                icon: Zap,
                                color: "orange"
                            }
                        ].map((s, i) => {
                            const IconComponent = s.icon;
                            return (
                                <Link
                                    key={i}
                                    to={`/tapu-islemleri/${s.slug}`}
                                    className="group bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-red-200 shadow-sm hover:shadow-xl transition-all"
                                >
                                    <div className={`mb-4 inline-block p-4 rounded-2xl ${s.color === "red" ? "bg-red-50 group-hover:bg-red-600" : s.color === "purple" ? "bg-purple-50 group-hover:bg-purple-600" : s.color === "blue" ? "bg-blue-50 group-hover:bg-blue-600" : "bg-orange-50 group-hover:bg-orange-600"} group-hover:text-white transition-colors`}>
                                        <IconComponent size={24} />
                                    </div>
                                    <h4 className="font-black text-slate-900 text-sm uppercase mb-2 group-hover:text-red-600 transition-colors">
                                        {s.title}
                                    </h4>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider leading-relaxed mb-4">
                                        {s.desc}
                                    </p>
                                    <span className="flex items-center gap-1 text-red-600 font-black text-[10px] uppercase tracking-widest">
                                        Detay <ArrowRight size={10} />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h4 className="font-black text-xl uppercase mb-3 tracking-tight">
                                    {city.name} {district ? district.name + " " : ""}İcra & Haciz Danışmanlığı
                                </h4>
                                <p className="text-slate-300 font-medium text-sm leading-relaxed mb-4">
                                    2004 sayılı İcra ve İflas Kanunu ile 6183 sayılı Amme Alacaklarının Tahsil Usulü Hakkında Kanun
                                    kapsamında taşınmaz üzerindeki tüm icra süreçlerinde rehberlik ve takip hizmeti sunuyoruz.
                                </p>
                                <p className="text-slate-400 text-xs font-bold">
                                    ⚖️ Tüm işlemler mevzuata uygun şekilde yürütülür. Hukuki danışmanlık hizmeti avukatlar tarafından sağlanır.
                                </p>
                            </div>
                            <Link
                                to="/icra-islemleri"
                                className="shrink-0 bg-red-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center gap-2"
                            >
                                Tüm İcra Hizmetleri <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tüm Hizmetlerimiz - İl/İlçe SEO */}
            <section className="py-16 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-xl lg:text-3xl font-black text-slate-900 tracking-tighter uppercase mb-3">
                            {city.name} {district ? district.name + " " : ""}<span className="text-blue-600">Tüm Tapu Hizmetleri</span>
                        </h3>
                        <p className="text-slate-500 text-sm font-medium max-w-2xl mx-auto">
                            {city.name} {district ? district.name + " " : ""}bölgesinde sunduğumuz tüm tapu ve gayrimenkul işlem takip hizmetleri
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {services.map((s) => (
                            <Link
                                key={s.slug}
                                to={`/tapu-islemleri/${s.slug}`}
                                className="bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 p-4 rounded-2xl text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-wider transition-all text-center"
                            >
                                {s.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <DocumentRequirements />
            <ServicesGrid />
            <ContactSection />
            <FAQ />
            <Footer />
        </div>
    );
};

export default CityPage;
