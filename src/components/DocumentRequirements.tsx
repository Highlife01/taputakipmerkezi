import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

type ServiceType = "satış" | "intikal" | "vergi";

const requiredDocs: Record<ServiceType, string[]> = {
  satış: ["Tapu Fotokopisi", "Kimlik Aslı", "Belediye Rayiç Değer Belgesi", "DASK Poliçesi"],
  intikal: ["Veraset İlamı", "Taşınmaz Listesi", "İlgili Belediye Beyanları", "E-devlet Şifresi"],
  vergi: ["Emlak Beyanı", "Kimlik Fotokopisi", "Vergi Kimlik Numarası", "Borç Çizelgesi"],
};

const DocumentRequirements = () => {
  const [selectedDocService, setSelectedDocService] = useState<ServiceType>("satış");

  return (
    <section
      id="evraklar"
      className="py-24 bg-blue-900 px-4 text-primary-foreground overflow-hidden relative shadow-inner"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tighter uppercase">
            İşlem İçin Hangi <br />
            <span className="text-blue-400">Evraklar Gerekli?</span>
          </h2>
          <p className="text-blue-100/70 font-medium text-lg">
            Hata yapmamak ve süreci hızlandırmak için seçiminizi yapın.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
            {(["satış", "intikal", "vergi"] as ServiceType[]).map((service) => (
              <button
                key={service}
                onClick={() => setSelectedDocService(service)}
                className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                  selectedDocService === service
                    ? "bg-card text-blue-900 shadow-2xl scale-105"
                    : "bg-blue-800 text-blue-300 hover:bg-blue-700"
                }`}
              >
                {service.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[3rem] p-10 space-y-4 shadow-2xl">
          {requiredDocs[selectedDocService].map((doc, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5 bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-default group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-black text-sm shrink-0 shadow-lg">
                {idx + 1}
              </div>
              <span className="font-bold text-base tracking-wide group-hover:translate-x-2 transition-transform uppercase">
                {doc}
              </span>
              <CheckCircle2 className="ml-auto text-blue-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentRequirements;
