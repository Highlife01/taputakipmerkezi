import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <SEO
                title="Hizmet Şartları ve Kullanım Koşulları | Tapu Takip Merkezi"
                description="Tapu Takip Merkezi resmi hizmet kullanım şartları, danışmanlık kapsamı ve yasal sorumluluklar hakkında genel bilgilendirme."
                url="https://www.taputakipmerkezi.com.tr/hizmet-sartlari"
            />
            <WhatsAppButton />
            <Navbar />

            <div className="bg-slate-50 border-b py-3">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="flex text-xs font-bold uppercase tracking-wider text-slate-400 gap-2 items-center">
                        <a href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</a>
                        <span>/</span>
                        <span className="text-blue-600">Hizmet Şartları</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-12">
                    Hizmet <span className="text-blue-600">Şartları</span>
                </h1>

                <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">1. Taraflar</h2>
                        <p>
                            İşbu Kullanım Koşulları ve Hizmet Şartları, www.taputakipmerkezi.com.tr (bundan sonra "Web Sitesi" olarak anılacaktır) üzerinden sunulan hizmetlerden faydalanan kullanıcılar (bundan sonra "Kullanıcı" veya "Müşteri" olarak anılacaktır) ile Tapu Takip Merkezi (bundan sonra "Şirket" olarak anılacaktır) arasında akdedilmiştir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">2. Hizmet Kapsamı</h2>
                        <p>
                            Şirket, gayrimenkul hukuku danışmanlığı, tapu takip işlemleri, veraset intikal, iskan sorgulama ve ilgili resmi süreçlerin takibi konularında danışmanlık hizmeti sunan özel bir kuruluştur. Şirket bir kamu kurumu değildir ve hiçbir kamu kurumunun (Tapu ve Kadastro Genel Müdürlüğü vb.) resmi alt birimi veya temsilcisi sıfatını taşımamaktadır.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">3. Kullanım Koşulları</h2>
                        <p>
                            Web Sitesi'ni kullanan veya hizmet talebinde bulunan Müşteri, aşağıdaki maddeleri kabul etmiş sayılır:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Sunulan bilgiler bilgilendirme amaçlıdır ve kesin hukuki tavsiye niteliği taşımaz.</li>
                            <li>İşlemlerin takibi için Müşteri tarafından noter onaylı resmi vekâletname verilmesi zorunludur.</li>
                            <li>Müşteri, paylaştığı bilgilerin doğruluğundan bizzat sorumludur.</li>
                            <li>Hizmet bedelleri, yapılacak işlemin niteliğine ve kapsamına göre ayrıca belirlenir.</li>
                            <li>Resmi harçlar ve diğer vergisel masraflar hizmet bedeline dahil değildir ve Müşteri tarafından karşılanır.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">4. Sorumluluk Sınırları</h2>
                        <p>
                            Şirket, resmi kurumların sistemlerinden kaynaklanan gecikmelerden, mevzuat değişikliklerinden veya resmi kurumların olumsuz kararlarından sorumlu tutulamaz. Süreçlerin takibi titizlikle yürütülür ancak nihai sonuç ilgili resmi kurumun yetkisindedir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">5. Gizlilik ve Güvenlik</h2>
                        <p>
                            Müşterilere ait tüm bilgi ve belgeler gizlilik prensipleri çerçevesinde saklanır ve sadece işlemin gerçekleştirilmesi amacıyla ilgili kurumlarla paylaşılır. Detaylı bilgi için KVKK Aydınlatma Metni'ni inceleyebilirsiniz.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">6. Değişiklik Hakları</h2>
                        <p>
                            Şirket, işbu Hizmet Şartları'nı dilediği zaman Web Sitesi'nde yayınlayarak güncelleme hakkını saklı tutar. Kullanıcılar, Web Sitesi'ni kullanmaya devam ederek güncel şartları kabul etmiş sayılırlar.
                        </p>
                    </section>

                    <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mt-12">
                        <p className="text-sm font-semibold text-blue-900">
                            Sorularınız için bizimle <a href="/#iletisim" className="underline">İletişim</a> sayfamız üzerinden veya WhatsApp hattımızdan irtibata geçebilirsiniz.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TermsOfService;
