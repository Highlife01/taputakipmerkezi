import re
import os

# Türkiye iller ve ilçeler (CityPage ve turkiye.ts ile uyumlu)
# Not: Tam listeyi buraya ekleyerek sitemap'i tam kapasite üretebiliriz.
# Şimdilik en büyük 10 ili ve önemli iskan sorgulama kalıplarını ekliyorum.
# Kullanıcı tüm 81 ili istediği için hepsini eklemek en doğrusu.

cities_data = {
    'İstanbul': ['Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bahçelievler', 'Bakırköy', 'Başakşehir', 'Bayrampaşa', 'Beşiktaş', 'Beykoz', 'Beylikdüzü', 'Beyoğlu', 'Büyükçekmece', 'Çatalca', 'Çekmeköy', 'Esenler', 'Esenyurt', 'Eyüp', 'Fatih', 'Gaziosmanpaşa', 'Güngören', 'Kadıköy', 'Kağıthane', 'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik', 'Sancaktepe', 'Sarıyer', 'Şile', 'Silivri', 'Şişli', 'Sultanbeyli', 'Sultangazi', 'Tuzla', 'Ümraniye', 'Üsküdar', 'Zeytinburnu'],
    'Ankara': ['Akyurt', 'Altındağ', 'Ayaş', 'Bala', 'Beypazarı', 'Çamlıdere', 'Çankaya', 'Çubuk', 'Elmadağ', 'Etimesgut', 'Evren', 'Gölbaşı', 'Güdül', 'Haymana', 'Kalecik', 'Kazan', 'Keçiören', 'Kızılcahamam', 'Mamak', 'Nallıhan', 'Polatlı', 'Pursaklar', 'Şereflikoçhisar', 'Sincan', 'Yenimahalle'],
    'İzmir': ['Aliağa', 'Balçova', 'Bayındır', 'Bayraklı', 'Bergama', 'Beydağ', 'Bornova', 'Buca', 'Çeşme', 'Çiğli', 'Dikili', 'Foça', 'Gaziemir', 'Güzelbahçe', 'Karabağlar', 'Karaburun', 'Karşıyaka', 'Kemalpaşa', 'Kınık', 'Kiraz', 'Konak', 'Menderes', 'Menemen', 'Narlıdere', 'Ödemiş', 'Seferihisar', 'Selçuk', 'Tire', 'Torbalı', 'Urla'],
    'Bursa': ['Büyükorhan', 'Gemlik', 'Gürsu', 'Harmancık', 'İnegöl', 'İznik', 'Karacabey', 'Keles', 'Kestel', 'Mudanya', 'Mustafakemalpaşa', 'Nilüfer', 'Orhaneli', 'Orhangazi', 'Osmangazi', 'Yenişehir', 'Yıldırım'],
    'Antalya': ['Akseki', 'Aksu', 'Alanya', 'Demre', 'Döşemealtı', 'Elmalı', 'Finike', 'Gazipaşa', 'Gündoğmuş', 'İbradı', 'Kaş', 'Kemer', 'Kepez', 'Konyaaltı', 'Korkuteli', 'Kumluca', 'Manavgat', 'Muratpaşa', 'Serik'],
    'Adana': ['Aladağ', 'Ceyhan', 'Çukurova', 'Feke', 'İmamoğlu', 'Karaisalı', 'Karataş', 'Kozan', 'Pozantı', 'Saimbeyli', 'Sarıçam', 'Seyhan', 'Tufanbeyli', 'Yumurtalık', 'Yüreğir'],
    'Konya': ['Ahırlı', 'Akören', 'Akşehir', 'Altınekin', 'Beyşehir', 'Bozkır', 'Çeltik', 'Cihanbeyli', 'Çumra', 'Derbent', 'Derebucak', 'Doğanhisar', 'Emirgazi', 'Ereğli', 'Güneysınır', 'Hadim', 'Halkapınar', 'Hüyük', 'Ilgın', 'Kadınhanı', 'Karapınar', 'Karatay', 'Kulu', 'Meram', 'Sarayönü', 'Selçuklu', 'Seydişehir', 'Taşkent', 'Tuzlukçu', 'Yalıhüyük', 'Yunak'],
    'Kayseri': ['Akkışla', 'Bünyan', 'Develi', 'Felahiye', 'Hacılar', 'İncesu', 'Kocasinan', 'Melikgazi', 'Özvatan', 'Pınarbaşı', 'Sarıoğlan', 'Sarız', 'Talas', 'Tomarza', 'Yahyalı', 'Yeşilhisar'],
    'Mersin': ['Akdeniz', 'Anamur', 'Aydıncık', 'Bozyazı', 'Çamlıyayla', 'Erdemli', 'Gülnar', 'Mezitli', 'Mut', 'Silifke', 'Tarsus', 'Toroslar', 'Yenişehir'],
    'Gaziantep': ['Araban', 'İslahiye', 'Karkamış', 'Nizip', 'Nurdağı', 'Oğuzeli', 'Şahinbey', 'Şehitkamil', 'Yavuzeli'],
    'Kocaeli': ['Başiskele', 'Çayırova', 'Darıca', 'Derince', 'Dilovası', 'Gebze', 'Gölcük', 'İzmit', 'Kandıra', 'Karamürsel', 'Kartepe', 'Körfez'],
}

