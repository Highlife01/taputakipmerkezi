export interface CityGeoData {
    id: number;
    plateCode: string;
    name: string;
    slug: string;
    region: 'Marmara' | 'Ege' | 'Akdeniz' | 'İç Anadolu' | 'Karadeniz' | 'Doğu Anadolu' | 'Güneydoğu Anadolu';
    latitude: number;
    longitude: number;
    tapuMudurlugu: string;
    postalCode: string;
}

export const geoData: Record<string, CityGeoData> = {
    "adana": { id: 1, plateCode: "01", name: "Adana", slug: "adana", region: "Akdeniz", latitude: 36.9914, longitude: 35.3308, tapuMudurlugu: "Adana Tapu ve Kadastro XII. Bölge Müdürlüğü", postalCode: "01000" },
    "adiyaman": { id: 2, plateCode: "02", name: "Adıyaman", slug: "adiyaman", region: "Güneydoğu Anadolu", latitude: 37.7648, longitude: 38.2786, tapuMudurlugu: "Adıyaman Tapu Müdürlüğü", postalCode: "02000" },
    "afyonkarahisar": { id: 3, plateCode: "03", name: "Afyonkarahisar", slug: "afyonkarahisar", region: "Ege", latitude: 38.7507, longitude: 30.5567, tapuMudurlugu: "Afyonkarahisar Tapu Müdürlüğü", postalCode: "03000" },
    "agri": { id: 4, plateCode: "04", name: "Ağrı", slug: "agri", region: "Doğu Anadolu", latitude: 39.7191, longitude: 43.0503, tapuMudurlugu: "Ağrı Tapu Müdürlüğü", postalCode: "04000" },
    "amasya": { id: 5, plateCode: "05", name: "Amasya", slug: "amasya", region: "Karadeniz", latitude: 40.6501, longitude: 35.8353, tapuMudurlugu: "Amasya Tapu Müdürlüğü", postalCode: "05000" },
    "ankara": { id: 6, plateCode: "06", name: "Ankara", slug: "ankara", region: "İç Anadolu", latitude: 39.9334, longitude: 32.8597, tapuMudurlugu: "Ankara Tapu ve Kadastro I. Bölge Müdürlüğü", postalCode: "06000" },
    "antalya": { id: 7, plateCode: "07", name: "Antalya", slug: "antalya", region: "Akdeniz", latitude: 36.8969, longitude: 30.7133, tapuMudurlugu: "Antalya Tapu ve Kadastro VI. Bölge Müdürlüğü", postalCode: "07000" },
    "artvin": { id: 8, plateCode: "08", name: "Artvin", slug: "artvin", region: "Karadeniz", latitude: 41.1828, longitude: 41.8183, tapuMudurlugu: "Artvin Tapu Müdürlüğü", postalCode: "08000" },
    "aydin": { id: 9, plateCode: "09", name: "Aydın", slug: "aydin", region: "Ege", latitude: 37.8560, longitude: 27.8416, tapuMudurlugu: "Aydın Tapu Müdürlüğü", postalCode: "09000" },
    "balikesir": { id: 10, plateCode: "10", name: "Balıkesir", slug: "balikesir", region: "Marmara", latitude: 39.6484, longitude: 27.8826, tapuMudurlugu: "Balıkesir Tapu Müdürlüğü", postalCode: "10000" },
    "bilecik": { id: 11, plateCode: "11", name: "Bilecik", slug: "bilecik", region: "Marmara", latitude: 40.1451, longitude: 29.9799, tapuMudurlugu: "Bilecik Tapu Müdürlüğü", postalCode: "11000" },
    "bingol": { id: 12, plateCode: "12", name: "Bingöl", slug: "bingol", region: "Doğu Anadolu", latitude: 38.8854, longitude: 40.4983, tapuMudurlugu: "Bingöl Tapu Müdürlüğü", postalCode: "12000" },
    "bitlis": { id: 13, plateCode: "13", name: "Bitlis", slug: "bitlis", region: "Doğu Anadolu", latitude: 38.4006, longitude: 42.1095, tapuMudurlugu: "Bitlis Tapu Müdürlüğü", postalCode: "13000" },
    "bolu": { id: 14, plateCode: "14", name: "Bolu", slug: "bolu", region: "Karadeniz", latitude: 40.7358, longitude: 31.6061, tapuMudurlugu: "Bolu Tapu Müdürlüğü", postalCode: "14000" },
    "burdur": { id: 15, plateCode: "15", name: "Burdur", slug: "burdur", region: "Akdeniz", latitude: 37.7203, longitude: 30.2908, tapuMudurlugu: "Burdur Tapu Müdürlüğü", postalCode: "15000" },
    "bursa": { id: 16, plateCode: "16", name: "Bursa", slug: "bursa", region: "Marmara", latitude: 40.1885, longitude: 29.0610, tapuMudurlugu: "Bursa Tapu ve Kadastro IV. Bölge Müdürlüğü", postalCode: "16000" },
    "canakkale": { id: 17, plateCode: "17", name: "Çanakkale", slug: "canakkale", region: "Marmara", latitude: 40.1553, longitude: 26.4142, tapuMudurlugu: "Çanakkale Tapu Müdürlüğü", postalCode: "17000" },
    "cankiri": { id: 18, plateCode: "18", name: "Çankırı", slug: "cankiri", region: "İç Anadolu", latitude: 40.6013, longitude: 33.6134, tapuMudurlugu: "Çankırı Tapu Müdürlüğü", postalCode: "18000" },
    "corum": { id: 19, plateCode: "19", name: "Çorum", slug: "corum", region: "Karadeniz", latitude: 40.5506, longitude: 34.9556, tapuMudurlugu: "Çorum Tapu Müdürlüğü", postalCode: "19000" },
    "denizli": { id: 20, plateCode: "20", name: "Denizli", slug: "denizli", region: "Ege", latitude: 37.7765, longitude: 29.0864, tapuMudurlugu: "Denizli Tapu ve Kadastro XVIII. Bölge Müdürlüğü", postalCode: "20000" },
    "diyarbakir": { id: 21, plateCode: "21", name: "Diyarbakır", slug: "diyarbakir", region: "Güneydoğu Anadolu", latitude: 37.9144, longitude: 40.2306, tapuMudurlugu: "Diyarbakır Tapu ve Kadastro VII. Bölge Müdürlüğü", postalCode: "21000" },
    "edirne": { id: 22, plateCode: "22", name: "Edirne", slug: "edirne", region: "Marmara", latitude: 41.6764, longitude: 26.5603, tapuMudurlugu: "Edirne Tapu ve Kadastro XIV. Bölge Müdürlüğü", postalCode: "22000" },
    "elazig": { id: 23, plateCode: "23", name: "Elazığ", slug: "elazig", region: "Doğu Anadolu", latitude: 38.6810, longitude: 39.2264, tapuMudurlugu: "Elazığ Tapu ve Kadastro XVI. Bölge Müdürlüğü", postalCode: "23000" },
    "erzincan": { id: 24, plateCode: "24", name: "Erzincan", slug: "erzincan", region: "Doğu Anadolu", latitude: 39.7500, longitude: 39.5000, tapuMudurlugu: "Erzincan Tapu Müdürlüğü", postalCode: "24000" },
    "erzurum": { id: 25, plateCode: "25", name: "Erzurum", slug: "erzurum", region: "Doğu Anadolu", latitude: 39.9043, longitude: 41.2679, tapuMudurlugu: "Erzurum Tapu ve Kadastro VIII. Bölge Müdürlüğü", postalCode: "25000" },
    "eskisehir": { id: 26, plateCode: "26", name: "Eskişehir", slug: "eskisehir", region: "İç Anadolu", latitude: 39.7667, longitude: 30.5256, tapuMudurlugu: "Eskişehir Tapu ve Kadastro XIX. Bölge Müdürlüğü", postalCode: "26000" },
    "gaziantep": { id: 27, plateCode: "27", name: "Gaziantep", slug: "gaziantep", region: "Güneydoğu Anadolu", latitude: 37.0662, longitude: 37.3833, tapuMudurlugu: "Gaziantep Tapu ve Kadastro XIII. Bölge Müdürlüğü", postalCode: "27000" },
    "giresun": { id: 28, plateCode: "28", name: "Giresun", slug: "giresun", region: "Karadeniz", latitude: 40.9128, longitude: 38.3895, tapuMudurlugu: "Giresun Tapu Müdürlüğü", postalCode: "28000" },
    "gumushane": { id: 29, plateCode: "29", name: "Gümüşhane", slug: "gumushane", region: "Karadeniz", latitude: 40.4608, longitude: 39.4717, tapuMudurlugu: "Gümüşhane Tapu Müdürlüğü", postalCode: "29000" },
    "hakkari": { id: 30, plateCode: "30", name: "Hakkari", slug: "hakkari", region: "Doğu Anadolu", latitude: 37.5833, longitude: 43.7333, tapuMudurlugu: "Hakkari Tapu Müdürlüğü", postalCode: "30000" },
    "hatay": { id: 31, plateCode: "31", name: "Hatay", slug: "hatay", region: "Akdeniz", latitude: 36.4018, longitude: 36.3498, tapuMudurlugu: "Hatay Tapu ve Kadastro Müdürlüğü", postalCode: "31000" },
    "isparta": { id: 32, plateCode: "32", name: "Isparta", slug: "isparta", region: "Akdeniz", latitude: 37.7648, longitude: 30.5566, tapuMudurlugu: "Isparta Tapu Müdürlüğü", postalCode: "32000" },
    "mersin": { id: 33, plateCode: "33", name: "Mersin", slug: "mersin", region: "Akdeniz", latitude: 36.8121, longitude: 34.6415, tapuMudurlugu: "Mersin Tapu Müdürlüğü", postalCode: "33000" },
    "istanbul": { id: 34, plateCode: "34", name: "İstanbul", slug: "istanbul", region: "Marmara", latitude: 41.0082, longitude: 28.9784, tapuMudurlugu: "İstanbul Tapu ve Kadastro II. Bölge Müdürlüğü", postalCode: "34000" },
    "izmir": { id: 35, plateCode: "35", name: "İzmir", slug: "izmir", region: "Ege", latitude: 38.4237, longitude: 27.1428, tapuMudurlugu: "İzmir Tapu ve Kadastro III. Bölge Müdürlüğü", postalCode: "35000" },
    "kars": { id: 36, plateCode: "36", name: "Kars", slug: "kars", region: "Doğu Anadolu", latitude: 40.6172, longitude: 43.0875, tapuMudurlugu: "Kars Tapu Müdürlüğü", postalCode: "36000" },
    "kastamonu": { id: 37, plateCode: "37", name: "Kastamonu", slug: "kastamonu", region: "Karadeniz", latitude: 41.3887, longitude: 33.7827, tapuMudurlugu: "Kastamonu Tapu ve Kadastro XIX. Bölge Müdürlüğü", postalCode: "37000" },
    "kayseri": { id: 38, plateCode: "38", name: "Kayseri", slug: "kayseri", region: "İç Anadolu", latitude: 38.7312, longitude: 35.4787, tapuMudurlugu: "Kayseri Tapu ve Kadastro XI. Bölge Müdürlüğü", postalCode: "38000" },
    "kirklareli": { id: 39, plateCode: "39", name: "Kırklareli", slug: "kirklareli", region: "Marmara", latitude: 41.7333, longitude: 27.2167, tapuMudurlugu: "Kırklareli Tapu Müdürlüğü", postalCode: "39000" },
    "kirsehir": { id: 40, plateCode: "40", name: "Kırşehir", slug: "kirsehir", region: "İç Anadolu", latitude: 39.1425, longitude: 34.1709, tapuMudurlugu: "Kırşehir Tapu Müdürlüğü", postalCode: "40000" },
    "kocaeli": { id: 41, plateCode: "41", name: "Kocaeli", slug: "kocaeli", region: "Marmara", latitude: 40.8533, longitude: 29.8815, tapuMudurlugu: "Kocaeli Tapu Müdürlüğü", postalCode: "41000" },
    "konya": { id: 42, plateCode: "42", name: "Konya", slug: "konya", region: "İç Anadolu", latitude: 37.8714, longitude: 32.4846, tapuMudurlugu: "Konya Tapu ve Kadastro V. Bölge Müdürlüğü", postalCode: "42000" },
    "kutahya": { id: 43, plateCode: "43", name: "Kütahya", slug: "kutahya", region: "Ege", latitude: 39.4167, longitude: 29.9833, tapuMudurlugu: "Kütahya Tapu Müdürlüğü", postalCode: "43000" },
    "malatya": { id: 44, plateCode: "44", name: "Malatya", slug: "malatya", region: "Doğu Anadolu", latitude: 38.3552, longitude: 38.3095, tapuMudurlugu: "Malatya Tapu Müdürlüğü", postalCode: "44000" },
    "manisa": { id: 45, plateCode: "45", name: "Manisa", slug: "manisa", region: "Ege", latitude: 38.6191, longitude: 27.4289, tapuMudurlugu: "Manisa Tapu Müdürlüğü", postalCode: "45000" },
    "kahramanmaras": { id: 46, plateCode: "46", name: "Kahramanmaraş", slug: "kahramanmaras", region: "Akdeniz", latitude: 37.5858, longitude: 36.9371, tapuMudurlugu: "Kahramanmaraş Tapu Müdürlüğü", postalCode: "46000" },
    "mardin": { id: 47, plateCode: "47", name: "Mardin", slug: "mardin", region: "Güneydoğu Anadolu", latitude: 37.3212, longitude: 40.7245, tapuMudurlugu: "Mardin Tapu Müdürlüğü", postalCode: "47000" },
    "mugla": { id: 48, plateCode: "48", name: "Muğla", slug: "mugla", region: "Ege", latitude: 37.2153, longitude: 28.3636, tapuMudurlugu: "Muğla Tapu Müdürlüğü", postalCode: "48000" },
    "mus": { id: 49, plateCode: "49", name: "Muş", slug: "mus", region: "Doğu Anadolu", latitude: 38.7432, longitude: 41.5064, tapuMudurlugu: "Muş Tapu Müdürlüğü", postalCode: "49000" },
    "nevsehir": { id: 50, plateCode: "50", name: "Nevşehir", slug: "nevsehir", region: "İç Anadolu", latitude: 38.6244, longitude: 34.7144, tapuMudurlugu: "Nevşehir Tapu Müdürlüğü", postalCode: "50000" },
    "nigde": { id: 51, plateCode: "51", name: "Niğde", slug: "nigde", region: "İç Anadolu", latitude: 37.9667, longitude: 34.6833, tapuMudurlugu: "Niğde Tapu Müdürlüğü", postalCode: "51000" },
    "ordu": { id: 52, plateCode: "52", name: "Ordu", slug: "ordu", region: "Karadeniz", latitude: 40.9839, longitude: 37.8764, tapuMudurlugu: "Ordu Tapu Müdürlüğü", postalCode: "52000" },
    "rize": { id: 53, plateCode: "53", name: "Rize", slug: "rize", region: "Karadeniz", latitude: 41.0201, longitude: 40.5234, tapuMudurlugu: "Rize Tapu Müdürlüğü", postalCode: "53000" },
    "sakarya": { id: 54, plateCode: "54", name: "Sakarya", slug: "sakarya", region: "Marmara", latitude: 40.7569, longitude: 30.3783, tapuMudurlugu: "Sakarya Tapu Müdürlüğü", postalCode: "54000" },
    "samsun": { id: 55, plateCode: "55", name: "Samsun", slug: "samsun", region: "Karadeniz", latitude: 41.2928, longitude: 36.3313, tapuMudurlugu: "Samsun Tapu ve Kadastro X. Bölge Müdürlüğü", postalCode: "55000" },
    "siirt": { id: 56, plateCode: "56", name: "Siirt", slug: "siirt", region: "Güneydoğu Anadolu", latitude: 37.9333, longitude: 41.9500, tapuMudurlugu: "Siirt Tapu Müdürlüğü", postalCode: "56000" },
    "sinop": { id: 57, plateCode: "57", name: "Sinop", slug: "sinop", region: "Karadeniz", latitude: 42.0231, longitude: 35.1531, tapuMudurlugu: "Sinop Tapu Müdürlüğü", postalCode: "57000" },
    "sivas": { id: 58, plateCode: "58", name: "Sivas", slug: "sivas", region: "İç Anadolu", latitude: 39.7477, longitude: 37.0179, tapuMudurlugu: "Sivas Tapu ve Kadastro XX. Bölge Müdürlüğü", postalCode: "58000" },
    "tekirdag": { id: 59, plateCode: "59", name: "Tekirdağ", slug: "tekirdag", region: "Marmara", latitude: 40.9833, longitude: 27.5167, tapuMudurlugu: "Tekirdağ Tapu Müdürlüğü", postalCode: "59000" },
    "tokat": { id: 60, plateCode: "60", name: "Tokat", slug: "tokat", region: "Karadeniz", latitude: 40.3167, longitude: 36.5500, tapuMudurlugu: "Tokat Tapu Müdürlüğü", postalCode: "60000" },
    "trabzon": { id: 61, plateCode: "61", name: "Trabzon", slug: "trabzon", region: "Karadeniz", latitude: 41.0015, longitude: 39.7178, tapuMudurlugu: "Trabzon Tapu ve Kadastro IX. Bölge Müdürlüğü", postalCode: "61000" },
    "tunceli": { id: 62, plateCode: "62", name: "Tunceli", slug: "tunceli", region: "Doğu Anadolu", latitude: 39.1079, longitude: 39.5401, tapuMudurlugu: "Tunceli Tapu Müdürlüğü", postalCode: "62000" },
    "sanliurfa": { id: 63, plateCode: "63", name: "Şanlıurfa", slug: "sanliurfa", region: "Güneydoğu Anadolu", latitude: 37.1674, longitude: 38.7955, tapuMudurlugu: "Şanlıurfa Tapu ve Kadastro XXI. Bölge Müdürlüğü", postalCode: "63000" },
    "usak": { id: 64, plateCode: "64", name: "Uşak", slug: "usak", region: "Ege", latitude: 38.6823, longitude: 29.4082, tapuMudurlugu: "Uşak Tapu Müdürlüğü", postalCode: "64000" },
    "van": { id: 65, plateCode: "65", name: "Van", slug: "van", region: "Doğu Anadolu", latitude: 38.4891, longitude: 43.4089, tapuMudurlugu: "Van Tapu ve Kadastro XV. Bölge Müdürlüğü", postalCode: "65000" },
    "yozgat": { id: 66, plateCode: "66", name: "Yozgat", slug: "yozgat", region: "İç Anadolu", latitude: 39.8181, longitude: 34.8147, tapuMudurlugu: "Yozgat Tapu ve Kadastro XXII. Bölge Müdürlüğü", postalCode: "66000" },
    "zonguldak": { id: 67, plateCode: "67", name: "Zonguldak", slug: "zonguldak", region: "Karadeniz", latitude: 41.4564, longitude: 31.7987, tapuMudurlugu: "Zonguldak Tapu Müdürlüğü", postalCode: "67000" },
    "aksaray": { id: 68, plateCode: "68", name: "Aksaray", slug: "aksaray", region: "İç Anadolu", latitude: 38.3687, longitude: 34.0370, tapuMudurlugu: "Aksaray Tapu Müdürlüğü", postalCode: "68000" },
    "bayburt": { id: 69, plateCode: "69", name: "Bayburt", slug: "bayburt", region: "Karadeniz", latitude: 40.2552, longitude: 40.2249, tapuMudurlugu: "Bayburt Tapu Müdürlüğü", postalCode: "69000" },
    "karaman": { id: 70, plateCode: "70", name: "Karaman", slug: "karaman", region: "İç Anadolu", latitude: 37.1759, longitude: 33.2287, tapuMudurlugu: "Karaman Tapu Müdürlüğü", postalCode: "70000" },
    "kirikkale": { id: 71, plateCode: "71", name: "Kırıkkale", slug: "kirikkale", region: "İç Anadolu", latitude: 39.8468, longitude: 33.5153, tapuMudurlugu: "Kırıkkale Tapu Müdürlüğü", postalCode: "71000" },
    "batman": { id: 72, plateCode: "72", name: "Batman", slug: "batman", region: "Güneydoğu Anadolu", latitude: 37.8812, longitude: 41.1293, tapuMudurlugu: "Batman Tapu Müdürlüğü", postalCode: "72000" },
    "sirnak": { id: 73, plateCode: "73", name: "Şırnak", slug: "sirnak", region: "Güneydoğu Anadolu", latitude: 37.5164, longitude: 42.4611, tapuMudurlugu: "Şırnak Tapu Müdürlüğü", postalCode: "73000" },
    "bartin": { id: 74, plateCode: "74", name: "Bartın", slug: "bartin", region: "Karadeniz", latitude: 41.6344, longitude: 32.3375, tapuMudurlugu: "Bartın Tapu Müdürlüğü", postalCode: "74000" },
    "ardahan": { id: 75, plateCode: "75", name: "Ardahan", slug: "ardahan", region: "Doğu Anadolu", latitude: 41.1105, longitude: 42.7022, tapuMudurlugu: "Ardahan Tapu Müdürlüğü", postalCode: "75000" },
    "igdir": { id: 76, plateCode: "76", name: "Iğdır", slug: "igdir", region: "Doğu Anadolu", latitude: 39.9196, longitude: 44.0454, tapuMudurlugu: "Iğdır Tapu Müdürlüğü", postalCode: "76000" },
    "yalova": { id: 77, plateCode: "77", name: "Yalova", slug: "yalova", region: "Marmara", latitude: 40.6500, longitude: 29.2667, tapuMudurlugu: "Yalova Tapu Müdürlüğü", postalCode: "77000" },
    "karabuk": { id: 78, plateCode: "78", name: "Karabük", slug: "karabuk", region: "Karadeniz", latitude: 41.2061, longitude: 32.6204, tapuMudurlugu: "Karabük Tapu Müdürlüğü", postalCode: "78000" },
    "kilis": { id: 79, plateCode: "79", name: "Kilis", slug: "kilis", region: "Güneydoğu Anadolu", latitude: 36.7184, longitude: 37.1212, tapuMudurlugu: "Kilis Tapu Müdürlüğü", postalCode: "79000" },
    "osmaniye": { id: 80, plateCode: "80", name: "Osmaniye", slug: "osmaniye", region: "Akdeniz", latitude: 37.0742, longitude: 36.2472, tapuMudurlugu: "Osmaniye Tapu Müdürlüğü", postalCode: "80000" },
    "duzce": { id: 81, plateCode: "81", name: "Düzce", slug: "duzce", region: "Karadeniz", latitude: 40.8438, longitude: 31.1565, tapuMudurlugu: "Düzce Tapu Müdürlüğü", postalCode: "81000" }
};

export const regionsList: Array<CityGeoData['region']> = [
    'Marmara',
    'İç Anadolu',
    'Ege',
    'Akdeniz',
    'Karadeniz',
    'Güneydoğu Anadolu',
    'Doğu Anadolu'
];

export const getCityGeo = (slug: string): CityGeoData | undefined => {
    return geoData[slug.toLowerCase()];
};

export const getCitiesByRegion = (region: CityGeoData['region']): CityGeoData[] => {
    return Object.values(geoData).filter(c => c.region === region);
};
