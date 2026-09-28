import fs from 'fs';
import path from 'path';

const rawCitiesData = {
    "İstanbul": ["Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüp", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", "Şile", "Silivri", "Şişli", "Sultanbeyli", "Sultangazi", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"],
    "Ardahan": ["Ardahan", "Çıldır", "Damal", "Göle", "Hanak", "Posof"],
    "Adana": ["Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Sarıçam", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir"],
    "Artvin": ["Ardanuç", "Arhavi", "Artvin", "Borçka", "Hopa", "Murgul", "Şavşat", "Yusufeli"],
    "Batman": ["Batman", "Beşiri", "Gercüş", "Hasankeyf", "Kozluk", "Sason"],
    "Ağrı": ["Ağrı", "Diyadin", "Doğubeyazıt", "Eleşkirt", "Hamur", "Patnos", "Taşlıçay", "Tutak"],
    "İzmir": ["Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama", "Beydağ", "Bornova", "Buca", "Çeşme", "Çiğli", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar", "Karaburun", "Karşıyaka", "Kemalpaşa", "Kınık", "Kiraz", "Konak", "Menderes", "Menemen", "Narlıdere", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla"],
    "Adıyaman": ["Adıyaman", "Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Samsat", "Sincik", "Tut"],
    "Ankara": ["Akyurt", "Altındağ", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ", "Etimesgut", "Evren", "Gölbaşı", "Güdül", "Haymana", "Kalecik", "Kazan", "Keçiören", "Kızılcahamam", "Mamak", "Nallıhan", "Polatlı", "Pursaklar", "Şereflikoçhisar", "Sincan", "Yenimahalle"],
    "Aydın": ["Aydın", "Bozdoğan", "Buharkent", "Çine", "Didim", "Germencik", "İncirliova", "Karacasu", "Karpuzlu", "Koçarlı", "Köşk", "Kuşadası", "Kuyucak", "Nazilli", "Söke", "Sultanhisar", "Yenipazar"],
    "Aksaray": ["Ağaçören", "Aksaray", "Eskil", "Gülağaç", "Güzelyurt", "Ortaköy", "Sarıyahşi"],
    "Bartın": ["Amasra", "Bartın", "Kurucaşile", "Ulus"],
    "Afyonkarahisar": ["Afyon", "Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar", "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar", "İhsaniye", "İscehisar", "Kızılören", "Sandıklı", "Sincanlı", "Şuhut", "Sultandağı"],
    "Balıkesir": ["Ayvalık", "Balıkesir", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gömeç", "Gönen", "Havran", "İvrindi", "Kepsut", "Manyas", "Marmara", "Savaştepe", "Sındırgı", "Susurluk"],
    "Antalya": ["Akseki", "Aksu", "Alanya", "Demre", "Döşemealtı", "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş", "İbradı", "Kaş", "Kemer", "Kepez", "Konyaaltı", "Korkuteli", "Kumluca", "Manavgat", "Muratpaşa", "Serik"],
    "Bursa": ["Büyükorhan", "Gemlik", "Gürsu", "Harmancık", "İnegöl", "İznik", "Karacabey", "Keles", "Kestel", "Mudanya", "Mustafakemalpaşa", "Nilüfer", "Orhaneli", "Orhangazi", "Osmangazi", "Yenişehir", "Yıldırım"],
    "Amasya": ["Amasya", "Göynücek", "Gümüşhacıköy", "Hamamözü", "Merzifon", "Suluova", "Taşova"],
    "Çanakkale": ["Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan", "Çanakkale", "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki", "Yenice"],
    "Bayburt": ["Aydıntepe", "Bayburt", "Demirözü"],
    "Diyarbakır": ["Bağlar", "Bismil", "Çermik", "Çınar", "Çüngüş", "Dicle", "Eğil", "Ergani", "Hani", "Hazro", "Kayapınar", "Kocaköy", "Kulp", "Lice", "Silvan", "Sur", "Yenişehir"],
    "Bilecik": ["Bilecik", "Bozüyük", "Gölpazarı", "İnhisar", "Osmaneli", "Pazaryeri", "Söğüt", "Yenipazar"],
    "Bingöl": ["Adaklı", "Bingöl", "Genç", "Karlıova", "Kiğı", "Solhan", "Yayladere", "Yedisu"],
    "Burdur": ["Ağlasun", "Altınyayla", "Bucak", "Burdur", "Çavdır", "Çeltikçi", "Gölhisar", "Karamanlı", "Kemer", "Tefenni", "Yeşilova"],
    "Düzce": ["Akçakoca", "Çilimli", "Cumayeri", "Düzce", "Gölyaka", "Gümüşova", "Kaynaşlı", "Yığılca"],
    "Çorum": ["Alaca", "Bayat", "Boğazkale", "Çorum", "Dodurga", "İskilip", "Kargı", "Laçin", "Mecitözü", "Oğuzlar", "Ortaköy", "Osmancık", "Sungurlu", "Uğurludağ"],
    "Çankırı": ["Atkaracalar", "Bayramören", "Çankırı", "Çerkeş", "Eldivan", "Ilgaz", "Kızılırmak", "Korgun", "Kurşunlu", "Orta", "Şabanözü", "Yapraklı"],
    "Bitlis": ["Adilcevaz", "Ahlat", "Bitlis", "Güroymak", "Hizan", "Mutki", "Tatvan"],
    "Gümüşhane": ["Gümüşhane", "Kelkit", "Köse", "Kürtün", "Şiran", "Torul"],
    "Bolu": ["Bolu", "Dörtdivan", "Gerede", "Göynük", "Kıbrıscık", "Mengen", "Mudurnu", "Seben", "Yeniçağa"],
    "Kahramanmaraş": ["Afşin", "Andırın", "Çağlıyancerit", "Ekinözü", "Elbistan", "Göksun", "Kahramanmaraş", "Nurhak", "Pazarcık", "Türkoğlu"],
    "Karaman": ["Ayrancı", "Başyayla", "Ermenek", "Karaman", "Kazımkarabekir", "Sarıveliler"],
    "Edirne": ["Edirne", "Enez", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Süloğlu", "Uzunköprü"],
    "Erzurum": ["Aşkale", "Aziziye", "Çat", "Hınıs", "Horasan", "İspir", "Karaçoban", "Karayazı", "Köprüköy", "Narman", "Oltu", "Olur", "Palandöken", "Pasinler", "Pazaryolu", "Şenkaya", "Tekman", "Tortum", "Uzundere", "Yakutiye"],
    "Hakkari": ["Çukurca", "Hakkari", "Şemdinli", "Yüksekova"],
    "Eskişehir": ["Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han", "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Odunpazarı", "Sarıcakaya", "Seyitgazi", "Sivrihisar", "Tepebaşı"],
    "Elazığ": ["Ağın", "Alacakaya", "Arıcak", "Baskil", "Elazığ", "Karakoçan", "Keban", "Kovancılar", "Maden", "Palu", "Sivrice"],
    "Karabük": ["Eflani", "Eskipazar", "Karabük", "Ovacık", "Safranbolu", "Yenice"],
    "Giresun": ["Alucra", "Bulancak", "Çamoluk", "Çanakçı", "Dereli", "Doğankent", "Espiye", "Eynesil", "Giresun", "Görele", "Güce", "Keşap", "Piraziz", "Şebinkarahisar", "Tirebolu", "Yağlıdere"],
    "Iğdır": ["Aralık", "Iğdır", "Karakoyunlu", "Tuzluca"],
    "Gaziantep": ["Araban", "İslahiye", "Karkamış", "Nizip", "Nurdağı", "Oğuzeli", "Şahinbey", "Şehitkamil", "Yavuzeli"],
    "Hatay": ["Altınözü", "Antakya", "Belen", "Dörtyol", "Erzin", "Hassa", "İskenderun", "Kırıkhan", "Kumlu", "Reyhanlı", "Samandağ", "Yayladağı"],
    "Erzincan": ["Çayırlı", "Erzincan", "Ilıç", "Kemah", "Kemaliye", "Otlukbeli", "Refahiye", "Tercan", "Üzümlü"],
    "Denizli": ["Acıpayam", "Akköy", "Babadağ", "Baklan", "Bekilli", "Beyağaç", "Bozkurt", "Buldan", "Çal", "Çameli", "Çardak", "Çivril", "Denizli", "Güney", "Honaz", "Kale", "Sarayköy", "Serinhisar", "Tavas"],
    "Isparta": ["Aksu", "Atabey", "Eğirdir", "Gelendost", "Gönen", "Isparta", "Keçiborlu", "Şarkikaraağaç", "Senirkent", "Sütçüler", "Uluborlu", "Yalvaç", "Yenişarbademli"],
    "Kars": ["Akyaka", "Arpaçay", "Digor", "Kağızman", "Kars", "Sarıkamış", "Selim", "Susuz"],
    "Konya": ["Ahırlı", "Akören", "Akşehir", "Altınekin", "Beyşehir", "Bozkır", "Çeltik", "Cihanbeyli", "Çumra", "Derbent", "Derebucak", "Doğanhisar", "Emirgazi", "Ereğli", "Güneysınır", "Hadim", "Halkapınar", "Hüyük", "Ilgın", "Kadınhanı", "Karapınar", "Karatay", "Kulu", "Meram", "Sarayönü", "Selçuklu", "Seydişehir", "Taşkent", "Tuzlukçu", "Yalıhüyük", "Yunak"],
    "Kırklareli": ["Babaeski", "Demirköy", "Kırklareli", "Kofçaz", "Lüleburgaz", "Pehlivanköy", "Pınarhisar", "Vize"],
    "Kastamonu": ["Abana", "Ağlı", "Araç", "Azdavay", "Bozkurt", "Çatalzeytin", "Cide", "Daday", "Devrekani", "Doğanyurt", "Hanönü", "İhsangazi", "İnebolu", "Kastamonu", "Küre", "Pınarbaşı", "Şenpazar", "Seydiler", "Taşköprü", "Tosya"],
    "Kilis": ["Elbeyli", "Kilis", "Musabeyli", "Polateli"],
    "Kırşehir": ["Akçakent", "Akpınar", "Boztepe", "Çiçekdağı", "Kaman", "Kırşehir", "Mucur"],
    "Mersin": ["Akdeniz", "Anamur", "Aydıncık", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Mezitli", "Mut", "Silifke", "Tarsus", "Toroslar", "Yenişehir"],
    "Kocaeli": ["Başiskele", "Çayırova", "Darıca", "Derince", "Dilovası", "Gebze", "Gölcük", "İzmit", "Kandıra", "Karamürsel", "Kartepe", "Körfez"],
    "Manisa": ["Ahmetli", "Akhisar", "Alaşehir", "Demirci", "Gölmarmara", "Gördes", "Kırkağaç", "Köprübaşı", "Kula", "Manisa", "Salihli", "Sarıgöl", "Saruhanlı", "Selendi", "Soma", "Turgutlu"],
    "Malatya": ["Akçadağ", "Arapkir", "Arguvan", "Battalgazi", "Darende", "Doğanşehir", "Doğanyol", "Hekimhan", "Kale", "Kuluncak", "Malatya", "Pütürge", "Yazıhan", "Yeşilyurt"],
    "Muğla": ["Bodrum", "Dalaman", "Datça", "Fethiye", "Kavaklıdere", "Köyceğiz", "Marmaris", "Milas", "Muğla", "Ortaca", "Ula", "Yatağan"],
    "Muş": ["Bulanık", "Hasköy", "Korkut", "Malazgirt", "Muş", "Varto"],
    "Kayseri": ["Akkışla", "Bünyan", "Develi", "Felahiye", "Hacılar", "İncesu", "Kocasinan", "Melikgazi", "Özvatan", "Pınarbaşı", "Sarıoğlan", "Sarız", "Talas", "Tomarza", "Yahyalı", "Yeşilhisar"],
    "Kırıkkale": ["Bahşili", "Balışeyh", "Çelebi", "Delice", "Karakeçili", "Keskin", "Kırıkkale", "Sulakyurt", "Yahşihan"],
    "Mardin": ["Dargeçit", "Derik", "Kızıltepe", "Mardin", "Mazıdağı", "Midyat", "Nusaybin", "Ömerli", "Savur", "Yeşilli"],
    "Kütahya": ["Altıntaş", "Aslanapa", "Çavdarhisar", "Domaniç", "Dumlupınar", "Emet", "Gediz", "Hisarcık", "Kütahya", "Pazarlar", "Şaphane", "Simav", "Tavşanlı"],
    "Niğde": ["Altunhisar", "Bor", "Çamardı", "Çiftlik", "Niğde", "Ulukışla"],
    "Nevşehir": ["Acıgöl", "Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Nevşehir", "Ürgüp"],
    "Şanlıurfa": ["Akçakale", "Birecik", "Bozova", "Ceylanpınar", "Halfeti", "Harran", "Hilvan", "Şanlıurfa", "Siverek", "Suruç", "Viranşehir"],
    "Ordu": ["Akkuş", "Aybastı", "Çamaş", "Çatalpınar", "Çaybaşı", "Fatsa", "Gölköy", "Gülyalı", "Gürgentepe", "İkizce", "Kabadüz", "Kabataş", "Korgan", "Kumru", "Mesudiye", "Ordu", "Perşembe", "Ulubey", "Ünye"],
    "Tokat": ["Almus", "Artova", "Başçiftlik", "Erbaa", "Niksar", "Pazar", "Reşadiye", "Sulusaray", "Tokat", "Turhal", "Yeşilyurt", "Zile"],
    "Yozgat": ["Akdağmadeni", "Aydıncık", "Boğazlıyan", "Çandır", "Çayıralan", "Çekerek", "Kadışehri", "Saraykent", "Sarıkaya", "Şefaatli", "Sorgun", "Yenifakılı", "Yerköy", "Yozgat"],
    "Osmaniye": ["Bahçe", "Düziçi", "Hasanbeyli", "Kadirli", "Osmaniye", "Sumbas", "Toprakkale"],
    "Samsun": ["Alaçam", "Asarcık", "Atakum", "Ayvacık", "Bafra", "Canik", "Çarşamba", "Havza", "İlkadım", "Kavak", "Ladik", "Ondokuzmayıs", "Salıpazarı", "Tekkeköy", "Terme", "Vezirköprü", "Yakakent"],
    "Sivas": ["Akıncılar", "Altınyayla", "Divriği", "Doğanşar", "Gemerek", "Gölova", "Gürün", "Hafik", "İmranlı", "Kangal", "Koyulhisar", "Şarkışla", "Sivas", "Suşehri", "Ulaş", "Yıldızeli", "Zara"],
    "Sinop": ["Ayancık", "Boyabat", "Dikmen", "Durağan", "Erfelek", "Gerze", "Saraydüzü", "Sinop", "Türkeli"],
    "Rize": ["Ardeşen", "Çamlıhemşin", "Çayeli", "Derepazarı", "Fındıklı", "Güneysu", "Hemşin", "İkizdere", "İyidere", "Kalkandere", "Pazar", "Rize"],
    "Şırnak": ["Beytüşşebap", "Cizre", "Güçlükonak", "İdil", "Silopi", "Şırnak", "Uludere"],
    "Tunceli": ["Çemişgezek", "Hozat", "Mazgirt", "Nazımiye", "Ovacık", "Pertek", "Pülümür", "Tunceli"],
    "Siirt": ["Aydınlar", "Baykan", "Eruh", "Kurtalan", "Pervari", "Siirt", "Şirvan"],
    "Yalova": ["Altınova", "Armutlu", "Çiftlikköy", "Çınarcık", "Termal", "Yalova"],
    "Van": ["Bahçesaray", "Başkale", "Çaldıran", "Çatak", "Edremit", "Erciş", "Gevaş", "Gürpınar", "Muradiye", "Özalp", "Saray", "Van"],
    "Sakarya": ["Adapazarı", "Akyazı", "Arifiye", "Erenler", "Ferizli", "Geyve", "Hendek", "Karapürçek", "Karasu", "Kaynarca", "Kocaali", "Pamukova", "Sapanca", "Serdivan", "Söğütlü", "Taraklı"],
    "Tekirdağ": ["Çerkezköy", "Çorlu", "Hayrabolu", "Malkara", "Marmaraereğlisi", "Muratlı", "Saray", "Şarköy", "Tekirdağ"],
    "Trabzon": ["Akçaabat", "Araklı", "Arsin", "Beşikdüzü", "Çarşıbaşı", "Çaykara", "Dernekpazarı", "Düzköy", "Hayrat", "Köprübaşı", "Maçka", "Of", "Şalpazarı", "Sürmene", "Tonya", "Trabzon", "Vakfıkebir", "Yomra"],
    "Uşak": ["Banaz", "Eşme", "Karahallı", "Sivaslı", "Ulubey", "Uşak"],
    "Zonguldak": ["Alaplı", "Çaycuma", "Devrek", "Gökçebey", "Karadenizereğli", "Zonguldak"]
};

const services = [
    "imar-durumu", "tapu-devri", "satis-tapusu", "miras-tapu-islemleri", "hisseli-tapu",
    "ipotek-kaldirma", "tapu-randevu", "arsa-tapu", "konut-tapu", "ticari-tapu",
    "veraset-intikal", "vergi-ilisik-kesme", "ifraz-tevhit", "yabanci-satis",
    "kat-irtifaki", "kat-mulkiyeti", "cins-tahsisi", "tapu-sorgulama", "harc-hesaplama",
    "rayic-bedel", "iskan-sorgulama", "adrese-gore-iskan-sorgulama", "tapu-iskan-sorgulama",
    "ada-parsel-iskan-sorgulama", "e-devlet-iskan-sorgulama", "belediye-iskan-sorgulama",
    "aile-ic-tapu-danismanligi", "icra-takip", "haciz-kaldirma", "icra-satis-takibi",
    "icra-dosyasi-kapatma", "haciz-serhi-sorgulama", "e-haciz-kaldirma"
];

const questions = [
    "tapu-devri-ne-kadar-surer", "tapu-devri-masrafi-ne-kadar",
    "hisseli-tapu-satilir-mi", "tapu-islemleri-kac-gun-surer",
    "e-devlet-tapu-takip-nasil-yapilir", "iskan-belgesi-nedir",
    "iskan-olmazsa-ne-olur", "tapu-harci-neye-gore-hesaplanir",
    "ipotek-fekki-ne-kadar-surer", "veraset-intikal-vergisi-odenmeden-tapu-devri-yapilir-mi",
    "hisseli-tapuda-sufa-hakki-nedir", "adrese-gore-iskan-sorgulamasi-nasil-yapilir",
    "yabanci-satisinda-ekspertiz-raporu-zorunlu-mu"
];

// Major metropolitan cities for Service x City programmatic SEO
const majorCities = [
    "istanbul", "ankara", "izmir", "bursa", "antalya",
    "adana", "konya", "gaziantep", "mersin", "kocaeli", "kayseri", "mugla"
];

const topServices = [
    "tapu-devri", "satis-tapusu", "veraset-intikal", "iskan-sorgulama",
    "ipotek-kaldirma", "hisseli-tapu", "icra-takip", "haciz-kaldirma", "imar-durumu"
];

function slugify(text) {
    const trMap = {
        'ç': 'c', 'ğ': 'g', 'ı': 'i', 'i': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
        'Ç': 'c', 'Ğ': 'g', 'İ': 'i', 'I': 'i', 'Ö': 'o', 'Ş': 's', 'Ü': 'u'
    };
    let s = text.split('').map(c => trMap[c] || c).join('').toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '-');
    s = s.replace(/-+/g, '-');
    return s.replace(/^-|-$/g, '');
}

function writeSitemap(filename, urls) {
    const header = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const footer = '</urlset>';
    const content = header + '\n' + urls.join('\n') + '\n' + footer;
    fs.writeFileSync(path.join('public', filename), content, 'utf8');
}

const lastmod = new Date().toISOString().split('T')[0];
const baseUrl = 'https://www.taputakipmerkezi.com.tr';
const sitemapIndexFiles = [];

console.log('🗺️ Sitemaps üretimi başlıyor...');

// 1. Core Pages Sitemap
const coreUrls = [
    `  <url><loc>${baseUrl}/</loc><lastmod>${lastmod}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>`,
    `  <url><loc>${baseUrl}/hizmetler</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`,
    `  <url><loc>${baseUrl}/tapu-islemleri</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`,
    `  <url><loc>${baseUrl}/tapu-sureci</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`,
    `  <url><loc>${baseUrl}/veraset-intikal</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`,
    `  <url><loc>${baseUrl}/icra-islemleri</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`,
    `  <url><loc>${baseUrl}/kvkk</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.3</priority></url>`,
    `  <url><loc>${baseUrl}/hizmet-sartlari</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.3</priority></url>`
];
writeSitemap('sitemap-core.xml', coreUrls);
sitemapIndexFiles.push('sitemap-core.xml');

// 2. Services Sitemap
const serviceUrls = [];
for (const svc of services) {
    serviceUrls.push(`  <url><loc>${baseUrl}/tapu-islemleri/${svc}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`);
}
writeSitemap('sitemap-services.xml', serviceUrls);
sitemapIndexFiles.push('sitemap-services.xml');

// 3. Guides / FAQ Sitemap
const guideUrls = [];
for (const q of questions) {
    guideUrls.push(`  <url><loc>${baseUrl}/tapu-rehberi/${q}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
}
writeSitemap('sitemap-guides.xml', guideUrls);
sitemapIndexFiles.push('sitemap-guides.xml');

// 4. Cities Sitemap (All 81 Provinces)
const cityEntries = Object.entries(rawCitiesData);
const cityUrls = [];
for (const [cityName] of cityEntries) {
    const ilSlug = slugify(cityName);
    cityUrls.push(`  <url><loc>${baseUrl}/tapu-takip/${ilSlug}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
    cityUrls.push(`  <url><loc>${baseUrl}/${ilSlug}-iskan-sorgulama</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`);
}
writeSitemap('sitemap-cities.xml', cityUrls);
sitemapIndexFiles.push('sitemap-cities.xml');

// 5 & 6. Districts Sitemaps (Split into 2 balanced chunks for Google parsing speed)
const midpoint = Math.ceil(cityEntries.length / 2);
const firstHalfCities = cityEntries.slice(0, midpoint);
const secondHalfCities = cityEntries.slice(midpoint);

function generateDistrictUrls(entries) {
    const urls = [];
    for (const [cityName, districts] of entries) {
        const ilSlug = slugify(cityName);
        for (const distName of districts) {
            const ilceSlug = slugify(distName);
            urls.push(`  <url><loc>${baseUrl}/tapu-takip/${ilSlug}/${ilceSlug}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
            urls.push(`  <url><loc>${baseUrl}/${ilSlug}-${ilceSlug}-iskan-sorgulama</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.6</priority></url>`);
        }
    }
    return urls;
}

const districts1Urls = generateDistrictUrls(firstHalfCities);
writeSitemap('sitemap-districts-1.xml', districts1Urls);
sitemapIndexFiles.push('sitemap-districts-1.xml');

const districts2Urls = generateDistrictUrls(secondHalfCities);
writeSitemap('sitemap-districts-2.xml', districts2Urls);
sitemapIndexFiles.push('sitemap-districts-2.xml');

// 7. Geo Services Sitemap (Service x Major Cities)
const geoServiceUrls = [];
for (const citySlug of majorCities) {
    for (const svc of topServices) {
        geoServiceUrls.push(`  <url><loc>${baseUrl}/tapu-islemleri/${svc}/${citySlug}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
    }
}
writeSitemap('sitemap-geo-services.xml', geoServiceUrls);
sitemapIndexFiles.push('sitemap-geo-services.xml');

// Master Sitemap Index
let indexXml = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const fName of sitemapIndexFiles) {
    indexXml += `  <sitemap><loc>${baseUrl}/${fName}</loc><lastmod>${lastmod}</lastmod></sitemap>\n`;
}
indexXml += '</sitemapindex>';
fs.writeFileSync(path.join('public', 'sitemap.xml'), indexXml, 'utf8');

// Cleanup old/orphaned sitemap files in public
const obsoleteFiles = [
    'sitemap-adana.xml', 'sitemap-istanbul.xml', 'sitemap-il.xml', 'sitemap-ilce.xml',
    'sitemap-hizmetler.xml', 'sitemap-rehber.xml',
    'sitemap-geo-adana.xml', 'sitemap-geo-ankara.xml', 'sitemap-geo-antalya.xml',
    'sitemap-geo-bursa.xml', 'sitemap-geo-gaziantep.xml', 'sitemap-geo-istanbul.xml',
    'sitemap-geo-izmir.xml', 'sitemap-geo-kayseri.xml', 'sitemap-geo-kocaeli.xml',
    'sitemap-geo-konya.xml', 'sitemap-geo-mersin.xml'
];

for (const obs of obsoleteFiles) {
    const p = path.join('public', obs);
    if (fs.existsSync(p)) {
        try {
            fs.unlinkSync(p);
        } catch (e) {
            // ignore
        }
    }
}

const totalUrls = coreUrls.length + serviceUrls.length + guideUrls.length + cityUrls.length + districts1Urls.length + districts2Urls.length + geoServiceUrls.length;

console.log(`✅ Sitemaps başarıyla oluşturuldu!`);
console.log(`📊 Toplam ${sitemapIndexFiles.length} sitemap dosyası sitemap.xml indeksine kaydedildi.`);
console.log(`🌐 Toplam URL Sayısı: ${totalUrls}`);
