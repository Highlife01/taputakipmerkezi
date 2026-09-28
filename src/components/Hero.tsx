import { useState } from "react";
import { ArrowRight, Zap, CheckCircle2, Info } from "lucide-react";
import { SITE } from "@/config/site";

/**
 * Hero bölümü + "ön kayıt talebi" formu.
 *
 * ÖNEMLİ (dürüstlük kuralı): Bu form arka planda canlı bir dosya/takip
 * sorgusu YAPMAZ. Form gönderimi gerçek bir iletişim talebi (ön kayıt) olarak
 * Web3Forms üzerinden iletilir ve kullanıcıya yalnızca bu gerçeği yansıtan
 * bir onay gösterilir. Sahte "dosyanız güncellendi" mesajı kaldırıldı.
 */
const Hero = () => {
  const [formData, setFormData] = useState({
    isim: "",
    soyisim: "",
    telefon: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePreRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.isim || !formData.soyisim || !formData.telefon) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(SITE.web3FormsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: SITE.web3FormsAccessKey,
          subject: "Yeni Ön Kayıt Talebi (Hero Formu) - Tapu Takip Merkezi",
          from_name: "Tapu Takip Merkezi Web Sitesi",
          form_kaynagi: "Hero - Ön Kayıt Talebi",
          ad_soyad: `${formData.isim} ${formData.soyisim}`.trim(),
          telefon: formData.telefon,
          kvkk_onay: "Evet - Hero formu onay kutusu işaretlendi"
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ isim: "", soyisim: "", telefon: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Ön kayıt gönderim hatası:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-card py-12 lg:py-24 px-4 overflow-hidden relative border-b hero-gradient scroll-mt-20 animate-fade-in">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left space-y-8">
          <span className="inline-block bg-blue-600 text-primary-foreground px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-200">
            Noter Vekâleti ile Resmî Kurumlarda Süreç Takibi
          </span>
          <h1 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] uppercase">
            Tapu ve resmi süreçlerde <br />
            <span className="text-blue-600">doğru evrak, doğru başvuru.</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
            Taşınmazlarınıza ait tapu, belediye ve vergi işlemlerini
            yetki ve vekâlet çerçevesinde sizin adınıza profesyonelce takip ediyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#iletisim"
              className="bg-slate-900 text-primary-foreground px-10 py-5 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 shadow-2xl transition-all hover:bg-slate-800 hover:-translate-y-1 hover:scale-105"
            >
              Dosyayı Başlat <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Ön Kayıt Paneli */}
        <div className="bg-card rounded-[3rem] card-shadow border p-8 md:p-12 relative overflow-hidden">
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b pb-6">
              <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shadow-inner">
                <Zap size={28} />
              </div>
              <div>
                <h3 className="font-black text-slate-800 text-xl tracking-tight leading-none mb-1 uppercase">
                  Ücretsiz Ön Kayıt
                </h3>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">
                  Süreç Değerlendirme Talebi
                </p>
              </div>
            </div>

            <form onSubmit={handlePreRegistration} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="isim"
                  placeholder="İsim"
                  aria-label="İsim"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-300 shadow-inner"
                  value={formData.isim}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="soyisim"
                  placeholder="Soyisim"
                  aria-label="Soyisim"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-300 shadow-inner"
                  value={formData.soyisim}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="tel"
                name="telefon"
                pattern="[0-9]{10,11}"
                title="Lütfen 10 veya 11 haneli telefon numaranızı giriniz."
                placeholder="Telefon numaranızı giriniz (0XXXXXXXXXX)"
                aria-label="Telefon Numarası"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl px-6 py-5 text-sm font-bold focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-300 shadow-inner"
                value={formData.telefon}
                onChange={handleInputChange}
                required
              />
              <div className="flex items-start gap-3 px-1">
                <input
                  type="checkbox"
                  required
                  name="kvkkConsent"
                  className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                  id="hero-kvkk-consent"
                />
                <label htmlFor="hero-kvkk-consent" className="text-[10px] text-slate-500 font-medium leading-relaxed cursor-pointer select-none">
                  <a href="/kvkk" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">KVKK Aydınlatma Metni</a>'ni okudum, kişisel verilerimin ön kayıt talebimin değerlendirilmesi amacıyla işlenmesini kabul ediyorum.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-primary-foreground py-5 rounded-3xl font-black text-lg shadow-xl shadow-blue-100 transition-all hover:bg-blue-700 active:scale-[0.98] uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Gönderiliyor..." : "Ön Kayıt Talebi Gönder"}
              </button>

              <p className="text-[10px] text-center text-slate-400 font-medium pt-2">
                Verileriniz T.C. 6698 Sayılı Kanun kapsamında korunmaktadır.
              </p>

              {submitStatus === "success" && (
                <div className="p-5 bg-emerald-50 text-emerald-800 rounded-2xl text-xs font-bold flex items-start gap-3 border border-emerald-100 animate-fade-in">
                  <CheckCircle2 className="shrink-0 text-emerald-600" />
                  Talebiniz bize ulaştı. Bu bir ön kayıt başvurusudur; uzmanımız en kısa sürede {SITE.phoneDisplay} hattından sizi arayarak dosyanızı değerlendirecektir.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-5 bg-red-50 text-red-700 rounded-2xl text-xs font-bold flex items-start gap-3 border border-red-100 animate-fade-in">
                  <Info className="shrink-0 text-red-500" />
                  Talebiniz gönderilemedi. Lütfen tekrar deneyin veya bizi doğrudan {SITE.phoneDisplay} numarasından arayın.
                </div>
              )}
            </form>

            <div className="bg-blue-50/50 rounded-2xl p-5 border border-dashed border-blue-200 flex items-start gap-3">
              <Info size={20} className="text-blue-500 shrink-0" />
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                Bu form canlı bir dosya sorgusu değildir; ön kayıt talebinizi ilettiğinizde ilgili bölge uzmanımız {SITE.phoneDisplay} hattımızdan sizi arayarak sürecinizi değerlendirir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
