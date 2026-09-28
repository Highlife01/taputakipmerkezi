import { useState } from "react";
import { Phone, Mail, Building2, CheckCircle2, Loader2 } from "lucide-react";

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});
  const phoneNumber = "05320550945";
  const displayPhone = "0532 055 09 45";

  const validateForm = (formData: FormData): boolean => {
    const newErrors: { phone?: string; email?: string } = {};
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;

    // Turkish phone validation: Starts with 05, followed by 9 digits (total 11)
    // Adjust regex to be flexible with spaces if needed, but for now we enforce strict or simple checks.
    // The requirement said "0000000000" shouldn't pass.
    const phoneRegex = /^(05)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
    const cleanPhone = phone.replace(/\s/g, ''); // Remove spaces for check

    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Lütfen geçerli bir telefon numarası giriniz (Örn: 05XXXXXXXXX)";
    }

    // Basic Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Lütfen geçerli bir e-posta adresi giriniz.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);

    if (!validateForm(formData)) {
      return;
    }

    setFormStatus('sending');
    formData.append("access_key", "7b31c9d8-eb61-4d45-a3ec-83a9c19e5a2f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="iletisim" className="py-24 bg-card px-4 scroll-mt-20 animate-fade-in">
      <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3.5rem] p-12 lg:p-20 text-primary-foreground shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Building2 size={400} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-10">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-[1.1]">
              İşleminizi <br />
              Bugün <span className="text-blue-500">Başlatalım.</span>
            </h2>

            <div className="space-y-8">
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-6 group">
                <div className="bg-blue-600 p-6 rounded-3xl group-hover:scale-110 transition-transform shadow-xl">
                  <Phone size={40} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">
                    Merkez Danışma Hattı
                  </p>
                  <p className="text-4xl font-black tracking-tighter">{displayPhone}</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-6 rounded-3xl">
                  <Mail size={40} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    Kurumsal Yazışma
                  </p>
                  <p className="text-xl font-black tracking-tighter font-mono opacity-80 underline underline-offset-4 uppercase">
                    cebokar@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-[2.5rem] p-10 text-slate-900 shadow-2xl border border-white/20">
            {formStatus === 'success' ? (
              <div className="text-center py-16 space-y-6 animate-zoom-in">
                <div className="bg-emerald-100 text-emerald-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={56} />
                </div>
                <div>
                  <h4 className="text-3xl font-black uppercase tracking-tight">Başvurunuz Alındı!</h4>
                  <p className="font-bold text-slate-500 mt-2 uppercase text-xs tracking-widest">
                    Uzmanlarımız sizi hemen arayacak.
                  </p>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <input type="hidden" name="subject" value="Yeni İletişim Formu Başvurusu - Tapu Takip Merkezi" />
                <input type="hidden" name="from_name" value="Tapu Takip Merkezi" />
                <input type="hidden" name="replyto" value="cebokar@gmail.com" />

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-superwide text-slate-400 ml-1">
                    Adınız Soyadınız
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Ad Soyad"
                    aria-label="Ad Soyad"
                    className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl font-bold text-sm outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-inner"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-superwide text-slate-400 ml-1">
                      Telefon Numaranız
                    </label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      placeholder="05XXXXXXXXX"
                      aria-label="Telefon Numarası"
                      className={`w-full bg-slate-50 border-2 p-5 rounded-2xl font-bold text-sm outline-none focus:ring-4 transition-all shadow-inner ${errors.phone ? 'border-red-500 focus:ring-red-100' : 'border-slate-100 focus:ring-blue-100 focus:border-blue-500'}`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 font-bold ml-1">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-superwide text-slate-400 ml-1">
                      E-Posta Adresiniz
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="eposta@adresiniz.com"
                      aria-label="E-Posta Adresi"
                      className={`w-full bg-slate-50 border-2 p-5 rounded-2xl font-bold text-sm outline-none focus:ring-4 transition-all shadow-inner ${errors.email ? 'border-red-500 focus:ring-red-100' : 'border-slate-100 focus:ring-blue-100 focus:border-blue-500'}`}
                    />
                    {errors.email && <p className="text-xs text-red-500 font-bold ml-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-superwide text-slate-400 ml-1">
                    Yapılacak İşlem
                  </label>
                  <select
                    name="service"
                    aria-label="Yapılacak İşlem"
                    className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl font-bold text-sm outline-none appearance-none cursor-pointer"
                  >
                    <option>Alım - Satım Takibi</option>
                    <option>Miras & Veraset İşlemleri</option>
                    <option>Vergi İlişik Kesme</option>
                    <option>İfraz & Tevhit</option>
                    <option>Yabancı Satış / Vatandaşlık</option>
                    <option>İskan Sorgulama</option>
                  </select>
                </div>

                <div className="flex items-start gap-3 px-1">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                    id="contact-kvkk-consent"
                  />
                  <label htmlFor="contact-kvkk-consent" className="text-[10px] text-slate-500 font-medium leading-relaxed cursor-pointer select-none">
                    <a href="/kvkk" target="_blank" className="text-blue-600 underline">KVKK Aydınlatma Metni</a>'ni okudum ve kabul ediyorum.
                  </label>
                </div>

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold">
                    Bir hata oluştu. Lütfen tekrar deneyin.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-blue-600 text-primary-foreground py-6 rounded-2xl font-black text-xl uppercase tracking-widest shadow-2xl shadow-blue-100 transition-all hover:bg-blue-700 active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Loader2 size={24} className="animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    'Hemen Başvur'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
