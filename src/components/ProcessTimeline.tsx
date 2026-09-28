import { FileText, CheckCircle2, Smartphone, CreditCard, PenTool } from "lucide-react";

const steps = [
    {
        title: "Başvuru",
        desc: "Gerekli belgelerle tapu müdürlüğüne başvuru yapılır",
        icon: FileText,
    },
    {
        title: "Kontrol",
        desc: "TAKBİS üzerinden taşınmaz bilgileri kontrol edilir",
        icon: CheckCircle2,
    },
    {
        title: "Kayıt",
        desc: "Evraklar tam ise başvuru kaydı oluşturulur",
        icon: FileText,
    },
    {
        title: "SMS Bilgilendirme",
        desc: "İşlem aşamaları SMS ile bildirilir",
        icon: Smartphone,
    },
    {
        title: "Harç Ödemesi",
        desc: "Harç ve döner sermaye bedelleri yatırılır",
        icon: CreditCard,
    },
    {
        title: "İmza",
        desc: "Belirlenen tarihte imza aşamasına geçilir",
        icon: PenTool,
    },
];

const ProcessTimeline = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-blue-100 decoration-4 underline-offset-8">
                        Süreç Yönetimi
                    </h2>
                    <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                        Tapu İşlem Süreci
                    </h3>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                        İşlemleriniz 6 adımda güvenle tamamlanır
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-500 transition-all group hover:-translate-y-2 duration-500 relative"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-xl">
                                    {index + 1}
                                </div>
                                <div className="mb-6 inline-block p-5 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                    <IconComponent size={28} />
                                </div>
                                <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">
                                    {step.title}
                                </h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center bg-blue-600 rounded-3xl p-8 shadow-2xl">
                    <p className="text-white font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3">
                        <Smartphone className="animate-pulse" />
                        🔔 Tüm işlem adımları SMS ile tarafınıza bildirilir
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
