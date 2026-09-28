import { CheckCircle2, FileCheck, Bell, Search, Globe, Clock } from "lucide-react";

const benefits = [
    {
        title: "Evrak Kontrolü",
        desc: "Tüm belgelerin eksiksiz hazırlanması",
        icon: FileCheck,
    },
    {
        title: "Başvuru Takibi",
        desc: "Resmi kurumlarda süreç yönetimi",
        icon: Search,
    },
    {
        title: "SMS & Süreç İzleme",
        desc: "Anlık bilgilendirme ve takip",
        icon: Bell,
    },
    {
        title: "Harç & Randevu Yönlendirmesi",
        desc: "Ödeme ve randevu desteği",
        icon: Clock,
    },
    {
        title: "Uzaktan Tapu Takip",
        desc: "Şehir dışından işlem takibi",
        icon: Globe,
    },
    {
        title: "Zaman & Maliyet Tasarrufu",
        desc: "Profesyonel süreç yönetimi ile hız",
        icon: CheckCircle2,
    },
];

const ServiceBenefits = () => {
    return (
        <section className="py-24 bg-slate-900 px-4 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-blue-400 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-blue-400/30 decoration-4 underline-offset-8">
                        Hizmet Avantajları
                    </h2>
                    <h3 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase mb-4">
                        TapuTakipMerkezi.com.tr <br className="md:hidden" />
                        <span className="text-blue-400">Ne Sağlar?</span>
                    </h3>
                    <p className="text-slate-300 max-w-2xl mx-auto font-medium">
                        81 ilde profesyonel tapu ve vergi süreç yönetimi
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 hover:border-blue-500 transition-all group hover:-translate-y-2 duration-500"
                            >
                                <div className="mb-6 inline-block p-5 bg-blue-600/20 rounded-2xl group-hover:bg-blue-600 transition-colors duration-500">
                                    <IconComponent size={28} className="text-blue-400 group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-green-400 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tight">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-slate-400 text-sm font-medium">
                                            {benefit.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 shadow-2xl text-center border border-blue-500">
                    <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                        🔐 Önemli Not
                    </h4>
                    <p className="text-blue-100 font-medium max-w-3xl mx-auto leading-relaxed">
                        Tapu işlemlerinde yalnızca hak sahibi, yetkili vekil veya yetkilendirilmiş emlakçı işlem yapabilir.
                        Resmî yetkisi bulunmayan kişi ve aracılara itibar edilmemelidir.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServiceBenefits;
