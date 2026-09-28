import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "İşlemler ne kadar sürede tamamlanır?",
    a: "Evraklarınızın eksiksiz olması durumunda, vergi ilişik kesme süreçleri genellikle 1-3 iş günü, tapu devir işlemleri ise randevu yoğunluğuna göre aynı gün veya ertesi gün sonuçlanır.",
  },
  {
    q: "Vekaletname vermem gerekiyor mu?",
    a: "Evet, sizin adınıza resmi dairelerde takip yapabilmemiz için gayrimenkul işlemlerine özel sınırlı yetkili bir vekaletname vermeniz süreci hızlandıracaktır.",
  },
  {
    q: "Hangi illerde hizmet veriyorsunuz?",
    a: "Türkiye'nin 81 ilinde, tüm Tapu ve Kadastro Müdürlüklerinde dosya takibi ve danışmanlık hizmeti sunmaktayız.",
  },
];

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter leading-none mb-4 uppercase">
            Merak Edilenler
          </h3>
          <p className="text-slate-500 font-bold uppercase text-xs tracking-widest underline decoration-blue-500 decoration-2 underline-offset-8">
            Tapu ve Kadastro Bilgi Merkezi
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm transition-all hover:shadow-md"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                aria-expanded={activeFaq === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
                className="w-full px-8 py-7 flex items-center justify-between font-black text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <span className="text-left text-base uppercase tracking-tight">{item.q}</span>
                {activeFaq === i ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              {activeFaq === i && (
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className="px-8 pb-8 text-slate-600 font-medium text-sm leading-relaxed border-t border-slate-50 pt-6 animate-fade-in"
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
