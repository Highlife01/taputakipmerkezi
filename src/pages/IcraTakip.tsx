import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";
import SchemaData from "@/components/SchemaData";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Gavel, ShieldOff, Megaphone, FolderClosed, Search, AlertCircle, FileText, Scale, ArrowRight, Clock, CheckCircle2, XCircle, Zap, BookOpen } from "lucide-react";

const icraServices = [
    {
        title: "İcra Takip İşlemleri",
        slug: "icra-takip",
        desc: "İcra dairelerindeki taşınmaz ile ilgili tüm takip süreçlerinin profesyonel yönetimi.",
        icon: Gavel,
        color: "blue"
    },
    {
        title: "Haciz Kaldırma (Haciz Fekki)",
        slug: "haciz-kaldirma",
        desc: "Tapu üzerindeki haciz şerhlerinin kaldırılması ve borç ödeme süreçlerinin takibi.",
        icon: ShieldOff,
        color: "red"
    },
    {
        title: "İcra Satış (İhale) Takibi",
        slug: "icra-satis-takibi",
        desc: "İcra yoluyla satışa çıkarılan taşınmazların ihale süreç takibi.",
        icon: Megaphone,
        color: "orange"
    },
    {
        title: "İcra Dosyası Kapatma",
        slug: "icra-dosyasi-kapatma",
        desc: "Borç ödendikten sonra icra dosyasının kapatılması ve tapu kayıtlarının temizlenmesi.",
        icon: FolderClosed,
        color: "green"
    },
    {
        title: "Haciz Şerhi Sorgulama",
        slug: "haciz-serhi-sorgulama",
        desc: "Tapu üzerinde haciz, ihtiyati tedbir veya icra şerhi olup olmadığının araştırılması.",
        icon: Search,
        color: "purple"
    },
    {
        title: "E-Haciz & Bloke Kaldırma",
        slug: "e-haciz-kaldirma",
        desc: "Vergi dairelerinden uygulanan elektronik haciz (6183 s.K.) ve banka blokelerinin kaldırılması danışmanlığı.",
        icon: Zap,
        color: "yellow"
    },
];

