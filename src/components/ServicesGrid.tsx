import { Building2, Users, FileText, Repeat, Globe, Key, Layers, Landmark, FileSearch, Map, ArrowRight, Gavel, ShieldOff, Megaphone, FolderClosed, Search, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "İmar Durumu",
    slug: "imar-durumu",
    desc: "Parselin yapılaşma koşullarını ve imar durumunu resmi kurumlardan sorgulama.",
    icon: Map,
    isNew: true
  },
  {
    title: "Bina İskan Araştırma",
    slug: "iskan-sorgulama",
    desc: "Belediye ve Çevre Şehircilik nezdinde binanın iskan durumunu detaylıca araştırıyor, size raporluyoruz.",
    icon: FileSearch,
    isNew: true
  },
  {
    title: "Alım & Satım İşlemleri",
    slug: "satis-tapusu",
    desc: "Güvenli devir süreçleri ve tapu randevu yönetimi.",
    icon: Building2
  },
  {
    title: "Veraset & İntikal",
    slug: "veraset-intikal",
    desc: "Miras kalan taşınmazların beyan ve tescil işlemleri.",
    icon: Users
  },
  {
    title: "Vergi İlişik Kesme",
    slug: "vergi-ilisik-kesme",
    desc: "Vergi dairesi ve belediye borç temizleme süreçleri.",
    icon: FileText
  },
  {
    title: "İfraz & Tevhit",
    slug: "ifraz-tevhit",
    desc: "Arazi ayırma ve birleştirme teknik takip süreçleri.",
    icon: Repeat
  },
  {
    title: "Yabancı Satış",
    slug: "yabanci-satis",
    desc: "Vatandaşlık ve yabancı mülk edinim uygunluk takibi.",
    icon: Globe
  },
  {
    title: "İpotek Fekki",
    slug: "ipotek-kaldirma",
    desc: "Banka borcu biten mülklerin ipotek kaldırma işlemleri.",
    icon: Key
  },
  {
    title: "Cins Değişikliği",
    slug: "cins-tahsisi",
    desc: "Arsadan binaya geçiş veya kullanım amacı değişimleri.",
    icon: Layers
  },
  {
    title: "Belediye Rayiç",
    slug: "rayic-bedel",
    desc: "Belediye rayiç değer takibi ve emlak beyan işlemleri.",
    icon: Landmark
  },
  {
    title: "Aile İçi Tapu Danışmanlığı",
    slug: "aile-ic-tapu-danismanligi",
    desc: "Aile içi tapu sorunları ve miras süreçlerinde uzman danışmanlık hizmeti.",
    icon: Users,
    isNew: true
  },
  {
    title: "İcra Takip İşlemleri",
    slug: "icra-takip",
    desc: "İcra dairelerindeki taşınmaz ile ilgili tüm takip süreçlerinin profesyonel yönetimi.",
    icon: Gavel,
    isNew: true
  },
  {
    title: "Haciz Kaldırma",
    slug: "haciz-kaldirma",
    desc: "Tapu üzerindeki haciz şerhlerinin kaldırılması ve borç ödeme süreçlerinin takibi.",
    icon: ShieldOff,
    isNew: true
  },
  {
    title: "İcra Satış Takibi",
    slug: "icra-satis-takibi",
    desc: "İcra yoluyla satışa çıkarılan taşınmazların ihale süreç takibi.",
    icon: Megaphone,
    isNew: true
  },
  {
    title: "İcra Dosyası Kapatma",
    slug: "icra-dosyasi-kapatma",
    desc: "Borç ödendikten sonra icra dosyasının kapatılması ve tapu kayıtlarının temizlenmesi.",
    icon: FolderClosed,
    isNew: true
  },
  {
    title: "Haciz Şerhi Sorgulama",
    slug: "haciz-serhi-sorgulama",
    desc: "Tapu üzerinde haciz, ihtiyati tedbir veya icra şerhi olup olmadığının araştırılması.",
    icon: Search,
    isNew: true
  },
  {
    title: "E-Haciz & Bloke Kaldırma",
    slug: "e-haciz-kaldirma",
    desc: "Vergi dairelerinden uygulanan elektronik haciz ve banka blokelerinin kaldırılması danışmanlığı.",
    icon: Zap,
    isNew: true
  },
];

const ServicesGrid = () => {
  return (
    <section id="hizmetler" className="py-24 bg-background px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-black tracking-ultrawide uppercase text-xs mb-2 underline decoration-blue-100 decoration-4 underline-offset-8">
            Operasyonel Çözümler
          </h2>
          <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase">
            Size Nasıl Yardımcı Olabiliriz?
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            81 ildeki tapu dairelerindeki bürokratik yükü üzerinizden alıyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <Link
                key={i}
                to={`/tapu-islemleri/${s.slug}`}
                className="bg-card p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all hover:scale-105 duration-500 relative overflow-hidden flex flex-col items-start animate-fade-in"
              >
                {s.isNew && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">
                    YENİ
                  </div>
                )}
                <div className="mb-6 inline-block p-5 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-primary-foreground transition-colors duration-500 shadow-inner">
                  <IconComponent size={24} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-2 leading-tight uppercase group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h4>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed mb-6">
                  {s.desc}
                </p>

                <div className="mt-auto flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  AYRINTILARI GÖR <ArrowRight size={12} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
