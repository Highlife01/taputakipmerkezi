import { useParams, Navigate } from "react-router-dom";
import { questions } from "@/data/questions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const GuidePage = () => {
    const { slug } = useParams();

    const q = questions.find((item) => item.slug === slug);
    if (!q) return <Navigate to="/404" />;

    const canonicalUrl = `https://www.taputakipmerkezi.com.tr/tapu-rehberi/${slug}`;

    const faqData = {
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer
            }
        }]
    };

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
                "name": "Tapu Rehberi",
                "item": canonicalUrl
            }
        ]
    };

    const articleData = {
        "@type": "Article",
        "headline": q.question,
        "description": q.answer,
        "inLanguage": "tr-TR",
        "datePublished": "2025-01-15",
        "dateModified": "2026-09-08",
        "image": "https://www.taputakipmerkezi.com.tr/og-image.png",
        "author": {
            "@type": "Organization",
            "name": "Tapu Takip Merkezi",
            "url": "https://www.taputakipmerkezi.com.tr"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Tapu Takip Merkezi",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.taputakipmerkezi.com.tr/favicon.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        }
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-slate-50/30">
            <SEO
                title={`${q.question} | Tapu Rehberi`}
                description={`${q.question} sorusunun cevabı, resmi prosedürler ve mevzuat detayları: ${q.answer}`}
                url={canonicalUrl}
                keywords={`${q.question.toLowerCase()}, tapu rehberi, tapu soruları, tapu işlemleri danışmanlık, gayrimenkul hukuku`}
                schemas={[breadcrumbData, faqData, articleData]}
            />
            <WhatsAppButton />
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 py-16">
                <nav className="flex text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 gap-2 mb-8">
                    <a href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</a>
                    <span>/</span>
                    <span className="text-blue-600">Tapu Rehberi</span>
                </nav>

                <article className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 md:p-12">
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8">
                        {q.question}
                    </h1>

                    <div className="prose prose-slate max-w-none">
                        {/* GEO Direct Answer Snippet Box */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-8">
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block mb-1">
                                Net Cevap & Özet
                            </span>
                            <p className="text-blue-900 font-bold text-lg leading-relaxed m-0">
                                {q.answer}
                            </p>
                        </div>

                        <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
                            <p>
                                Tapu süreçleri, mevzuat değişiklikleri ve yerel Tapu ve Kadastro uygulamaları nedeniyle teknik bilgi gerektirebilir.
                                Özellikle <strong>{q.question.toLowerCase()}</strong> gibi konularda doğru ve güncel bilgiye ulaşmak,
                                maddi kayıpların ve zaman kaybının önüne geçmek için kritiktir.
                            </p>

                            <h3 className="text-slate-900 font-black uppercase tracking-tight">Resmi Süreç Nasıl Yürütülür?</h3>
                            <p>
                                Tapu Takip Merkezi olarak, taşınmazınıza ait her türlü tescil, devir, miras intikali ve sorgulama işlemini
                                noter onaylı yetki ve sınırlı vekâlet çerçevesinde adınıza yürütüyoruz. Bu sayede hem zaman kazanıyor
                                hem de bürokratik engelleri profesyonelce aşıyorsunuz.
                            </p>

                            <div className="bg-slate-900 text-white p-8 rounded-[2rem] mt-12">
                                <h4 className="text-white font-black uppercase tracking-tight mb-4">Ücretsiz Danışmanlık Alın</h4>
                                <p className="text-slate-300 text-sm mb-6">
                                    Dosyanızla ilgili merak ettiğiniz tüm detayları uzman gayrimenkul danışmanlarımıza sorabilirsiniz.
                                </p>
                                <a
                                    href="https://wa.me/905320550945"
                                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-colors"
                                >
                                    WhatsApp İle Sorun
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Questions / Topical Authority */}
                <div className="mt-12">
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6">
                        Diğer Merak Edilen Konular
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {questions.filter(item => item.slug !== slug).slice(0, 6).map((item) => (
                            <a
                                key={item.slug}
                                href={`/tapu-rehberi/${item.slug}`}
                                className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-blue-500 hover:shadow-md transition-all group"
                            >
                                <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                    {item.question}
                                </h4>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <ContactSection />
            <Footer />
        </div>
    );
};

export default GuidePage;
