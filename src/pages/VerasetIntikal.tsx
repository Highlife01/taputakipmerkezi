import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InheritanceProcess from "@/components/InheritanceProcess";
import ServiceBenefits from "@/components/ServiceBenefits";
import SEO from "@/components/SEO";
import { Scale, FileText, Building2, Calculator, AlertCircle } from "lucide-react";

const VerasetIntikal = () => {
    const canonicalUrl = "https://www.taputakipmerkezi.com.tr/veraset-intikal";

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
                "name": "Veraset & İntikal",
                "item": canonicalUrl
            }
        ]
    };

    const faqData = {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Veraset ilamı nereden alınır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Veraset ilamı noterden veya Sulh Hukuk Mahkemesinden alınabilir. Nüfus kayıtlarında kapalı kayıt yoksa noterden hızlıca alınabilir. Kapalı kayıt varsa Sulh Hukuk Mahkemesi'ne başvurulur."
                }
            },
            {
                "@type": "Question",
                "name": "Miras paylaşımı nasıl yapılır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Veraset intikal işlemi tamamlandıktan sonra mirasçılar anlaşma sağlarsa paylı veya bağımsız mülkiyet şeklinde miras taksim sözleşmesi düzenlenir. Anlaşmazlık varsa ortaklığın giderilmesi (izale-i şuyu) veya diğer miras davaları gündeme gelir."
                }
            },
            {
                "@type": "Question",
                "name": "Emlak rayiç değeri nasıl hesaplanır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Veraset ve intikal işlemlerinde esas alınan emlak rayiç değeri, murisin (vefat eden kişinin) vefat tarihine göre belirlenir. Bu değer vergi hesaplamalarında ve harç bildirimlerde doğrudan etkilidir."
                }
            }
        ]
    };

    const howToSchema = {
        "@type": "HowTo",
        "name": "Miras Kalan Taşınmazın Veraset ve İntikal Süreci",
        "description": "Veraset ilamından tapu tesciline kadar miras kalan taşınmazların intikal rehberi.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Veraset İlamı Temini",
                "text": "Noterden veya Sulh Hukuk Mahkemesi'nden mirasçılık belgesi (veraset ilamı) alınır."
            },
            {
                "@type": "HowToStep",
                "name": "Veraset ve İntikal Vergisi Beyannamesi",
                "text": "İlgili vergi dairesine beyanname verilerek vergi ilişik kesme belgesi temin edilir."
            },
            {
                "@type": "HowToStep",
                "name": "Tapu Müdürlüğü Tescili",
                "text": "Belediyeden rayiç bedel yazısı ile birlikte Tapu Müdürlüğü'ne başvurularak mirasçılar adına yeni tapu senetleri tescil edilir."
            }
        ]
    };

    return (
        <div className="min-h-screen overflow-x-hidden">
            <SEO
                title="Veraset & İntikal Danışmanlığı - Miras İşlemleri | Tapu Takip Merkezi"
                description="Veraset ve intikal işlemleri, miras taksimi, veraset ilamı, vergi ilişiği kesme ve tapu tescilinde 81 ilde profesyonel danışmanlık hizmeti."
                url={canonicalUrl}
                keywords="veraset intikal, miras tapu devri, veraset ilamı, veraset ve intikal vergisi, miras taksim sözleşmesi, tapu tescil"
                schemas={[breadcrumbData, faqData, howToSchema]}
            />
            <WhatsAppButton />
            <Navbar />

            {/* Breadcrumb */}
            <div className="bg-slate-50 border-b py-3">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="flex text-xs font-bold uppercase tracking-wider text-slate-400 gap-2 items-center">
                        <a href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</a>
                        <span>/</span>
                        <span className="text-blue-600">Veraset & İntikal</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 px-4 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                            Veraset & İntikal <span className="text-blue-400">Danışmanlığı</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-4xl mx-auto font-medium leading-relaxed">
                            Bir kişinin vefatı sonrası geride kalan taşınır ve taşınmaz mal varlıklarının,
                            yasal mirasçılarına tapu ve ilgili kurumlar nezdinde devredilebilmesi için
                            veraset ve intikal işlemlerinin eksiksiz şekilde tamamlanması gerekir.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
                        <p className="text-lg text-white font-medium leading-relaxed">
                            <span className="font-black text-blue-400">TapuTakipMerkezi.com.tr</span>, bu süreci mirasçılar adına
                            başından sonuna kadar profesyonel olarak takip eder ve olası <span className="font-black text-yellow-300">hak kayıplarının önüne geçer</span>.
                        </p>
                    </div>

                    <div className="mt-12 bg-amber-500 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
                        <h3 className="font-black text-slate-900 text-lg mb-4 uppercase flex items-center gap-3">
                            <AlertCircle size={28} />
                            ⚠️ Önemli Bilgilendirme
                        </h3>
                        <p className="text-slate-900 font-medium leading-relaxed">
                            <span className="font-black">TapuTakipMerkezi.com.tr resmî kurum değildir.</span> Veraset ve intikal işlemlerinde
                            takip, danışmanlık ve rehberlik hizmeti sunar. Tapu işlemleri yetkili tapu müdürlükleri tarafından yürütülür.
                        </p>
                    </div>
                </div>
            </section>

            {/* Inheritance Process Component */}
            <InheritanceProcess />

            {/* Veraset İlamı */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-blue-100 decoration-4 underline-offset-8">
                            Resmi Belge
                        </h2>
                        <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                            Veraset İlamı <span className="text-blue-600">(Mirasçılık Belgesi)</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-10 rounded-3xl border-2 border-blue-200 shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <FileText className="text-blue-600" size={40} />
                                <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                                    Veraset İlamı Nedir?
                                </h4>
                            </div>
                            <div className="space-y-4">
                                <p className="text-slate-700 font-medium leading-relaxed">
                                    Veraset ilamı; murisin <span className="font-black">(vefat eden kişinin)</span>
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                                        <span className="text-blue-600 text-xl">✓</span>
                                        <span className="font-bold text-slate-900">Yasal mirasçılarının kimler olduğunu</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                                        <span className="text-blue-600 text-xl">✓</span>
                                        <span className="font-bold text-slate-900">Miras pay oranlarını</span>
                                    </li>
                                </ul>
                                <p className="text-slate-600 font-medium">
                                    gösteren <span className="font-black text-blue-600">resmî belgedir</span>.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl border-2 border-green-200 shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <Building2 className="text-green-600" size={40} />
                                <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                                    Nereden Alınır?
                                </h4>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-2xl">
                                    <p className="font-black text-green-800 mb-2 text-lg">✔ Noterden</p>
                                    <p className="text-sm text-slate-600 font-medium">
                                        📌 Nüfus kayıtlarında kapalı kayıt yoksa, noterden hızlıca alınabilir.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl">
                                    <p className="font-black text-green-800 mb-2 text-lg">✔ Sulh Hukuk Mahkemesinden</p>
                                    <p className="text-sm text-slate-600 font-medium">
                                        📌 Kapalı kayıt varsa, Sulh Hukuk Mahkemesi'ne başvurulur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Miras Payları */}
                    <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <Scale className="text-yellow-400" size={40} />
                            <h4 className="text-2xl font-black uppercase tracking-tight">
                                Miras Payları ve Sonraki İşlemler
                            </h4>
                        </div>
                        <p className="text-blue-100 font-medium text-lg leading-relaxed mb-6">
                            Veraset ilamında yer alan oranlar, <span className="font-black text-yellow-300">ilk intikal için geçerlidir</span>.
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                            <p className="font-medium mb-4">Mirasçılar daha sonra:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-600/30 p-4 rounded-xl">
                                    <p className="font-black">✓ Aralarında sözleşme yaparak</p>
                                </div>
                                <div className="bg-blue-600/30 p-4 rounded-xl">
                                    <p className="font-black">✓ Ya da dava yoluyla</p>
                                </div>
                            </div>
                            <p className="text-blue-200 mt-4 font-medium">
                                mirası farklı oran ve şekillerde paylaşabilirler.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emlak Rayiç Değeri */}
            <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white p-12 rounded-3xl shadow-2xl border-2 border-orange-200">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <Calculator className="text-orange-600 shrink-0" size={80} />
                            <div>
                                <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                                    Emlak Rayiç Değeri Nasıl Hesaplanır?
                                </h3>
                                <div className="bg-orange-100 p-6 rounded-2xl mb-6">
                                    <p className="text-orange-900 font-bold text-lg mb-2">
                                        📌 Veraset ve intikal işlemlerinde esas alınan emlak rayiç değeri,
                                    </p>
                                    <p className="text-orange-800 font-black text-xl">
                                        ➡️ Murisin vefat tarihine göre belirlenir.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-slate-50 p-5 rounded-2xl">
                                        <p className="font-black text-slate-900 mb-2">Bu değer;</p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-slate-700 font-medium">
                                                <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                                                Vergi hesaplamalarında
                                            </li>
                                            <li className="flex items-center gap-2 text-slate-700 font-medium">
                                                <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                                                Harç ve bildirimlerde
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-orange-600 text-white p-5 rounded-2xl flex items-center justify-center">
                                        <p className="font-black text-center text-lg">
                                            Doğrudan Etkilidir
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Benefits Component */}
            <ServiceBenefits />

            {/* TapuTakipMerkezi Services */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-blue-100 decoration-4 underline-offset-8">
                            Hizmetlerimiz
                        </h2>
                        <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                            TapuTakipMerkezi.com.tr <span className="text-blue-600">Ne Sağlar?</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Veraset ilamı süreci takibi", icon: "✅" },
                            { title: "Vergi dairesi işlemleri", icon: "✅" },
                            { title: "Tapu intikal başvurusu", icon: "✅" },
                            { title: "Sahada birebir refakat", icon: "✅" },
                            { title: "Eski dosyalarda çözüm", icon: "✅" },
                            { title: "Aile içi ihtilafı önleyici danışmanlık", icon: "✅" }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-3xl border-2 border-blue-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">{service.icon}</span>
                                    <p className="font-black text-slate-900 uppercase text-sm tracking-tight">
                                        {service.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default VerasetIntikal;