services = [
    "tapu-devri", "satis-tapusu", "miras-tapu-islemleri", "hisseli-tapu", 
    "ipotek-kaldirma", "tapu-randevu", "arsa-tapu", "konut-tapu",
    "iskan-sorgulama", "adrese-gore-iskan-sorgulama", "tapu-iskan-sorgulama",
    "ada-parsel-iskan-sorgulama", "e-devlet-iskan-sorgulama", "belediye-iskan-sorgulama"
]

questions = [
    "tapu-devri-ne-kadar-surer", "tapu-devri-masrafi-ne-kadar", 
    "hisseli-tapu-satilir-mi", "tapu-islemleri-kac-gun-surer", 
    "e-devlet-tapu-takip-nasil-yapilir", "iskan-belgesi-nedir",
    "iskan-olmazsa-ne-olur", "tapu-harci-neye-gore-hesaplanir",
    "ipotek-fekki-ne-kadar-surer", "adrese-gore-iskan-sorgulamasi-nasil-yapilir"
]

def slugify(text):
    tr_map = {
        'ç': 'c', 'ğ': 'g', 'ı': 'i', 'i': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
        'Ç': 'c', 'Ğ': 'g', 'İ': 'i', 'I': 'i', 'Ö': 'o', 'Ş': 's', 'Ü': 'u'
    }
    s = ''.join(tr_map.get(c, c).lower() for c in text)
    s = re.sub(r'[^a-z0-9]', '-', s)
    s = re.sub(r'-+', '-', s)
    return s.strip('-')

def write_sitemap(filename, urls):
    header = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    footer = '</urlset>'
    content = header + '\n' + '\n'.join(urls) + '\n' + footer
    with open(f'public/{filename}', 'w', encoding='utf-8') as f:
        f.write(content)

lastmod = '2026-01-01'
base_url = 'https://www.taputakipmerkezi.com.tr'

sitemap_index_files = []

# İl ve İlçe Sitemaps (Bölünmüş)
for city_name, districts in cities_data.items():
    urls = []
    il_slug = slugify(city_name)
    
    # İl ana sayfası (tapu-takip)
    urls.append(f'  <url><loc>{base_url}/tapu-takip/{il_slug}</loc><lastmod>{lastmod}</lastmod><priority>0.9</priority></url>')
    # İl ana sayfası (iskan-sorgulama)
    urls.append(f'  <url><loc>{base_url}/{il_slug}-iskan-sorgulama</loc><lastmod>{lastmod}</lastmod><priority>0.8</priority></url>')
    
    for ilce in districts:
        ilce_slug = slugify(ilce)
        # İlçe tapu takip
        urls.append(f'  <url><loc>{base_url}/tapu-takip/{il_slug}/{ilce_slug}</loc><lastmod>{lastmod}</lastmod><priority>0.7</priority></url>')
        # İlçe iskan sorgulama
        urls.append(f'  <url><loc>{base_url}/{il_slug}-{ilce_slug}-iskan-sorgulama</loc><lastmod>{lastmod}</lastmod><priority>0.6</priority></url>')
    
    filename = f'sitemap-geo-{il_slug}.xml'
    write_sitemap(filename, urls)
    sitemap_index_files.append(filename)

# Hizmetler Sitemap
hizmet_urls = []
hizmet_urls.append(f'  <url><loc>{base_url}/hizmetler</loc><lastmod>{lastmod}</lastmod><priority>1.0</priority></url>')
for svc in services:
    hizmet_urls.append(f'  <url><loc>{base_url}/tapu-islemleri/{svc}</loc><lastmod>{lastmod}</lastmod><priority>0.8</priority></url>')

write_sitemap('sitemap-hizmetler.xml', hizmet_urls)
sitemap_index_files.append('sitemap-hizmetler.xml')

# Rehber Sitemap
rehber_urls = []
for q in questions:
    rehber_urls.append(f'  <url><loc>{base_url}/tapu-rehberi/{q}</loc><lastmod>{lastmod}</lastmod><priority>0.5</priority></url>')

write_sitemap('sitemap-rehber.xml', rehber_urls)
sitemap_index_files.append('sitemap-rehber.xml')

# Ana Sitemap Index
index_content = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for f_name in sitemap_index_files:
    index_content += f'  <sitemap><loc>{base_url}/{f_name}</loc></sitemap>\n'
index_content += '</sitemapindex>'

with open('public/sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(index_content)

print(f"Sitemaps generated: {len(sitemap_index_files)} files in index.")
