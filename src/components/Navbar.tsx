import { useState } from "react";
import { ShieldCheck, Phone, Menu, X, Info } from "lucide-react";
import { SITE } from "@/config/site";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = SITE.phoneRaw;
  const displayPhone = SITE.phoneDisplay;
  const domain = SITE.domain;

  return (
    <>
      {/* Şeffaflık şeridi: hizmetin niteliği ziyaretçiye en üstte açıkça bildirilir */}
      <div className="bg-slate-900 text-slate-300 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-start gap-2 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
          <Info size={14} className="shrink-0 mt-0.5 text-blue-400" />
          <span>{SITE.disclaimerShort}</span>
        </div>
      </div>
      <nav className="bg-card border-b sticky top-0 z-50 px-4 h-20 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-700 p-2 rounded-xl text-primary-foreground shadow-lg">
              <ShieldCheck size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-blue-900 leading-none uppercase tracking-tighter">
                TAPU TAKİP<span className="text-blue-600"> MERKEZİ</span>
              </span>
              <span className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-widest">
                {domain}
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 text-blue-700 font-bold bg-blue-50 px-4 py-2 rounded-full border border-blue-100 transition-colors hover:bg-blue-100"
            >
              <Phone size={16} /> {displayPhone}
            </a>
            <a
              href="/hizmetler"
              className="text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors"
            >
              Hizmetler
            </a>
            <a
              href="/tapu-sureci"
              className="text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors"
            >
              Tapu Süreci
            </a>
            <a
              href="/veraset-intikal"
              className="text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors"
            >
              Miras İşlemleri
            </a>
            <a
              href="/icra-islemleri"
              className="text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors"
            >
              İcra İşlemleri
            </a>
            <a
              href="/#evraklar"
              className="text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors text-nowrap"
            >
              Evrak Listesi
            </a>
            <a
              href="/#iletisim"
              className="bg-blue-600 text-primary-foreground px-6 py-3 rounded-2xl font-black text-xs uppercase shadow-lg shadow-blue-100 transition-all hover:bg-blue-700"
            >
              İletişim
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-slate-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-card pt-24 px-6 space-y-6 animate-fade-in text-center">
          <a
            href="/hizmetler"
            onClick={() => setIsMenuOpen(false)}
            className="block text-2xl font-black text-slate-800 uppercase tracking-tight"
          >
            Hizmetler
          </a>
          <a
            href="/tapu-sureci"
            onClick={() => setIsMenuOpen(false)}
            className="block text-2xl font-black text-slate-800 uppercase tracking-tight"
          >
            Tapu Süreci
          </a>
          <a
            href="/veraset-intikal"
            onClick={() => setIsMenuOpen(false)}
            className="block text-2xl font-black text-slate-800 uppercase tracking-tight"
          >
            Miras İşlemleri
          </a>
          <a
            href="/icra-islemleri"
            onClick={() => setIsMenuOpen(false)}
            className="block text-2xl font-black text-slate-800 uppercase tracking-tight"
          >
            İcra İşlemleri
          </a>
          <a
            href="/#evraklar"
            onClick={() => setIsMenuOpen(false)}
            className="block text-2xl font-black text-slate-800 uppercase tracking-tight"
          >
            Evrak Listesi
          </a>
          <a
            href="/#iletisim"
            onClick={() => setIsMenuOpen(false)}
            className="block text-2xl font-black text-blue-600 uppercase tracking-tight"
          >
            Bize Ulaşın
          </a>
          <div className="pt-6 border-t">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
              7/24 Destek
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className="text-2xl font-black text-slate-900 tracking-tighter"
            >
              {displayPhone}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
