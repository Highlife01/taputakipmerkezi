import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      {/* noIndex: 404 sayfası arama motorları tarafından indekslenmemelidir */}
      <SEO
        title="Sayfa Bulunamadı (404)"
        description="Aradığınız sayfa bulunamadı. Tapu Takip Merkezi ana sayfasından tüm tapu, vergi ve miras işlemlerine devam edebilirsiniz."
        noIndex
      />
      <div className="max-w-md w-full text-center space-y-8">
        <div className="bg-blue-600 text-white w-24 h-24 rounded-[2rem] flex items-center justify-center text-4xl font-black mx-auto shadow-2xl rotate-3">
          404
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
            Sayfa <span className="text-blue-600">Bulunamadı</span>
          </h1>
          <p className="text-slate-500 font-medium">
            Aradığınız sayfa taşınmış veya silinmiş olabilir. Tapu Takip Merkezi ile tüm resmi işlemlerinize devam edebilirsiniz.
          </p>
        </div>
        <div className="pt-4">
          <a
            href="/"
            className="inline-block bg-slate-900 text-white px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-xl shadow-slate-200"
          >
            ANA SAYFAYA DÖN
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
