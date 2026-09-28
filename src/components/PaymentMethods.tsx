import { Smartphone, CreditCard, Building2, Globe } from "lucide-react";

const methods = [
    {
        title: "İnternet Bankacılığı",
        desc: "Online ödeme ile hızlı işlem",
        icon: Globe,
    },
    {
        title: "ATM",
        desc: "Banka ATM'lerinden ödeme",
        icon: Building2,
    },
    {
        title: "Banka Gişeleri",
        desc: "Şubeden yatırma işlemi",
        icon: Building2,
    },
    {
        title: "Kredi Kartı",
        desc: "Döner sermaye için geçerli",
        icon: CreditCard,
    },
];

const PaymentMethods = () => {
    return (
        <section className="py-24 bg-white px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-black tracking-ultrawide uppercase text-xs mb-4 underline decoration-blue-100 decoration-4 underline-offset-8">
                        Ödeme Seçenekleri
                    </h2>
                    <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                        Tapu Harçları ve Ödeme Yöntemleri
                    </h3>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                        Harçlarınızı e-tahsilat sistemi ile kolayca ödeyebilirsiniz
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {methods.map((method, index) => {
                        const IconComponent = method.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-3xl border-2 border-transparent hover:border-blue-500 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="mb-6 inline-block p-5 bg-white rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-md">
                                    <IconComponent size={28} />
                                </div>
                                <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">
                                    {method.title}
                                </h4>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                                    {method.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 shadow-2xl text-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Smartphone className="text-blue-200" size={32} />
                        <h4 className="text-2xl font-black text-white uppercase tracking-tight">
                            Makbuz Almak İçin Gelmek Zorunda Değilsiniz
                        </h4>
                    </div>
                    <p className="text-blue-100 font-medium text-sm max-w-2xl mx-auto">
                        E-tahsilat sistemi ile ödemelerinizi online yapabilir, makbuzu dijital ortamda alabilirsiniz.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PaymentMethods;
