import { useParams, Navigate } from "react-router-dom";
import { iller } from "@/data/turkiye";
import { services } from "@/data/services";
import { getServiceDetailBySlug } from "@/data/serviceDetails";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DocumentRequirements from "@/components/DocumentRequirements";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const ServicePage = () => {
    const { service: serviceSlug, il: ilSlug } = useParams();

    const service = services.find((s) => s.slug === serviceSlug);
    if (!service) return <Navigate to="/404" />;

    const serviceDetail = getServiceDetailBySlug(serviceSlug || "");

    const city = ilSlug ? iller.find((il) => il.slug === ilSlug) : null;
    if (ilSlug && !city) return <Navigate to="/404" />;

    const title = city
        ? `${city.name} ${service.name} Takip Hizmeti | Tapu Takip Merkezi`
        : `${service.name} İşlemleri ve Takip Hizmeti | Tapu Takip Merkezi`;

    const description = city
        ? `${city.name} ilinde ${service.name} işlemlerinizi sizin adınıza takip ediyoruz. Güvenilir ve hızlı resmi tapu süreçleri.`
        : `${service.name} işlemlerinde uzman desteği. Tapu Takip Merkezi ile tüm süreçleri profesyonelce yönetin.`;

    const canonicalUrl = `https://www.taputakipmerkezi.com.tr/tapu-islemleri/${serviceSlug}${city ? `/${ilSlug}` : ""}`;

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
                "name": "Hizmetlerimiz",
                "item": "https://www.taputakipmerkezi.com.tr/hizmetler"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": service.name,
                "item": canonicalUrl
            }
        ]
    };

    const serviceSchema = {
        "@type": "Service",
        "name": title,
        "description": description,
        "provider": {
            "@type": "Organization",
            "name": "Tapu Takip Merkezi",
            "url": "https://www.taputakipmerkezi.com.tr",
            "telephone": "+905320550945"
        },
        "areaServed": {
            "@type": "Country",
            "name": city ? city.name : "Turkey"
        }
    };

    const faqSchema = serviceDetail?.faqs?.length ? {
        "@type": "FAQPage",
        "mainEntity": serviceDetail.faqs.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    } : null;

    return (
        <div className="min-h-screen overflow-x-hidden animate-fade-in">
            <SEO
                title={title}
                description={description}
                url={canonicalUrl}
                keywords={`${service.name}, ${service.name} nasıl yapılır, ${city ? city.name + ' ' + service.name + ', ' : ''}tapu takip, tapu işlemleri, tapu danışmanlığı`}
                schemas={[breadcrumbData, serviceSchema, ...(faqSchema ? [faqSchema] : [])]}
            />
            <WhatsAppButton />
            <Navbar />

            <div className="bg-slate-50 border-b py-3">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="flex text-xs font-bold uppercase tracking-wider text-slate-400 gap-2 items-center">
                        <a href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</a>
                        <span>/</span>
                        <a href="/tapu-islemleri" className="hover:text-blue-600 transition-colors">Tapu İşlemleri</a>
                        <span>/</span>
                        <span className="text-blue-600">{service.name} {city ? `(${city.name})` : ""}</span>
                    </nav>
                </div>
            </div>

            <Hero />

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h1 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            {city ? city.name : "Türkiye Geneli"} <br />
                            <span className="text-blue-600">{service.name} Hizmeti</span>
                        </h1>

                        {/* GEO Direct Answer Snippet Box (Yapay Zeka ve Arama Motoru Özet Bloğu) */}
                        <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-100 p-6 rounded-3xl">
                            <h3 className="text-xs font-black text-blue-900 uppercase tracking-widest mb-2">
                                📌 Hızlı Bilgi & İşlem Özeti
                            </h3>
                            <p className="text-sm font-medium text-slate-700 leading-relaxed">
                                <strong>{service.name}</strong>, gayrimenkul mülkiyet süreçlerinde Tapu ve Kadastro Genel Müdürlüğü (TKGM) ve ilgili kamu kurumları nezdinde yürütülen resmi bir işlemdir.
                                Tapu Takip Merkezi olarak, başvuru evraklarının hazırlanmasından harç ödemelerine ve resmi senet imzalanmasına kadar olan tüm aşamaları adınıza güvenle takip ediyoruz.
                            </p>
                        </div>

                        {/* Detailed Description */}
                        {serviceDetail && (
                            <>
                                <div className="prose prose-slate max-w-none">
                                    {serviceDetail.detailedDescription.map((para, idx) => (
                                        <p key={idx} className="text-lg text-slate-600 leading-relaxed font-medium mb-4">
                                            {para}
                                        </p>
                                    ))}
                                </div>

                                {/* Process Steps */}
                                <div className="bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100">
                                    <h3 className="text-xl font-black text-blue-900 mb-6 uppercase flex items-center gap-3">
                                        <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                                        İşlem Süreci
                                    </h3>
                                    <div className="space-y-4">
                                        {serviceDetail.process.map((step, idx) => (
                                            <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm">
                                                <div className="w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-sm shrink-0">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-slate-900 text-sm uppercase mb-1">
                                                        {step}
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Required Documents */}
                                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                                    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase flex items-center gap-3">
                                        <span className="w-2 h-8 bg-slate-900 rounded-full"></span>
                                        Gerekli Belgeler
                                    </h3>
                                    <ul className="grid sm:grid-cols-2 gap-3 list-none p-0">
                                        {serviceDetail.requiredDocs.map((doc, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-white p-3 rounded-xl border border-slate-100">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                                                {doc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* FAQ Section for Service */}
                                {serviceDetail.faqs && serviceDetail.faqs.length > 0 && (
                                    <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-100">
                                        <h3 className="text-xl font-black text-slate-900 mb-6 uppercase flex items-center gap-3">
                                            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                                            Sıkça Sorulan Sorular
                                        </h3>
                                        <div className="space-y-4">
                                            {serviceDetail.faqs.map((item, idx) => (
                                                <div key={idx} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                                                    <h4 className="text-sm font-black text-slate-800 uppercase mb-2">
                                                        {item.q}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                                        {item.a}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        {!serviceDetail && (
                            <div className="space-y-6">
                                <div className="bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100">
                                    <h3 className="text-xl font-black text-blue-900 mb-4 uppercase">
                                        Hizmet Kapsamı
                                    </h3>
                                    <ul className="grid md:grid-cols-2 gap-4 list-none p-0 text-sm font-bold text-blue-800 uppercase tracking-wide">
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                            Hızlı Randevu ve Başvuru
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                            Evrak Kontrolü ve Hazırlık
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                            Süreç Takibi ve Bilgilendirme
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                            İsteğe Bağlı Harç Ödemesi
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-slate-600">
                                    {service.description} Profesyonel ekibimizle sürecin her aşamasında size bilgi veriyor,
                                    tapu dairesinde beklemenize gerek kalmadan işlemlerinizi sonuçlandırıyoruz.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="space-y-8">
                        <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl">
                            <h3 className="text-xl font-black mb-4 uppercase italic">Hemen Başlayın</h3>
                            <p className="text-slate-300 text-sm mb-6">
                                {service.name} işleminiz için uzman danışmanlarımızdan ücretsiz bilgi alabilirsiniz.
                            </p>
                            <a href="https://wa.me/905320550945" className="block w-full bg-blue-600 text-white py-4 rounded-2xl text-center font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-colors">
                                WHATSAPP DESTEK
                            </a>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-[2rem] border-2 border-slate-100">
                            <h3 className="font-black text-slate-800 uppercase tracking-widest text-sm mb-6 pb-4 border-b">
                                Diğer Hizmetlerimiz
                            </h3>
                            <div className="flex flex-col gap-3">
                                {services.filter(s => s.slug !== serviceSlug).slice(0, 8).map(s => (
                                    <a key={s.slug} href={`/tapu-islemleri/${s.slug}`} className="group flex items-center justify-between p-3 rounded-xl bg-white border border-transparent hover:border-blue-200 transition-all font-bold text-xs text-slate-500 hover:text-blue-600">
                                        {s.name}
                                        <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-blue-600 rounded-full transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DocumentRequirements />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default ServicePage;
