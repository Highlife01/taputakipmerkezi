import { ShieldCheck } from "lucide-react";

const Footer = () => {
  const domain = "www.taputakipmerkezi.com.tr";

  return (
    <footer className="bg-card py-20 border-t px-4 text-center animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center gap-3">
          <div className="bg-blue-700 p-3 rounded-2xl text-primary-foreground shadow-lg">
            <ShieldCheck size={32} />
          </div>
          <span className="text-3xl font-black text-blue-900 uppercase tracking-tighter leading-none">
            TAPU TAKİP<span className="text-blue-600"> MERKEZİ</span>
          </span>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-megawide mt-2 leading-relaxed text-center">
            Resmi Danışmanlık ve Türkiye Geneli Süreç Yönetimi
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-[8px] font-black text-slate-400 uppercase tracking-widest text-left py-12 border-t">
          <div className="col-span-full mb-4">
            <h4 className="text-slate-900 text-xs mb-2">Hizmet Verdiğimiz İller</h4>
          </div>
          <a href="/tapu-takip/adana" className="hover:text-blue-600">Adana</a>
          <a href="/tapu-takip/adiyaman" className="hover:text-blue-600">Adıyaman</a>
          <a href="/tapu-takip/afyonkarahisar" className="hover:text-blue-600">Afyonkarahisar</a>
          <a href="/tapu-takip/agri" className="hover:text-blue-600">Ağrı</a>
          <a href="/tapu-takip/amasya" className="hover:text-blue-600">Amasya</a>
          <a href="/tapu-takip/ankara" className="hover:text-blue-600">Ankara</a>
          <a href="/tapu-takip/antalya" className="hover:text-blue-600">Antalya</a>
          <a href="/tapu-takip/artvin" className="hover:text-blue-600">Artvin</a>
          <a href="/tapu-takip/aydin" className="hover:text-blue-600">Aydın</a>
          <a href="/tapu-takip/balikesir" className="hover:text-blue-600">Balıkesir</a>
          <a href="/tapu-takip/bilecik" className="hover:text-blue-600">Bilecik</a>
          <a href="/tapu-takip/bingol" className="hover:text-blue-600">Bingöl</a>
          <a href="/tapu-takip/bitlis" className="hover:text-blue-600">Bitlis</a>
          <a href="/tapu-takip/bolu" className="hover:text-blue-600">Bolu</a>
          <a href="/tapu-takip/burdur" className="hover:text-blue-600">Burdur</a>
          <a href="/tapu-takip/bursa" className="hover:text-blue-600">Bursa</a>
          <a href="/tapu-takip/canakkale" className="hover:text-blue-600">Çanakkale</a>
          <a href="/tapu-takip/cankiri" className="hover:text-blue-600">Çankırı</a>
          <a href="/tapu-takip/corum" className="hover:text-blue-600">Çorum</a>
          <a href="/tapu-takip/denizli" className="hover:text-blue-600">Denizli</a>
          <a href="/tapu-takip/diyarbakir" className="hover:text-blue-600">Diyarbakır</a>
          <a href="/tapu-takip/edirne" className="hover:text-blue-600">Edirne</a>
          <a href="/tapu-takip/elazig" className="hover:text-blue-600">Elazığ</a>
          <a href="/tapu-takip/erzincan" className="hover:text-blue-600">Erzincan</a>
          <a href="/tapu-takip/erzurum" className="hover:text-blue-600">Erzurum</a>
          <a href="/tapu-takip/eskisehir" className="hover:text-blue-600">Eskişehir</a>
          <a href="/tapu-takip/gaziantep" className="hover:text-blue-600">Gaziantep</a>
          <a href="/tapu-takip/giresun" className="hover:text-blue-600">Giresun</a>
          <a href="/tapu-takip/gumushane" className="hover:text-blue-600">Gümüşhane</a>
          <a href="/tapu-takip/hakkari" className="hover:text-blue-600">Hakkari</a>
          <a href="/tapu-takip/hatay" className="hover:text-blue-600">Hatay</a>
          <a href="/tapu-takip/isparta" className="hover:text-blue-600">Isparta</a>
          <a href="/tapu-takip/mersin" className="hover:text-blue-600">Mersin</a>
          <a href="/tapu-takip/istanbul" className="hover:text-blue-600 text-blue-600">İstanbul</a>
          <a href="/tapu-takip/izmir" className="hover:text-blue-600 text-blue-600">İzmir</a>
          <a href="/tapu-takip/kars" className="hover:text-blue-600">Kars</a>
          <a href="/tapu-takip/kastamonu" className="hover:text-blue-600">Kastamonu</a>
          <a href="/tapu-takip/kayseri" className="hover:text-blue-600">Kayseri</a>
          <a href="/tapu-takip/kirklareli" className="hover:text-blue-600">Kırklareli</a>
          <a href="/tapu-takip/kirsehir" className="hover:text-blue-600">Kırşehir</a>
          <a href="/tapu-takip/kocaeli" className="hover:text-blue-600">Kocaeli</a>
          <a href="/tapu-takip/konya" className="hover:text-blue-600">Konya</a>
          <a href="/tapu-takip/kutahya" className="hover:text-blue-600">Kütahya</a>
          <a href="/tapu-takip/malatya" className="hover:text-blue-600">Malatya</a>
          <a href="/tapu-takip/manisa" className="hover:text-blue-600">Manisa</a>
          <a href="/tapu-takip/kahramanmaras" className="hover:text-blue-600">Kahramanmaraş</a>
          <a href="/tapu-takip/mardin" className="hover:text-blue-600">Mardin</a>
          <a href="/tapu-takip/mugla" className="hover:text-blue-600">Muğla</a>
          <a href="/tapu-takip/mus" className="hover:text-blue-600">Muş</a>
          <a href="/tapu-takip/nevsehir" className="hover:text-blue-600">Nevşehir</a>
          <a href="/tapu-takip/nigde" className="hover:text-blue-600">Niğde</a>
          <a href="/tapu-takip/ordu" className="hover:text-blue-600">Ordu</a>
          <a href="/tapu-takip/rize" className="hover:text-blue-600">Rize</a>
          <a href="/tapu-takip/sakarya" className="hover:text-blue-600">Sakarya</a>
          <a href="/tapu-takip/samsun" className="hover:text-blue-600">Samsun</a>
          <a href="/tapu-takip/siirt" className="hover:text-blue-600">Siirt</a>
          <a href="/tapu-takip/sinop" className="hover:text-blue-600">Sinop</a>
          <a href="/tapu-takip/sivas" className="hover:text-blue-600">Sivas</a>
          <a href="/tapu-takip/tekirdag" className="hover:text-blue-600">Tekirdağ</a>
          <a href="/tapu-takip/tokat" className="hover:text-blue-600">Tokat</a>
          <a href="/tapu-takip/trabzon" className="hover:text-blue-600">Trabzon</a>
          <a href="/tapu-takip/tunceli" className="hover:text-blue-600">Tunceli</a>
          <a href="/tapu-takip/sanliurfa" className="hover:text-blue-600">Şanlıurfa</a>
          <a href="/tapu-takip/usak" className="hover:text-blue-600">Uşak</a>
          <a href="/tapu-takip/van" className="hover:text-blue-600">Van</a>
          <a href="/tapu-takip/yozgat" className="hover:text-blue-600">Yozgat</a>
          <a href="/tapu-takip/zonguldak" className="hover:text-blue-600">Zonguldak</a>
          <a href="/tapu-takip/aksaray" className="hover:text-blue-600">Aksaray</a>
          <a href="/tapu-takip/bayburt" className="hover:text-blue-600">Bayburt</a>
          <a href="/tapu-takip/karaman" className="hover:text-blue-600">Karaman</a>
          <a href="/tapu-takip/kirikkale" className="hover:text-blue-600">Kırıkkale</a>
          <a href="/tapu-takip/batman" className="hover:text-blue-600">Batman</a>
          <a href="/tapu-takip/sirnak" className="hover:text-blue-600">Şırnak</a>
          <a href="/tapu-takip/bartin" className="hover:text-blue-600">Bartın</a>
          <a href="/tapu-takip/ardahan" className="hover:text-blue-600">Ardahan</a>
          <a href="/tapu-takip/igdir" className="hover:text-blue-600">Iğdır</a>
          <a href="/tapu-takip/yalova" className="hover:text-blue-600">Yalova</a>
          <a href="/tapu-takip/karabuk" className="hover:text-blue-600">Karabük</a>
          <a href="/tapu-takip/kilis" className="hover:text-blue-600">Kilis</a>
          <a href="/tapu-takip/osmaniye" className="hover:text-blue-600">Osmaniye</a>
          <a href="/tapu-takip/duzce" className="hover:text-blue-600">Düzce</a>
        </div>

        <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-superwide">
          <p>© 2024 {domain.toUpperCase()} - TÜM HAKLARI SAKLIDIR.</p>
          <div className="flex gap-10 flex-wrap justify-center">
            <a href="/hizmetler" className="hover:text-blue-600 underline underline-offset-4 font-bold text-blue-600 uppercase">
              TÜRKİYE GENELİ HİZMET
            </a>
            <a href="/icra-islemleri" className="hover:text-red-600 underline underline-offset-4 font-bold text-red-600 uppercase">
              İCRA İŞLEMLERİ
            </a>
            <a href="/hizmet-sartlari" className="hover:text-blue-600 uppercase">
              Hizmet Şartları
            </a>
            <a href="/kvkk" className="hover:text-blue-600 uppercase">
              KVKK
            </a>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
            Yetki Belge No: 0100277
          </p>
          <p className="text-[10px] text-slate-400 font-medium leading-relaxed opacity-60">
            Hizmetlerimiz, resmi kurumlarla herhangi bir ayrıcalık veya öncelik sağlamaz.
            <br className="hidden md:block" />
            Tüm işlemler mevzuata uygun ve noter vekâleti kapsamında yürütülür.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
