/**
 * Merkezi site yapılandırması.
 *
 * Telefon, e-posta, alan adı ve form ayarları gibi tekrar eden sabitlerin
 * tek doğruluk kaynağıdır. Buralarda bir değişiklik yaparken KVKK metnini
 * (src/pages/KVKK.tsx) ve Hizmet Şartları sayfasını da kontrol edin.
 */
export const SITE = {
    /** Marka adı */
    name: "Tapu Takip Merkezi",

    /** Alan adı (www önekli) */
    domain: "www.taputakipmerkezi.com.tr",

    /** Mutlak temel URL — canonical, sitemap ve şema işaretlemelerinde kullanılır */
    baseUrl: "https://www.taputakipmerkezi.com.tr",

    /** Logo mutlak URL'i (şema işaretlemeleri) */
    logoUrl: "https://www.taputakipmerkezi.com.tr/favicon.png",

    /** Open Graph görseli (mutlak) */
    ogImageUrl: "https://www.taputakipmerkezi.com.tr/og-image.png",

    /** Ham telefon numarası (tel: bağlantıları) */
    phoneRaw: "05320550945",

    /** E.164 biçimli telefon (şema işaretlemeleri) */
    phoneE164: "+905320550945",

    /** Görüntülenen telefon biçimi */
    phoneDisplay: "0532 055 09 45",

    /** Kurumsal e-posta */
    email: "cebokar@gmail.com",

    /** Web3Forms form endpoint'i */
    web3FormsEndpoint: "https://api.web3forms.com/submit",

    /**
     * Web3Forms erişim anahtarı. Bu anahtar public (client-side) bir anahtardır;
     * spam koruması honeypot + sunucu tarafı filtrelerle desteklenmelidir.
     */
    web3FormsAccessKey: "7b31c9d8-eb61-4d45-a3ec-83a9c19e5a2f",

    /** Çalışma saatleri */
    workHours: "Pazartesi – Cumartesi, 09:00 – 18:00",

    /**
     * Yasal bilgi notu: hizmetin niteliğini doğru beyan eder.
     * Navbar şeridinde kısaltılmış hali, Footer ve KVKK'da tam hali kullanılır.
     */
    disclaimer:
        "Tapu Takip Merkezi resmî bir kamu kurumu değildir; noter vekâletnamesi çerçevesinde tapu, kadastro, belediye ve vergi daireleri nezdindeki süreçlerinizi takip eden özel bir danışmanlık hizmetidir ve resmî kurumlara herhangi bir ayrıcalık ya da öncelik sağlamaz.",

    /** Navbar şeridi için kısa versiyon */
    disclaimerShort:
        "Resmî kurum değiliz: resmî kurumlar nezdinde vekâletname ile süreç takibi yapan özel bir danışmanlık hizmetiyiz.",
} as const;

export type SiteConfig = typeof SITE;
