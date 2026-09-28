import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { services } from "@/data/services";

const AllServices = () => {
    const canonicalUrl = "https://www.taputakipmerkezi.com.tr/hizmetler";

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
                "item": canonicalUrl
            }
        ]
    };

    const itemListSchema = {
        "@type": "ItemList",
        "name": "Tapu Takip Merkezi Tüm Hizmetler",
        "itemListElement": services.map((s, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "name": s.name,
            "url": `https://www.taputakipmerkezi.com.tr/tapu-islemleri/${s.slug}`
        }))
    };

    return (
        <div className="min-h-screen overflow-x-hidden">
            <SEO
                title="Tapu İşlemleri ve Hizmetlerimiz | Tapu Takip Merkezi"
                description="Tapu devri, veraset intikal, iskan sorgulama, ipotek fekki ve tüm resmi tapu işlemleriniz için profesyonel takip hizmetleri. 81 ilde uzman kadromuzla yanınızdayız."
                url={canonicalUrl}
                keywords="tapu işlemleri, tapu devri, veraset intikal, iskan sorgulama, ipotek kaldırma, harç hesaplama, tapu randevu, tapu danışmanlığı"
                schemas={[breadcrumbData, itemListSchema]}
            />
            <WhatsAppButton />
            <Navbar />

            <div className="bg-slate-50 border-b py-3">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="flex text-xs font-bold uppercase tracking-wider text-slate-400 gap-2 items-center">
                        <a href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</a>
                        <span>/</span>
                        <span className="text-blue-600">Hizmetlerimiz</span>
                    </nav>
                </div>
            </div>

            <Hero />

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-4">
                        Tüm Tapu <br className="md:hidden" />
                        <span className="text-blue-600">İşlemleriniz</span>
                    </h1>
                    <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                        81 ilde, tüm tapu müdürlüklerinde ve resmi kurumlarda işlemlerinizi sizin adınıza takip ediyoruz.
                        Profesyonel süreç yönetimi ile bürokratik engellere takılmadan zaman kazanın.
                    </p>
                </div>
            </div>

            <ServicesGrid />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default AllServices;