const IcraTakip = () => {
    const canonicalUrl = "https://www.taputakipmerkezi.com.tr/icra-islemleri";

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
                "name": "İcra İşlemleri",
                "item": canonicalUrl
            }
        ]
    };

    const faqData = {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Taşınmaz üzerindeki haciz nasıl kaldırılır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Borç tamamen ödendikten sonra icra müdürlüğünden haciz kaldırma (fek) yazısı alınarak tapu müdürlüğüne başvurulur. Tapu müdürlüğü haciz şerhini siler."
                }
            },
            {
                "@type": "Question",
                "name": "İcra satışında taşınmaz piyasa değerinin altında mı satılır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "İcra satışında birinci ihalede taşınmaz kıymet takdir bedelinin %50'sinden az olmamak üzere satılır. İkinci ihalede daha düşük fiyata satılabilir."
                }
            },
            {
                "@type": "Question",
                "name": "Hacizli taşınmaz satılabilir mi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Haciz şerhi bulunan taşınmazın normal yollarla satışı ve devri mümkün değildir. Önce hacizlerin kaldırılması gerekir. İcra yoluyla satış ise icra müdürlüğü tarafından yapılır."
                }
            },
            {
                "@type": "Question",
                "name": "Borç ödendikten sonra icra dosyası otomatik kapanır mı?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hayır, borç ödendikten sonra alacaklının talebi veya icra müdürlüğüne başvuru gerekir. Ayrıca tapu üzerindeki haciz şerhinin kaldırılması için ayrı işlem yapılmalıdır."
                }
            }
        ]
    };

    const icraServiceSchema = {
        "@type": "Service",
        "name": "İcra Takip & Haciz Kaldırma Danışmanlığı",
        "description": "2004 sayılı İcra ve İflas Kanunu kapsamında taşınmaz üzerindeki haciz şerhi araştırması, haciz kaldırma ve icra satış takip danışmanlığı.",
        "provider": {
            "@type": "Organization",
            "name": "Tapu Takip Merkezi",
            "url": "https://www.taputakipmerkezi.com.tr"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Turkey"
        }
    };

    return (
        <div className="min-h-screen overflow-x-hidden">
            <SEO
                title="İcra Takip Danışmanlığı - Haciz Kaldırma & İhale Takibi | Tapu Takip Merkezi"
                description="2004 sayılı İİK kapsamında taşınmaz icra takip danışmanlığı: tapu haciz kaldırma (fek), icra satış takibi, dosya kapatma ve e-haciz kaldırma danışmanlığı."
                url={canonicalUrl}
                keywords="icra takip, haciz kaldırma, tapu haciz fekki, icra ihale takibi, icra dosyası kapatma, e-haciz kaldırma, haciz sorgulama"
                schemas={[breadcrumbData, faqData, icraServiceSchema]}
            />
            <WhatsAppButton />
            <Navbar />

            {/* Breadcrumb */}
            <div className="bg-slate-50 border-b py-3">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="flex text-xs font-bold uppercase tracking-wider text-slate-400 gap-2 items-center">
                        <a href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</a>
                        <span>/</span>
                        <span className="text-blue-600">İcra İşlemleri</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 py-24 px-4 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 bg-red-600/30 border border-red-500/40 rounded-full px-6 py-2 mb-8">
                            <Gavel size={18} className="text-red-400" />
                            <span className="text-red-200 font-bold text-xs uppercase tracking-widest">İcra & Haciz İşlemleri</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                            İcra Takip <span className="text-red-400">İşlemleri</span>
                        </h1>
                        <p className="text-xl text-red-100 max-w-4xl mx-auto font-medium leading-relaxed">
                            Taşınmaz üzerindeki icra takipleri, haciz şerhleri, icra satışları ve dosya kapatma
                            süreçlerinde profesyonel takip ve danışmanlık hizmeti sunuyoruz.
                            Haklarınızı koruyoruz.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
                        <p className="text-lg text-white font-medium leading-relaxed">
                            <span className="font-black text-red-400">TapuTakipMerkezi.com.tr</span>, icra daireleri ve tapu müdürlükleri
                            nezdinde taşınmaz ile ilgili tüm icra süreçlerini sizin adınıza takip eder.
                            <span className="font-black text-yellow-300"> Hak kayıplarının ve gecikmelerin önüne geçer.</span>
                        </p>
                    </div>

                    <div className="mt-12 bg-amber-500 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
                        <h3 className="font-black text-slate-900 text-lg mb-4 uppercase flex items-center gap-3">
                            <AlertCircle size={28} />
                            ⚠️ Önemli Bilgilendirme
                        </h3>
                        <p className="text-slate-900 font-medium leading-relaxed">
                            <span className="font-black">TapuTakipMerkezi.com.tr resmî kurum değildir.</span> İcra ve haciz işlemlerinde
                            takip, danışmanlık ve rehberlik hizmeti sunar. İcra işlemleri yetkili icra müdürlükleri,
                            tapu işlemleri ise yetkili tapu müdürlükleri tarafından yürütülür.
                        </p>
                    </div>
                </div>
            </section>

            {/* İcra Süreci Genel Bilgi */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-red-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-red-100 decoration-4 underline-offset-8">
                            Süreç Bilgisi
                        </h2>
                        <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                            İcra Takip Süreci <span className="text-red-600">Nasıl İşler?</span>
                        </h3>
                        <p className="text-slate-500 max-w-3xl mx-auto font-medium">
                            Taşınmaz üzerindeki icra işlemleri belirli bir hukuki süreç çerçevesinde yürütülür.
                            Aşağıda genel akışı görebilirsiniz.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                step: "1",
                                title: "İcra Takibi Başlatılır",
                                desc: "Alacaklı, icra dairesine başvurarak borçlu aleyhine icra takibi başlatır.",
                                icon: FileText,
                                color: "bg-blue-600"
                            },
                            {
                                step: "2",
                                title: "Haciz İşlemi Uygulanır",
                                desc: "Borç ödenmezse taşınmaz üzerine haciz konulur ve tapu kaydına şerh düşülür.",
                                icon: ShieldOff,
                                color: "bg-red-600"
                            },
                            {
                                step: "3",
                                title: "Kıymet Takdiri Yapılır",
                                desc: "Taşınmazın değeri bilirkişi tarafından belirlenir ve satış hazırlıkları başlar.",
                                icon: Scale,
                                color: "bg-orange-600"
                            },
                            {
                                step: "4",
                                title: "İcra Satışı / Ödeme",
                                desc: "Borç ödenmezse taşınmaz ihaleye çıkarılır veya borç ödenerek haciz kaldırılır.",
                                icon: Gavel,
                                color: "bg-green-600"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-200 relative">
                                <div className={`${item.color} text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg mb-6 shadow-lg`}>
                                    {item.step}
                                </div>
                                <h4 className="font-black text-slate-900 text-lg mb-3 uppercase tracking-tight">
                                    {item.title}
                                </h4>
                                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Borçlu vs Alacaklı */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl border-2 border-red-200 shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <XCircle className="text-red-600" size={40} />
                                <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                                    Borçlu İseniz
                                </h4>
                            </div>
                            <div className="space-y-4">
                                <p className="text-slate-700 font-medium leading-relaxed">
                                    Taşınmazınız üzerine haciz konulmuşsa veya icra satışı süreci başladıysa:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                                        <span className="text-red-600 text-xl font-black">1</span>
                                        <span className="font-bold text-slate-900">Borcu ödeyerek veya taksitlendirerek haczi kaldırabilirsiniz</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                                        <span className="text-red-600 text-xl font-black">2</span>
                                        <span className="font-bold text-slate-900">Alacaklı ile sulh anlaşması yapabilirsiniz</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                                        <span className="text-red-600 text-xl font-black">3</span>
                                        <span className="font-bold text-slate-900">Menfi tespit davası veya itiraz yollarına başvurabilirsiniz</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl border-2 border-green-200 shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <CheckCircle2 className="text-green-600" size={40} />
                                <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                                    Alacaklı İseniz
                                </h4>
                            </div>
                            <div className="space-y-4">
                                <p className="text-slate-700 font-medium leading-relaxed">
                                    Alacağınızı tahsil etmek için taşınmaz üzerinden icra takibi başlattıysanız:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                                        <span className="text-green-600 text-xl font-black">1</span>
                                        <span className="font-bold text-slate-900">İcra dosyasının etkin takibi ve süresi içinde işlem yapılması</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                                        <span className="text-green-600 text-xl font-black">2</span>
                                        <span className="font-bold text-slate-900">Kıymet takdiri ve satış sürecinin hızlandırılması</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                                        <span className="text-green-600 text-xl font-black">3</span>
                                        <span className="font-bold text-slate-900">İhale sonrası tescil işlemlerinin takibi</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* İcra Hizmetlerimiz */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-red-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-red-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-red-100 decoration-4 underline-offset-8">
                            Hizmetlerimiz
                        </h2>
                        <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                            İcra & Haciz <span className="text-red-600">Hizmetlerimiz</span>
                        </h3>
                        <p className="text-slate-500 max-w-3xl mx-auto font-medium">
                            Taşınmaz ile ilgili tüm icra süreçlerinde profesyonel takip ve danışmanlık hizmetleri sunuyoruz.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {icraServices.map((s, i) => {
                            const IconComponent = s.icon;
                            return (
                                <Link
                                    key={i}
                                    to={`/tapu-islemleri/${s.slug}`}
                                    className="group bg-white p-10 rounded-[2.5rem] border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:border-red-200 transition-all hover:scale-105 duration-500 relative overflow-hidden flex flex-col items-start"
                                >
                                    <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">
                                        YENİ
                                    </div>
                                    <div className="mb-6 inline-block p-5 bg-red-50 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-500 shadow-inner">
                                        <IconComponent size={28} />
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 mb-3 leading-tight uppercase group-hover:text-red-600 transition-colors">
                                        {s.title}
                                    </h4>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed mb-6">
                                        {s.desc}
                                    </p>
                                    <div className="mt-auto flex items-center gap-2 text-red-600 font-black text-[10px] uppercase tracking-widest">
                                        DETAYLAR <ArrowRight size={12} />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Önemli Bilgiler - Haciz */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-red-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-red-100 decoration-4 underline-offset-8">
                            Bilmeniz Gerekenler
                        </h2>
                        <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                            Haciz & İcra Hakkında <span className="text-red-600">Önemli Bilgiler</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-2xl">
                            <h4 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                                <ShieldOff className="text-red-400" size={32} />
                                Haciz Türleri
                            </h4>
                            <div className="space-y-4">
                                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl">
                                    <p className="font-black text-red-400 mb-2">Kesin Haciz</p>
                                    <p className="text-slate-300 font-medium text-sm">
                                        İcra takibi kesinleştikten sonra borçlunun taşınmazına konulan hacizdir. Ödeme emrine itiraz edilmemesi veya itirazın kaldırılması halinde uygulanır.
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl">
                                    <p className="font-black text-orange-400 mb-2">İhtiyati Haciz</p>
                                    <p className="text-slate-300 font-medium text-sm">
                                        Mahkeme kararıyla alacağın güvence altına alınması için konulan geçici hacizdir. Borçlunun mallarını kaçırma ihtimali olduğunda uygulanır.
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl">
                                    <p className="font-black text-yellow-400 mb-2">İhtiyati Tedbir</p>
                                    <p className="text-slate-300 font-medium text-sm">
                                        Dava konusu taşınmazın devir ve tescilinin önlenmesi için mahkemece konulan tedbirdir. Taşınmazın mülkiyeti tartışmalı olduğunda uygulanır.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-3xl border-2 border-red-200">
                                <h4 className="font-black text-slate-900 text-lg mb-4 uppercase flex items-center gap-3">
                                    <Clock className="text-red-600" size={24} />
                                    Zamanaşımı Süreleri
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                                        <span className="text-red-600 font-black text-sm shrink-0">10 YIL</span>
                                        <span className="text-slate-700 font-medium text-sm">Genel alacaklarda zamanaşımı süresi</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                                        <span className="text-red-600 font-black text-sm shrink-0">5 YIL</span>
                                        <span className="text-slate-700 font-medium text-sm">Kira, nafaka gibi dönemsel alacaklarda</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                                        <span className="text-red-600 font-black text-sm shrink-0">1 YIL</span>
                                        <span className="text-slate-700 font-medium text-sm">Senet ve çek alacaklarında</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 rounded-3xl text-white shadow-xl">
                                <div className="flex items-center gap-4">
                                    <AlertCircle className="w-12 h-12 text-white shrink-0" />
                                    <div>
                                        <p className="text-red-100 font-bold text-sm uppercase tracking-widest mb-1">Dikkat!</p>
                                        <p className="font-black text-lg">
                                            Hacizli taşınmaz satılamaz, devredilemez ve ipotek verilemez.
                                        </p>
                                        <p className="text-red-100 font-medium text-sm mt-2">
                                            Taşınmaz satın almadan önce mutlaka takyidat sorgulaması yaptırın.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Yasal Çerçeve & Mevzuat */}
            <section className="py-24 bg-gradient-to-br from-blue-50 to-slate-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-blue-100 decoration-4 underline-offset-8">
                            Yasal Çerçeve
                        </h2>
                        <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                            İlgili Mevzuat <span className="text-blue-600">& Kanunlar</span>
                        </h3>
                        <p className="text-slate-500 max-w-3xl mx-auto font-medium">
                            Taşınmaz üzerindeki icra işlemleri aşağıdaki temel kanunlar çerçevesinde yürütülmektedir.
                            Tüm danışmanlık hizmetlerimiz bu mevzuata uygun olarak verilmektedir.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-10 rounded-3xl border-2 border-blue-200 shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <BookOpen className="text-blue-600" size={36} />
                                <div>
                                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                                        2004 Sayılı İİK
                                    </h4>
                                    <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">
                                        İcra ve İflas Kanunu
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { madde: "Madde 79-99", desc: "Haciz işlemleri ve taşınmaz haczi usulü" },
                                    { madde: "Madde 106-110", desc: "Taşınmaz satışı ve ihale süreci" },
                                    { madde: "Madde 123-135", desc: "Açık artırma ile satış ve ihale şartları" },
                                    { madde: "Madde 150/ı", desc: "İpoteğin paraya çevrilmesi" },
                                    { madde: "Madde 58-72", desc: "Ödeme emri, itiraz ve icra takibinin kesinleşmesi" },
                                    { madde: "Madde 33", desc: "İcra emrine itiraz (ilamlı takip)" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-blue-50 p-4 rounded-2xl">
                                        <span className="text-blue-600 font-black text-xs shrink-0 min-w-[90px]">{item.madde}</span>
                                        <span className="text-slate-700 font-medium text-sm">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white p-10 rounded-3xl border-2 border-orange-200 shadow-lg">
                                <div className="flex items-center gap-4 mb-6">
                                    <Zap className="text-orange-600" size={36} />
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                                            6183 Sayılı Kanun
                                        </h4>
                                        <p className="text-orange-600 text-xs font-bold uppercase tracking-widest">
                                            Amme Alacaklarının Tahsil Usulü
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { madde: "Madde 62", desc: "Haciz uygulama (e-haciz dahil) usulü" },
                                        { madde: "Madde 55-60", desc: "Ödeme emri tebliği ve itiraz süresi (15 gün)" },
                                        { madde: "Madde 58", desc: "Ödeme emrine itiraz hakkı" },
                                        { madde: "Madde 48", desc: "Tecil ve taksitlendirme imkânı" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-orange-50 p-4 rounded-2xl">
                                            <span className="text-orange-600 font-black text-xs shrink-0 min-w-[90px]">{item.madde}</span>
                                            <span className="text-slate-700 font-medium text-sm">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-10 rounded-3xl border-2 border-green-200 shadow-lg">
                                <div className="flex items-center gap-4 mb-6">
                                    <Scale className="text-green-600" size={36} />
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                                            Diğer İlgili Mevzuat
                                        </h4>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { madde: "4721 s. TMK", desc: "Türk Medeni Kanunu - Taşınmaz mülkiyeti ve tapu sicili" },
                                        { madde: "6100 s. HMK", desc: "Hukuk Muhakemeleri Kanunu - İhtiyati tedbir" },
                                        { madde: "2644 s. TKK", desc: "Tapu Kanunu - Tapu sicil işlemleri" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-green-50 p-4 rounded-2xl">
                                            <span className="text-green-600 font-black text-xs shrink-0 min-w-[90px]">{item.madde}</span>
                                            <span className="text-slate-700 font-medium text-sm">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-8 rounded-3xl border-2 border-amber-200">
                        <div className="flex items-start gap-4">
                            <AlertCircle className="text-amber-600 shrink-0 mt-1" size={28} />
                            <div>
                                <h4 className="font-black text-slate-900 text-lg mb-2 uppercase">Danışmanlık Kapsamı Hakkında</h4>
                                <p className="text-slate-700 font-medium text-sm leading-relaxed">
                                    TapuTakipMerkezi.com.tr, yukarıda belirtilen mevzuat çerçevesinde <strong>takip, danışmanlık ve rehberlik</strong> hizmeti sunmaktadır.
                                    Avukatlık hizmeti gerektiren dava süreçleri ve hukuki mütalaa işlemleri, anlaşmalı avukatlar aracılığıyla yürütülür.
                                    Tüm işlemler noter vekâleti kapsamında, mevzuata uygun şekilde gerçekleştirilir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SSS */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-red-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-red-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-red-100 decoration-4 underline-offset-8">
                            SSS
                        </h2>
                        <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                            Sıkça Sorulan <span className="text-red-600">Sorular</span>
                        </h3>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            {
                                q: "Taşınmaz üzerindeki haciz nasıl kaldırılır?",
                                a: "Borç tamamen ödendikten sonra icra müdürlüğünden haciz kaldırma (fek) yazısı alınarak tapu müdürlüğüne başvurulur. Tapu müdürlüğü haciz şerhini siler. Birden fazla haciz varsa her biri için ayrı ayrı işlem yapılmalıdır."
                            },
                            {
                                q: "İcra satışında taşınmaz piyasa değerinin altında mı satılır?",
                                a: "İcra satışında birinci ihalede taşınmaz kıymet takdir bedelinin %50'sinden az olmamak üzere satılır. İkinci ihalede bu sınır daha da düşebilir. Bu nedenle piyasa değerinin altında satış mümkündür."
                            },
                            {
                                q: "Hacizli taşınmaz satılabilir mi?",
                                a: "Haciz şerhi bulunan taşınmazın normal yollarla satışı ve devri mümkün değildir. Önce tüm hacizlerin kaldırılması gerekir. İcra yoluyla satış ise icra müdürlüğü tarafından ihale usulüyle yapılır."
                            },
                            {
                                q: "Borç ödendikten sonra icra dosyası otomatik kapanır mı?",
                                a: "Hayır. Borç ödendikten sonra alacaklının dosyayı kapatma talebi veya icra müdürlüğüne başvuru yapılması gerekir. Ayrıca tapu üzerindeki haciz şerhinin kaldırılması için tapu müdürlüğüne ayrı bir başvuru yapılmalıdır."
                            },
                            {
                                q: "İhaleye herkes katılabilir mi?",
                                a: "İcra ihalelerine gerçek ve tüzel kişiler katılabilir. Ancak borçlunun kendisi, icra müdürü ve bazı yasaklı kişiler ihaleye katılamaz. Katılım için belirli oranda teminat yatırılması zorunludur."
                            },
                            {
                                q: "Eski icra dosyaları zamanaşımına uğrar mı?",
                                a: "İcra takibinde zamanaşımı alacağın türüne göre değişir. Genel olarak 10 yıllık süre uygulanır. Zamanaşımına uğramış dosyalar için kapatma yolları mevcuttur ancak her dosya ayrı değerlendirilmelidir."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border-2 border-slate-200 hover:border-red-200 transition-colors">
                                <h4 className="font-black text-slate-900 mb-4 text-lg flex items-start gap-3">
                                    <span className="text-red-600 shrink-0">S:</span>
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 leading-relaxed font-medium pl-8">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TapuTakipMerkezi Ne Sağlar */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-red-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-red-100 decoration-4 underline-offset-8">
                            Neden Biz?
                        </h2>
                        <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                            TapuTakipMerkezi.com.tr <span className="text-red-600">Ne Sağlar?</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "İcra dosyası takip ve sorgulama", icon: "✅" },
                            { title: "Haciz kaldırma (fek) işlem takibi", icon: "✅" },
                            { title: "İcra satış ihale süreci danışmanlığı", icon: "✅" },
                            { title: "Takyidat ve haciz şerhi araştırması", icon: "✅" },
                            { title: "Borç ödeme ve taksitlendirme rehberliği", icon: "✅" },
                            { title: "Tapu kaydı temizleme ve güncelleme", icon: "✅" }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-red-50 to-slate-50 p-8 rounded-3xl border-2 border-red-200 hover:border-red-500 shadow-sm hover:shadow-xl transition-all group"
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

                    <div className="mt-12 text-center">
                        <a
                            href="https://wa.me/905320550945"
                            className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-red-200 hover:bg-red-700 transition-colors"
                        >
                            İCRA İŞLEMLERİ İÇİN BİZE ULAŞIN
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </div>
    );
};

export default IcraTakip;
