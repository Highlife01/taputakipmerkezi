import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { SITE } from "@/config/site";

const KVKK = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <SEO
                title="KVKK Aydınlatma Metni | Tapu Takip Merkezi"
                description="Tapu Takip Merkezi KVKK Aydınlatma Metni. 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca kişisel verilerinizin işlenmesi, aktarılması ve saklanması bilgilendirmesi."
                url={`${SITE.baseUrl}/kvkk`}
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

                <p className="text-sm text-slate-500 font-semibold mb-12">
                    Son güncelleme: Eylül 2026
                </p>

                <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">1. Veri Sorumlusu</h2>
                        <p>
                            6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz aşağıda açıklanan kapsamda veri sorumlusu sıfatıyla <strong>Tapu Takip Merkezi</strong> tarafından işlenmektedir.
                        </p>
                        <p className="mt-4">
                            <strong>Veri Sorumlusu:</strong> Tapu Takip Merkezi<br />
                            <strong>İletişim:</strong> {SITE.phoneDisplay} — {SITE.email}<br />
                            <strong>Web:</strong> {SITE.domain}
                        </p>
                        <p className="mt-4 text-sm">
                            Şeffaflık notu: Tapu Takip Merkezi resmî bir kamu kurumu değildir; noter vekâletnamesi çerçevesinde tapu, kadastro, belediye ve vergi daireleri nezdindeki süreçlerinizi takip eden özel bir danışmanlık hizmetidir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">2. Kişisel Verilerin İşlenme Amacı</h2>
                        <p>Kişisel verileriniz, aşağıdaki amaçlarla KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dahilinde işlenmektedir:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Site üzerindeki iletişim ve ön kayıt formları aracılığıyla ilettiğiniz taleplerin alınması, değerlendirilmesi ve size dönüş yapılması,</li>
                            <li>Tapu takip ve danışmanlık hizmetlerinin planlanması ve icrası,</li>
                            <li>Sözleşme süreçlerinin takibi ve hukuki işlemlerin yürütülmesi,</li>
                            <li>Resmi kurumlar nezdinde yürütülen süreçlerin takibi,</li>
                            <li>Müşteri ilişkileri yönetimi süreçlerinin planlanması ve icrası,</li>
                            <li>Bilgi güvenliği süreçlerinin planlanması, denetimi ve icrası.</li>
                        </ul>
                        <p className="mt-4">
                            <strong>İşlenen veri kategorileri:</strong> Formlar üzerinden ilettiğiniz ad-soyad, telefon numarası, e-posta adresi ve talep konusu; KVKK onayınızın zaman damgası; hizmet sürecine konu olan tapu/taşınmaz bilgileriniz (vekâletname kapsamında).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
                        <p>
                            Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Tapu ve Kadastro Müdürlükleri, Belediyeler, Vergi Daireleri ve diğer ilgili resmî kurumlar (hizmetin icrası amacıyla, vekâletname kapsamında),</li>
                            <li><strong>Web3Forms</strong> (web3forms.com): Site üzerindeki formlar aracılığıyla ilettiğiniz taleplerin bize iletilmesi amacıyla, formda belirttiğiniz ad-soyad, telefon, e-posta ve mesaj içeriği üçüncü taraf bir form servisi olan Web3Forms üzerinden iletilir. Bu aktarım KVKK'nın 9. maddesi kapsamında, açık rızanız ile (form gönderiminde onay kutusunu işaretlemeniz) gerçekleşir ve talebin bize ulaşması için gereklidir. Web3Forms'un veri işleme uygulamaları için kendi gizlilik politikasını inceleyebilirsiniz.</li>
                            <li>Google Analytics ({SITE.domain} üzerinde kullanılan {`"G-NPE0BF1T0K"`} ölçüm kimliği): Sitenin kullanım istatistiklerinin anonim olarak ölçülmesi amacıyla çerezler aracılığıyla işlenebilir.</li>
                            <li>Kanunen yetkili kamu kurum ve kuruluşları ve yargı mercileri (yasal yükümlülük hâllerinde).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">4. Kişisel Verilerin Saklanma Süreleri</h2>
                        <p>
                            Kişisel verileriniz, aşağıdaki süreler boyunca saklanır; süre sonunda mevzuata uygun şekilde silinir, yok edilir veya anonimleştirilir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Form talepleri (işleme alınmayan talepler):</strong> Talebin değerlendirilmesi ve size dönüş yapılması amacıyla toplanma tarihinden itibaren en fazla 1 (bir) yıl.</li>
                            <li><strong>Hizmet süreçlerine dönüşen talepler:</strong> İlgili hizmetin tamamlanması ve yasal saklama sürelerinin (ör. 6086 sayılı Avukatlık Kanunu, 213 sayılı Vergi Usul Kanunu ve ilgili mevzuattaki on yıllık saklama yükümlülükleri) sonuna kadar.</li>
                            <li><strong>KVKK onay kayıtları:</strong> Onayın geçerlilik süresi boyunca; onayın geri alınması hâlinde kayıt, geri alma talebinin işlenmesine kadar muhafaza edilir.</li>
                            <li><strong>Trafik ve istatistik verileri (Analytics):</strong> Ölçüm aracının ayarlarına uygun sürelerle.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
                        <p>
                            Kişisel verileriniz, web sitemizdeki formlar, telefon, e-posta ve sözlü/yazılı iletişim kanalları aracılığıyla toplanır. Bu hukuki sebeple toplanan verileriniz KVKK'nın 5. ve 6. maddelerinde belirtilen işleme şartları kapsamında bu metnin (2) ve (3) numaralı maddelerinde belirtilen amaçlarla işlenebilmekte ve aktarılabilmektedir. Form verilerinin Web3Forms'a iletilmesi, açık rızanıza dayanır; onayı geri alma hakkınız saklıdır.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">6. Veri Sahibinin Hakları</h2>
                        <p>KVKK'nın 11. maddesi uyarınca, veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
                            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
                            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
                            <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,</li>
                            <li>Bu haklara ilişkin taleplerinizin, kişisel verileri aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                            <li>Münhasıran otomatik sistemlerle işlenmesi sebebiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
                            <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
                        </ul>
                    </section>

                    <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-12">
                        <h2 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-4">Başvuru Usulü</h2>
                        <p className="text-sm font-semibold text-slate-600">
                            Başvurularınızı, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ'e uygun olarak yazılı bir dilekçe ile veya kayıtlı elektronik posta (KEP) adresi, güvenli elektronik imza, mobil imza ya da Şirketimize daha önce bildirilen ve sistemimizde kayıtlı bulunan elektronik posta adresinizi kullanmak suretiyle <strong>{SITE.email}</strong> adresine iletebilirsiniz. Talebiniz, en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default KVKK;
