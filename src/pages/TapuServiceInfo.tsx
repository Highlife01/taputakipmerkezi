import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProcessTimeline from "@/components/ProcessTimeline";
import PaymentMethods from "@/components/PaymentMethods";
import ServiceBenefits from "@/components/ServiceBenefits";
import SEO from "@/components/SEO";
import { Phone, MessageSquare, Shield, ExternalLink, CreditCard, FileText, IdCard, Camera, FileSignature, Building2, Smartphone } from "lucide-react";

const TapuServiceInfo = () => {
    const canonicalUrl = "https://www.taputakipmerkezi.com.tr/tapu-sureci";

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
                "name": "Tapu Süreci",
                "item": canonicalUrl
            }
        ]
    };

    const faqData = {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Tapu işlemlerinde kimler işlem yapabilir?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tapu işlemlerinde yalnızca hak sahibi, yetkili vekil veya yetkilendirilmiş emlakçı işlem yapabilir. Resmî yetkisi bulunmayan kişi ve aracılara itibar edilmemelidir."
                }
            },
            {
                "@type": "Question",
                "name": "Tapu randevusu nasıl alınır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tapu randevusu Alo 181 Çağrı Merkezi veya randevu.tkgm.gov.tr üzerinden e-randevu sistemi ile alınabilir. Randevulu başvurular sıra beklemeden işlem yapılmasını sağlar."
                }
            },
            {
                "@type": "Question",
                "name": "DASK ne zaman zorunludur?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DASK (Zorunlu Deprem Sigortası) konut, mesken ve bina satışlarında, arsa üzerinde bina bulunması durumunda ve ana taşınmazda mesken ile iş yeri birlikte ise zorunludur."
                }
            }
        ]
    };

    const howToSchema = {
        "@type": "HowTo",
        "name": "Tapu Takip ve Devir Süreci Nasıl İşler?",
        "description": "Tapu müdürlüklerinde başvuru, harç ödeme ve tescil sürecinin adım adım rehberi.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Evrak ve Başvuru Hazırlığı",
                "text": "Taşınmaza ait tapu senedi, kimlik belgeleri, rayiç bedel yazısı ve DASK poliçesi temin edilir."
            },
            {
                "@type": "HowToStep",
                "name": "Web Tapu Başvurusu",
                "text": "Web Tapu sistemi üzerinden başvuru yapılır ve tapu harcı tahakkuk mesajı beklenir."
            },
            {
                "@type": "HowToStep",
                "name": "Harç Ödemesi ve Randevu",
                "text": "Harç ve döner sermaye bedelleri ödendikten sonra belirlenen randevu saatinde imzalar atılır."
            }
        ]
    };

    return (
        <div className="min-h-screen overflow-x-hidden">
            <SEO
                title="Tapu Takip Hizmetleri - Nasıl Çalışır? | Tapu Takip Merkezi"
                description="Tapu işlemlerinde başvuru yöntemleri, işlem süreci, gerekli belgeler, harç ödeme seçenekleri ve e-devlet Web Tapu takip sistemi rehberi."
                url={canonicalUrl}
                keywords="tapu süreci, tapu randevu, web tapu takip, tapu harcı ödeme, tapu devri nasıl yapılır"
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
                        <span className="text-blue-600">Tapu Süreci</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 py-24 px-4 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                            Tapu Takip <span className="text-blue-400">Hizmetleri</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-4xl mx-auto font-medium leading-relaxed">
                            Tapu işlemleri; şahsen, noterden verilen vekâletname ile yetkilendirilen vekil aracılığıyla
                            veya uzman tapu takip danışmanları desteğiyle yürütülebilir.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
                        <p className="text-lg text-white font-medium leading-relaxed">
                            <span className="font-black text-blue-400">TapuTakipMerkezi.com.tr</span>, tapu müdürlüklerinde yapılacak işlemlerde
                            evrak hazırlığı, başvuru takibi ve süreç kontrolünü sizin adınıza profesyonel olarak gerçekleştirir.
                        </p>
                    </div>

                    <div className="mt-12 bg-yellow-500 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
                        <h3 className="font-black text-slate-900 text-lg mb-4 uppercase flex items-center gap-3">
                            <Shield size={28} />
                            ⚠️ Önemli Bilgilendirme
                        </h3>
                        <p className="text-slate-900 font-medium leading-relaxed">
                            Tapu işlemlerinde yalnızca <span className="font-black">hak sahibi, yetkili vekil veya yetkilendirilmiş emlakçı</span> işlem yapabilir.
                            Resmî yetkisi bulunmayan kişi ve aracılara itibar edilmemelidir.
                        </p>
                    </div>
                </div>
            </section>

            {/* Başvuru Yöntemleri */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-blue-100 decoration-4 underline-offset-8">
                            Başvuru Seçenekleri
                        </h2>
                        <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                            Tapu Müdürlüklerinde <span className="text-blue-600">Başvuru Yöntemleri</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-10 rounded-3xl border-2 border-blue-200 shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl">
                                    1
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                                    Şahsen veya Yetkili Vekil
                                </h4>
                            </div>
                            <p className="text-slate-700 font-medium leading-relaxed">
                                Taşınmaz maliki veya <span className="font-black text-blue-600">noter onaylı vekili</span>,
                                gerekli belgelerle tapu müdürlüğüne başvurur.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl border-2 border-green-200 shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-green-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl">
                                    2
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                                    Alo 181 / E-Randevu
                                </h4>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Phone className="text-green-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <p className="font-black text-slate-900 mb-1">Alo 181 Çağrı Merkezi</p>
                                        <p className="text-slate-600 text-sm font-medium">Telefon ile hızlı randevu</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <ExternalLink className="text-green-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <p className="font-black text-slate-900 mb-1">randevu.tkgm.gov.tr</p>
                                        <p className="text-slate-600 text-sm font-medium">Online randevu sistemi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 bg-green-100 p-4 rounded-2xl">
                                <p className="text-green-900 font-bold text-sm">
                                    📌 Randevulu başvurular, sıra beklemeden işlem yapılmasını sağlar ve zaman kaybını önler.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline Component */}
            <ProcessTimeline />

            {/* Payment Methods Component */}
            <PaymentMethods />

            {/* Gerekli Belgeler */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-blue-100 decoration-4 underline-offset-8">
                            Evrak Listesi
                        </h2>
                        <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                            Tapu İşlemlerinde <span className="text-blue-600">Gerekli Belgeler</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Kimlik */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:border-blue-500 transition-all">
                            <div className="mb-6 inline-block p-5 bg-blue-600 rounded-2xl text-white">
                                <IdCard size={32} />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-4 uppercase">✔ Kimlik Belgesi</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">T.C. Kimlik Kartı</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">Pasaport (yabancılar için)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">Avukat/milletvekili kimliği</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">Mavi Kart (şartlara bağlı)</span>
                                </li>
                            </ul>
                            <p className="text-red-600 font-bold text-xs mt-4 italic">
                                ⚠️ Sürücü belgesi ve personel kartları geçerli değildir.
                            </p>
                        </div>

                        {/* Fotoğraf */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:border-blue-500 transition-all">
                            <div className="mb-6 inline-block p-5 bg-blue-600 rounded-2xl text-white">
                                <Camera size={32} />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-4 uppercase">✔ Fotoğraf</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">Son 6 ay içinde çekilmiş</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">6×4 cm vesikalık</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">Orijinal fotoğraf</span>
                                </li>
                            </ul>
                            <p className="text-red-600 font-bold text-xs mt-4 italic">
                                ⚠️ Fotokopi kabul edilmez
                            </p>
                        </div>

                        {/* Vekâletname */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:border-blue-500 transition-all">
                            <div className="mb-6 inline-block p-5 bg-blue-600 rounded-2xl text-white">
                                <FileSignature size={32} />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-4 uppercase">✔ Vekâletname</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">Noter veya konsolosluk onaylı</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">Yurt dışında Apostil gerekebilir</span>
                                </li>
                            </ul>
                        </div>

                        {/* DASK */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:border-blue-500 transition-all">
                            <div className="mb-6 inline-block p-5 bg-blue-600 rounded-2xl text-white">
                                <Shield size={32} />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-4 uppercase">✔ DASK Sigortası</h4>
                            <p className="text-slate-700 font-medium text-sm mb-3">Zorunlu Deprem Sigortası aşağıdaki durumlarda gereklidir:</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">Konut, mesken, bina satışları</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">Arsa üzerinde bina bulunması</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">Mesken + iş yeri birlikte ise</span>
                                </li>
                            </ul>
                        </div>

                        {/* Emlak Beyan */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:border-blue-500 transition-all">
                            <div className="mb-6 inline-block p-5 bg-blue-600 rounded-2xl text-white">
                                <Building2 size={32} />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-4 uppercase">✔ Emlak Beyan Değeri</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">Taşınmazın bulunduğu belediyeden alınır</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-black mt-1">•</span>
                                    <span className="text-slate-700 font-medium">İşlem yapılan yıla ait olmalıdır</span>
                                </li>
                            </ul>
                        </div>

                        {/* E-Devlet */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:border-blue-500 transition-all">
                            <div className="mb-6 inline-block p-5 bg-blue-600 rounded-2xl text-white">
                                <Smartphone size={32} />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-4 uppercase">E-Devlet ile Takip</h4>
                            <p className="text-slate-700 font-medium text-sm mb-3">
                                Tapu işlemlerinizle ilgili tüm gelişmeler, e-Devlet üzerinden tanımlı cep telefonunuza SMS olarak iletilir.
                            </p>
                            <div className="bg-green-50 p-4 rounded-2xl">
                                <p className="text-green-900 font-bold text-xs">
                                    📌 turkiye.gov.tr üzerinden tüm hizmetlere ulaşabilirsiniz
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Takasbank */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-12 shadow-2xl text-white">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <CreditCard size={80} className="shrink-0" />
                            <div>
                                <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">
                                    Takasbank ile Güvenli Satış Bedeli Transferi
                                </h3>
                                <p className="text-green-100 font-medium text-lg leading-relaxed mb-4">
                                    Taşınmaz alım-satım bedeli, <span className="font-black text-yellow-300">Takasbank güvencesiyle</span> el değiştirir.
                                </p>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                                    <p className="font-bold mb-2">Satış tamamlanıp tapu alıcı adına tescil edildiğinde;</p>
                                    <p className="text-yellow-300 font-black text-xl">
                                        💳 Para, alıcının hesabından anlık olarak satıcıya aktarılır.
                                    </p>
                                </div>
                                <div className="mt-6 grid md:grid-cols-3 gap-4">
                                    <div className="bg-white/10 p-4 rounded-xl">
                                        <p className="font-black text-sm">✓ Dolandırıcılık riski azalır</p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-xl">
                                        <p className="font-black text-sm">✓ Nakit güvenliği sağlanır</p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-xl">
                                        <p className="font-black text-sm">✓ Taraflar arası güven artar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Benefits Component */}
            <ServiceBenefits />

            {/* Resmi Kurum */}
            <section className="py-16 bg-slate-100 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">
                        Resmî Kurum Bilgilendirmesi
                    </h3>
                    <p className="text-slate-700 font-medium mb-6">
                        Tapu işlemleri <span className="font-black">Tapu ve Kadastro Genel Müdürlüğü</span> tarafından yürütülmektedir.
                    </p>
                    <div className="bg-white p-6 rounded-2xl inline-block shadow-lg">
                        <p className="text-sm text-slate-600 font-bold mb-2">📍 Tapu müdürlüklerinin iletişim bilgileri:</p>
                        <a href="https://www.tkgm.gov.tr/tasra" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-black text-lg hover:underline flex items-center justify-center gap-2">
                            tkgm.gov.tr/tasra
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TapuServiceInfo;
