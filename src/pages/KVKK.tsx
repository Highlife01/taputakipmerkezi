import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const KVKK = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <SEO
                title="KVKK Aydınlatma Metni | Tapu Takip Merkezi"
                description="Tapu Takip Merkezi KVKK Aydınlatma Metni. 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca kişisel verilerinizin işlenmesi ve korunması bilgilendirmesi."
                url="https://www.taputakipmerkezi.com.tr/kvkk"
            />
            <WhatsAppButton />
            <Navbar />

            <div className="bg-slate-50 border-b py-3">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="flex text-xs font-bold uppercase tracking-wider text-slate-400 gap-2 items-center">
                        <a href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</a>
                        <span>/</span>
                        <span className="text-blue-600">KVKK Aydınlatma Metni</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-12">
                    KVKK <span className="text-blue-600">Aydınlatma Metni</span>
                </h1>

                <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">1. Veri Sorumlusu</h2>
                        <p>
                            6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, Tapu Takip Merkezi (bundan sonra "Şirket" olarak anılacaktır) olarak, veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında; hukuka ve dürüstlük kurallarına uygun bir şekilde işleyebilecek, kaydedebilecek, saklayabilecek, sınıflandırabilecek, güncelleyebilecek ve mevzuatın izin verdiği hallerde üçüncü kişilere açıklayabilecek/aktarabileceğiz.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">2. Kişisel Verilerin İşlenme Amacı</h2>
                        <p>Kişisel verileriniz, Şirketimiz tarafından sunulan hizmetlerden ilgili kişileri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması ve ilgili iş süreçlerinin yürütülmesi amaçlarıyla KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dahilinde işlenmektedir. Bu kapsamda;</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Tapu takip ve danışmanlık hizmetlerinin planlanması ve icrası,</li>
                            <li>Sözleşme süreçlerinin takibi ve hukuki işlemlerin yürütülmesi,</li>
                            <li>Müşteri ilişkileri yönetimi süreçlerinin planlanması ve icrası,</li>
                            <li>Resmi kurumlar nezdinde yürütülen süreçlerin takibi,</li>
                            <li>Bilgi güvenliği süreçlerinin planlanması, denetimi ve icrası.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
                        <p>
                            Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, Tapu Müdürlükleri, Belediyeler ve diğer ilgili resmi kurumlar, iş ortaklarımız, tedarikçilerimiz, kanunen yetkili kamu kurumları ve özel kişilerle KVKK’nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde paylaşılabilecektir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
                        <p>
                            Kişisel verileriniz, her türlü sözlü, yazılı ya da elektronik ortamda, yukarıda yer verilen amaçlar doğrultusunda hizmetlerimizin sunulabilmesi ve bu kapsamda Şirketimizin sözleşme ve yasadan doğan mesuliyetlerini eksiksiz ve doğru bir şekilde yerine getirebilmesi gayesi ile edinilir. Bu hukuki sebeple toplanan kişisel verileriniz KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında bu metnin (2) ve (3) numaralı maddelerinde belirtilen amaçlarla da işlenebilmekte ve aktarılabilmektedir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">5. Veri Sahibinin Hakları</h2>
                        <p>KVKK'nın 11. maddesi uyarınca, veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
                            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
                            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
                            <li>KVKK’nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,</li>
                            <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
                        </ul>
                    </section>

                    <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-12">
                        <p className="text-sm font-semibold text-slate-600">
                            Başvurularınızı, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ'e uygun olarak yazılı bir dilekçe ile veya kayıtlı elektronik posta (KEP) adresi, güvenli elektronik imza, mobil imza ya da Şirketimize daha önce bildirilen ve sistemimizde kayıtlı bulunan elektronik posta adresinizi kullanmak suretiyle iletebilirsiniz.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default KVKK;
