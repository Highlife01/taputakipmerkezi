export interface Service {
    name: string;
    slug: string;
    description: string;
}

export const services: Service[] = [
    { name: "İmar Durumu", slug: "imar-durumu", description: "Parselin yapılaşma koşullarını ve imar durumunu resmi kurumlardan sorgulama." },
    { name: "Tapu Devri", slug: "tapu-devri", description: "Tapu devir işlemlerinizi profesyonelce takip ediyoruz." },
    { name: "Satış Tapusu", slug: "satis-tapusu", description: "Gayrimenkul satış işlemlerinizde güvenli süreç yönetimi." },
    { name: "Miras Tapu İşlemleri", slug: "miras-tapu-islemleri", description: "Veraset ve intikal yoluyla tapu devri süreçleri." },
    { name: "Hisseli Tapu Satışı", slug: "hisseli-tapu", description: "Hisseli tapu devri ve satış süreçlerinde uzman desteği." },
    { name: "İpotek Kaldırma", slug: "ipotek-kaldirma", description: "Kredi borcu biten taşınmazların ipotek fek işlemleri." },
    { name: "Tapu Randevu Takibi", slug: "tapu-randevu", description: "Web Tapu üzerinden randevu ve başvuru takibi." },
    { name: "Arsa Tapu İşlemleri", slug: "arsa-tapu", description: "Arsa alım-satım ve devir süreçleri." },
    { name: "Konut Tapu Devri", slug: "konut-tapu", description: "Daire ve konut tapu işlemleri takibi." },
    { name: "Ticari Tapu İşlemleri", slug: "ticari-tapu", description: "Dükkan, ofis ve ticari gayrimenkul tapu süreçleri." },
    { name: "Veraset İntikal", slug: "veraset-intikal", description: "Miras kalan malların tapuda tescili işlemleri." },
    { name: "Vergi İlişik Kesme", slug: "vergi-ilisik-kesme", description: "Vergi dairesi ve belediye borç temizleme süreçleri." },
    { name: "İfraz & Tevhit", slug: "ifraz-tevhit", description: "Arazi ayırma ve birleştirme teknik takip süreçleri." },
    { name: "Yabancı Satış", slug: "yabanci-satis", description: "Vatandaşlık ve yabancı mülk edinim uygunluk takibi." },
    { name: "Kat İrtifakı Tesisi", slug: "kat-irtifaki", description: "İnşaat aşamasındaki projelerin tapu tescil süreci." },
    { name: "Kat Mülkiyeti Tesisi", slug: "kat-mulkiyeti", description: "İskan sonrası kat mülkiyetine geçiş işlemleri." },
    { name: "Cins Tahsisi", slug: "cins-tahsisi", description: "Tapudaki taşınmaz niteliğinin değiştirilmesi işlemleri." },
    { name: "Tapu Kaydı Sorgulama", slug: "tapu-sorgulama", description: "Resmi tapu kaydı ve takyidat belgesi temini." },
    { name: "Harç Hesaplama", slug: "harc-hesaplama", description: "Güncel tapu harcı ve döner sermaye hesaplamaları." },
    { name: "Rayiç Bedel Sorgulama", slug: "rayic-bedel", description: "Belediyeden güncel rayiç değer belgesi takibi." },
    { name: "İskan Sorgulama", slug: "iskan-sorgulama", description: "Yapı kullanma izin belgesi (iskan) durumunun resmi makamlardan sorgulanması." },
    { name: "Adrese Göre İskan Sorgulama", slug: "adrese-gore-iskan-sorgulama", description: "Açık adres bilgisi ile taşınmazın iskan durumunun kontrolü." },
    { name: "Tapu İskan Sorgulama", slug: "tapu-iskan-sorgulama", description: "Tapu bilgileri üzerinden yapı kullanım izni araştırması." },
    { name: "Ada Parsel İskan Sorgulama", slug: "ada-parsel-iskan-sorgulama", description: "Ada ve parsel numarası ile güncel iskan durumu tespiti." },
    { name: "E-Devlet İskan Sorgulama", slug: "e-devlet-iskan-sorgulama", description: "E-devlet üzerinde görünmeyen iskan kayıtlarının resmi kurumlardan teyidi." },
    { name: "Belediye İskan Sorgulama", slug: "belediye-iskan-sorgulama", description: "İlgili belediye arşivinden yapı kullanma izin belgesi araştırması." },
    { name: "Aile İçi Tapu Danışmanlığı", slug: "aile-ic-tapu-danismanligi", description: "Aile içi tapu sorunları ve miras süreçlerinde uzman danışmanlık hizmeti." },
    { name: "İcra Takip İşlemleri", slug: "icra-takip", description: "İcra dairelerindeki taşınmaz ile ilgili tüm takip süreçlerinin profesyonel yönetimi." },
    { name: "Haciz Kaldırma", slug: "haciz-kaldirma", description: "Tapu üzerindeki haciz şerhlerinin kaldırılması ve borç ödeme süreçlerinin takibi." },
    { name: "İcra Satış Takibi", slug: "icra-satis-takibi", description: "İcra yoluyla satışa çıkarılan taşınmazların ihale süreç takibi." },
    { name: "İcra Dosyası Kapatma", slug: "icra-dosyasi-kapatma", description: "Borç ödendikten sonra icra dosyasının kapatılması ve tapu üzerindeki kayıtların temizlenmesi." },
    { name: "Taşınmaz Haciz Şerhi Sorgulama", slug: "haciz-serhi-sorgulama", description: "Tapu üzerinde haciz, ihtiyati tedbir veya icra şerhi olup olmadığının araştırılması." },
    { name: "E-Haciz & Bloke Kaldırma", slug: "e-haciz-kaldirma", description: "Vergi dairelerinden uygulanan elektronik haciz ve banka blokelerinin kaldırılması danışmanlığı." },
];
