/**
 * Pre-render edilecek route'ların listesi
 * Bu dosya build sırasında statik HTML üretmek için kullanılır
 */

// Türkiye il ve ilçe verileri
const illerData = {
    "istanbul": ["adalar", "arnavutkoy", "atasehir", "avcilar", "bagcilar", "bahcelievler", "bakirkoy", "basaksehir", "bayrampasa", "besiktas", "beykoz", "beylikduzu", "beyoglu", "buyukcekmece", "catalca", "cekmekoy", "esenler", "esenyurt", "eyup", "fatih", "gaziosmanpasa", "gungoren", "kadikoy", "kagithane", "kartal", "kucukcekmece", "maltepe", "pendik", "sancaktepe", "sariyer", "sile", "silivri", "sisli", "sultanbeyli", "sultangazi", "tuzla", "umraniye", "uskudar", "zeytinburnu"],
    "ankara": ["akyurt", "altindag", "ayas", "bala", "beypazari", "camlidere", "cankaya", "cubuk", "elmadag", "etimesgut", "evren", "golbasi", "gudul", "haymana", "kalecik", "kazan", "kecioren", "kizilcahamam", "mamak", "nallihan", "polatli", "pursaklar", "sereflikochisar", "sincan", "yenimahalle"],
    "izmir": ["aliaga", "balcova", "bayindir", "bayrakli", "bergama", "beydag", "bornova", "buca", "cesme", "cigli", "dikili", "foca", "gaziemir", "guzelbahce", "karabaglar", "karaburun", "karsiyaka", "kemalpasa", "kinik", "kiraz", "konak", "menderes", "menemen", "narlidere", "odemis", "seferihisar", "selcuk", "tire", "torbali", "urla"],
    "bursa": ["buyukorhan", "gemlik", "gursu", "harmancik", "inegol", "iznik", "karacabey", "keles", "kestel", "mudanya", "mustafakemalpasa", "nilufer", "orhaneli", "orhangazi", "osmangazi", "yenisehir", "yildirim"],
    "antalya": ["akseki", "aksu", "alanya", "demre", "dosemealti", "elmali", "finike", "gazipasa", "gundogmus", "ibradi", "kas", "kemer", "kepez", "konyaalti", "korkuteli", "kumluca", "manavgat", "muratpasa", "serik"],
    "adana": ["aladag", "ceyhan", "cukurova", "feke", "imamoglu", "karaisali", "karatas", "kozan", "pozanti", "saimbeyli", "saricam", "seyhan", "tufanbeyli", "yumurtalik", "yuregir"],
    "konya": ["ahirli", "akoren", "aksehir", "altinekin", "beysehir", "bozkir", "celtik", "cihanbeyli", "cumra", "derbent", "derebucak", "doganhisar", "emirgazi", "eregli", "guneysinir", "hadim", "halkapinar", "huyuk", "ilgin", "kadinhan", "karapinar", "karatay", "kulu", "meram", "sarayonu", "selcuklu", "seydisehir", "taskent", "tuzlukcu", "yalihuyuk", "yunak"],
    "gaziantep": ["araban", "islahiye", "karkamis", "nizip", "nurdagi", "oguzeli", "sahinbey", "sehitkamil", "yavuzeli"],
    "mersin": ["akdeniz", "anamur", "aydincik", "bozyazi", "camliyayla", "erdemli", "gulnar", "mezitli", "mut", "silifke", "tarsus", "toroslar", "yenisehir"],
    "kocaeli": ["basiskele", "cayirova", "darica", "derince", "dilovasi", "gebze", "golcuk", "izmit", "kandira", "karamursel", "kartepe", "korfez"],
    "kayseri": ["akkisla", "bunyan", "develi", "felahiye", "hacilar", "incesu", "kocasinan", "melikgazi", "ozvatan", "pinarbaşi", "sarioglan", "sariz", "talas", "tomarza", "yahyali", "yesilhisar"]
};

// Hizmet slugları
const hizmetler = [
    "tapu-devri", "satis-tapusu", "miras-tapu-islemleri", "hisseli-tapu",
    "ipotek-kaldirma", "tapu-randevu", "arsa-tapu", "konut-tapu",
    "iskan-sorgulama", "adrese-gore-iskan-sorgulama", "tapu-iskan-sorgulama",
    "ada-parsel-iskan-sorgulama", "e-devlet-iskan-sorgulama", "belediye-iskan-sorgulama",
    "imar-durumu", "ticari-tapu", "veraset-intikal", "vergi-ilisik-kesme",
    "ifraz-tevhit", "yabanci-satis", "kat-irtifaki", "kat-mulkiyeti",
    "cins-tahsisi", "tapu-sorgulama", "harc-hesaplama", "rayic-bedel",
    "icra-takip", "haciz-kaldirma", "icra-satis-takibi", "icra-dosyasi-kapatma",
    "haciz-serhi-sorgulama", "e-haciz-kaldirma", "aile-ic-tapu-danismanligi"
];

// Rehber slugları
const rehberler = [
    "tapu-devri-nasil-yapilir",
    "veraset-intikal-islemleri",
    "ipotek-kaldirma-sureci",
    "tapu-harclari",
    "emlak-vergisi"
];

function generateRoutes() {
    const routes = [
        '/',
        '/hizmetler',
        '/tapu-islemleri',
        '/tapu-sureci',
        '/veraset-intikal',
        '/icra-islemleri',
        '/kvkk',
        '/hizmet-sartlari'
    ];

    // Hizmet sayfaları
    hizmetler.forEach(hizmet => {
        routes.push(`/tapu-islemleri/${hizmet}`);
    });

    // Rehber sayfaları
    rehberler.forEach(rehber => {
        routes.push(`/tapu-rehberi/${rehber}`);
    });

    // İl sayfaları (sadece büyük şehirler - öncelikli)
    const oncelikliIller = ['istanbul', 'ankara', 'izmir', 'bursa', 'antalya', 'adana', 'konya', 'gaziantep', 'mersin', 'kocaeli', 'kayseri'];
    
    oncelikliIller.forEach(il => {
        routes.push(`/tapu-takip/${il}`);
        routes.push(`/${il}-iskan-sorgulama`);
        
        // İlçe sayfaları
        if (illerData[il]) {
            illerData[il].forEach(ilce => {
                routes.push(`/tapu-takip/${il}/${ilce}`);
                routes.push(`/${il}-${ilce}-iskan-sorgulama`);
            });
        }
    });

    return routes;
}

export const prerenderRoutes = generateRoutes();
export default prerenderRoutes;

console.log(`Toplam ${prerenderRoutes.length} route pre-render edilecek`);
