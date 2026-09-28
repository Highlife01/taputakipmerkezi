import { useState } from "react";
import { regionsList, getCitiesByRegion, CityGeoData } from "@/data/geoData";
import { MapPin, ChevronRight, Compass } from "lucide-react";

const RegionalExplorer = () => {
    const [selectedRegion, setSelectedRegion] = useState<CityGeoData['region']>('Marmara');

    const activeCities = getCitiesByRegion(selectedRegion);

    return (
        <section className="bg-slate-50 border-y py-14 px-4" id="bolgeler">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                            <Compass size={14} /> 81 İlde Yerel Hizmet Ağı
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tighter">
                            Türkiye Geneli <span className="text-blue-600">Tapu Takip Bölgeleri</span>
                        </h2>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mt-2">
                            Tüm il ve ilçe tapu müdürlüklerinde resmi danışmanlık ve randevu takibi
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-blue-600 w-12 h-1.5 rounded-full" />
                        <div className="bg-slate-200 w-4 h-1.5 rounded-full" />
                    </div>
                </div>

                {/* Region Selector Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 pb-2 border-b border-slate-200">
                    {regionsList.map((region) => (
                        <button
                            key={region}
                            onClick={() => setSelectedRegion(region)}
                            className={`px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all ${
                                selectedRegion === region
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200 -translate-y-0.5"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                            }`}
                        >
                            {region}
                        </button>
                    ))}
                </div>

                {/* City Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {activeCities.map((city) => (
                        <a
                            key={city.slug}
                            href={`/tapu-takip/${city.slug}`}
                            className="group bg-white p-4 rounded-2xl border-2 border-transparent hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100 transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 group-hover:text-blue-500">
                                    <span>TR-{city.plateCode}</span>
                                    <MapPin size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-sm font-black text-slate-800 uppercase block group-hover:text-blue-600 transition-colors">
                                    {city.name}
                                </span>
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-3 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                                Tapu Takip <ChevronRight size={10} />
                            </span>
                        </a>
                    ))}
                </div>

                {/* Quick Directory for all 81 provinces (Hidden visual clutter, 100% crawlable by search engines) */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                        81 İlin Tamamı İçin Online Başvuru & Dosya Takibi:
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] font-bold text-slate-500">
                        {regionsList.flatMap(r => getCitiesByRegion(r)).map((c, i, arr) => (
                            <span key={c.slug} className="inline-flex items-center gap-1.5">
                                <a
                                    href={`/tapu-takip/${c.slug}`}
                                    className="hover:text-blue-600 hover:underline"
                                    title={`${c.name} Tapu Takip Hizmeti`}
                                >
                                    {c.name}
                                </a>
                                {i < arr.length - 1 && <span className="text-slate-300">•</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegionalExplorer;
