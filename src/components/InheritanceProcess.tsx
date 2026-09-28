import { Users, FileText, Building2, Scale, HandshakeIcon, Car } from "lucide-react";

const InheritanceProcess = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-50 to-slate-50 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Main Info */}
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-blue-100 decoration-4 underline-offset-8">
                        Miras İşlemleri
                    </h2>
                    <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">
                        Veraset ve İntikal <span className="text-blue-600">Süreci</span>
                    </h3>
                    <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg leading-relaxed">
                        Bir kişinin vefatı sonrası geride kalan taşınır ve taşınmaz mal varlıklarının,
                        yasal mirasçılarına tapu ve ilgili kurumlar nezdinde devredilebilmesi için
                        veraset ve intikal işlemlerinin eksiksiz şekilde tamamlanması gerekir.
                    </p>
                </div>



                {/* Key Points */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-10 rounded-3xl border-2 border-blue-500 shadow-xl">
                        <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight flex items-center gap-3">
                            <FileText className="text-blue-600" size={32} />
                            İşlem Tamamlanmadan
                        </h4>
                        <ul className="space-y-3">
                            {["Satış", "Devir", "Paylaşım", "Banka hesaplarına erişim"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                    <span className="uppercase text-sm font-black tracking-wide">{item}</span>
                                    <span className="text-red-600 font-black ml-auto">MÜMKÜN DEĞİL</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl shadow-2xl text-white">
                        <h4 className="text-2xl font-black mb-4 uppercase tracking-tight flex items-center gap-3">
                            <Building2 size={32} />
                            İşlem Sonunda
                        </h4>
                        <p className="text-blue-100 font-medium leading-relaxed mb-4">
                            📌 Miras kalan gayrimenkuller, yasal miras payları oranında
                        </p>
                        <p className="text-blue-100 font-medium leading-relaxed">
                            📌 Mirasçılar adına <span className="text-yellow-300 font-black">el birliği mülkiyeti</span> şeklinde tescil edilir
                        </p>
                    </div>
                </div>

                {/* Who Can Process */}
                <div className="bg-white rounded-3xl border-2 border-slate-200 p-10 mb-16 shadow-lg">
                    <h4 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                        <Users className="text-blue-600" size={32} />
                        Kimler İşlem Yapabilir?
                    </h4>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-slate-700 font-medium leading-relaxed">
                                Mirasçılardan <span className="font-black text-blue-600">herhangi biri</span>,
                                diğer mirasçılardan vekâlet almadan;
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 bg-green-50 p-4 rounded-2xl">
                                    <span className="text-green-600 text-2xl">✔</span>
                                    <span className="font-black text-slate-900 uppercase text-sm">Veraset ilamı (mirasçılık belgesi)</span>
                                </li>
                                <li className="flex items-center gap-3 bg-green-50 p-4 rounded-2xl">
                                    <span className="text-green-600 text-2xl">✔</span>
                                    <span className="font-black text-slate-900 uppercase text-sm">Vergi dairesi işlemleri</span>
                                </li>
                            </ul>
                            <p className="text-sm text-slate-500 italic">
                                aşamalarına kadar işlemleri tek başına başlatabilir.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white">
                            <h5 className="font-black text-lg mb-4 uppercase tracking-tight">
                                TapuTakipMerkezi Desteği
                            </h5>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <FileText className="text-blue-400 shrink-0 mt-1" size={20} />
                                    <span className="text-sm font-medium">Vekâletle</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <HandshakeIcon className="text-blue-400 shrink-0 mt-1" size={20} />
                                    <span className="text-sm font-medium">
                                        Ya da mirasçılardan biriyle birebir sahada refakat ederek
                                    </span>
                                </li>
                            </ul>
                            <p className="text-blue-200 font-black mt-6 text-sm">
                                tüm işlemleri güvenle yürütür.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Special Service */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-10 shadow-2xl text-white mb-16">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <Car size={64} className="shrink-0" />
                        <div>
                            <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">
                                Sahada Refakat & Özel Hizmet
                            </h4>
                            <div className="space-y-2 text-orange-100 font-medium">
                                <p>🔹 Mirasçılar dilerse özel araçla evlerinden alınır</p>
                                <p>🔹 Resmî kurum işlemleri birlikte tamamlanır</p>
                                <p>🔹 İşlem sonrası tekrar evlerine bırakılır</p>
                            </div>
                            <p className="text-orange-200 font-black mt-4 text-sm italic">
                                Amaç; süreci yormadan, uzatmadan ve stres oluşturmadan tamamlamaktır.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Old Properties Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-lg">
                        <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                            Eski Tarihli Taşınmazlarda Çözüm
                        </h4>
                        <p className="text-slate-600 mb-4 font-medium text-sm">
                            Yıllarca işlem görmemiş (50-60 yıllık);
                        </p>
                        <ul className="space-y-2 mb-6">
                            {["Tarla", "Arazi", "Arsa", "Konut"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-slate-700 font-bold text-sm uppercase">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-slate-500 text-sm italic">
                            gibi taşınmazlarda veraset ve intikal işlemleri çoğu zaman kardeşler arasında ihtilafa yol açabilmektedir.
                        </p>
                    </div>

                    <div className="bg-blue-900 p-8 rounded-3xl text-white shadow-2xl">
                        <h4 className="text-xl font-black mb-6 uppercase tracking-tight">
                            TapuTakipMerkezi.com.tr Çözümü
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { icon: "✔", text: "Rehberlik" },
                                { icon: "✔", text: "Süreç yönetimi" },
                                { icon: "✔", text: "Taraflar arası iletişim" }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 bg-blue-800/50 p-4 rounded-2xl">
                                    <span className="text-green-400 text-xl font-black">{item.icon}</span>
                                    <span className="font-black uppercase text-sm tracking-wide">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-blue-200 font-medium mt-6 text-sm">
                            sağlayarak, <span className="font-black text-yellow-300">husumet oluşmadan</span> çözüm üretir.
                        </p>
                    </div>
                </div>

                {/* Division Options */}
                <div className="bg-white rounded-3xl border-2 border-slate-200 p-10 shadow-lg">
                    <h4 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight flex items-center gap-3">
                        <Scale className="text-blue-600" size={32} />
                        Miras Paylaşımı (Taksim) Seçenekleri
                    </h4>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-green-50 p-8 rounded-3xl border-2 border-green-200">
                            <h5 className="font-black text-lg text-green-800 mb-4 uppercase">
                                🔹 Anlaşma Varsa
                            </h5>
                            <p className="text-slate-700 font-medium mb-4 text-sm">
                                Mirasçılar kendi aralarında;
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 bg-white p-3 rounded-xl">
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                    <span className="font-black text-slate-900 text-sm uppercase">Paylı mülkiyet</span>
                                </li>
                                <li className="flex items-center gap-3 bg-white p-3 rounded-xl">
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                    <span className="font-black text-slate-900 text-sm uppercase">Bağımsız mülkiyet</span>
                                </li>
                            </ul>
                            <p className="text-green-700 font-medium mt-4 text-sm">
                                şeklinde paylaşım yapmak isterse <span className="font-black">miras taksim sözleşmesi</span> düzenlenir.
                            </p>
                        </div>

                        <div className="bg-red-50 p-8 rounded-3xl border-2 border-red-200">
                            <h5 className="font-black text-lg text-red-800 mb-4 uppercase">
                                🔹 Anlaşmazlık Varsa
                            </h5>
                            <p className="text-slate-700 font-medium mb-4 text-sm">
                                Bu durumda;
                            </p>
                            <ul className="space-y-3">
                                {["Ortaklığın giderilmesi", "İzale-i şuyu", "Diğer miras davaları"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl">
                                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                                        <span className="font-black text-slate-900 text-sm uppercase">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-red-700 font-medium mt-4 text-sm italic">
                                gündeme gelir. <span className="font-black">(Bu aşama yargısal süreçtir)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InheritanceProcess;
