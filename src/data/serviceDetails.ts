// Detaylı hizmet bilgileri
export interface ServiceDetail {
    slug: string;
    title: string;
    shortDesc: string;
    detailedDescription: string[];
    process: string[];
    requiredDocs: string[];
    timeline: string;
    faqs: { q: string; a: string }[];
}

export const serviceDetails: ServiceDetail[] = [
    {
        slug: "imar-durumu",
        title: "İmar Durumu Sorgulama",
        shortDesc: "Parselin yapılaşma koşullarını ve imar durumunu resmi kurumlardan sorgulama.",
        detailedDescription: [
            "İmar durumu belgesi, bir taşınmazın hangi imar planı içinde kaldığını, nasıl kullanılabileceğini ve yapılaşma koşullarını gösteren resmi bir belgedir.",
            "Arsa veya arazi satın almadan önce mutlaka imar durumunun kontrol edilmesi gerekir. Bu belge olmadan yapılaşma izni alınamaz.",
            "TapuTakipMerkezi.com.tr, imar durumu belgesini ilgili belediye veya Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü'nden temin eder ve size detaylı rapor sunar."
        ],
        process: [
            "Ada ve parsel bilgilerinizin temini",
            "İlgili belediyeye veya İl Müdürlüğü'ne başvuru",
            "İmar planının kontrol edilmesi",
            "İmar durumu belgesinin alınması",
            "Detaylı raporlama ve size iletim"
        ],
        requiredDocs: [
            "Tapu fotokopisi veya ada-parsel bilgisi",
            "Kimlik fotokopisi",
            "Vekâletname (vekil yoluyla işlem yapılacaksa)"
        ],
        timeline: "2-5 iş günü (belediyeye göre değişebilir)",
        faqs: [
            {
                q: "İmar durumu belgesi neden önemlidir?",
                a: "İmar durumu belgesi, arsanızın yapılaşma koşullarını, kat sayısını, emsal değerini ve kullanım amacını gösterir. Yapı ruhsatı almadan önce mutlaka gereklidir."
            },
            {
                q: "İmar durumu çıkmayan arsa ne demektir?",
                a: "İmar planı dışında kalan veya henüz imar planı yapılmamış parsellere imar durumu belgesi verilemez. Bu tür arsalarda yapılaşma izni alınamaz."
            }
        ]
    },
    {
        slug: "iskan-sorgulama",
        title: "Bina İskan Araştırma",
        shortDesc: "Belediye ve Çevre Şehircilik nezdinde binanın iskan durumunu detaylıca araştırıyor, size raporluyoruz.",
        detailedDescription: [
            "İskan belgesi (Yapı Kullanma İzin Belgesi), bir binanın yönetmeliklere uygun şekilde tamamlandığını ve kullanıma hazır olduğunu gösteren resmi belgedir.",
            "İskan belgesi olmayan binalarda elektrik, su ve doğalgaz aboneliği açılamaz. Ayrıca tapu devir işlemlerinde zorunlu değildir ancak alıcı tarafından talep edilebilir.",
            "TapuTakipMerkezi.com.tr, iskan belgesinin varlığını resmi kurumlardan araştırır; bulunamazsa geçici kullanma izni veya yapı kayıt belgesi gibi alternatif belgelerin temini konusunda rehberlik eder."
        ],
        process: [
            "Bina adres ve tapu bilgilerinin alınması",
            "Belediye arşivinde iskan belgesi araştırması",
            "Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü kontrolü",
            "E-Devlet üzerinden sorgulama",
            "Bulunan bilgilerin size raporlanması"
        ],
        requiredDocs: [
            "Tapu fotokopisi",
            "Açık adres bilgisi",
            "Kimlik fotokopisi"
        ],
        timeline: "3-7 iş günü",
        faqs: [
            {
                q: "İskan belgesi olmayan binada oturulabilir mi?",
                a: "Hukuki olarak iskan alınmamış binada oturmak yasaktır. Ancak uygulamada sorun çıkmayabilir. Elektrik, su, doğalgaz aboneliği için iskan şarttır."
            },
            {
                q: "Eski binalarda iskan belgesi var mıydı?",
                a: "1985 öncesi yapılan birçok binada iskan belgesi düzenlenmemiş olabilir. Bu durumda Yapı Kayıt Belgesi veya Kat Mülkiyeti Kararı ile durum çözülebilir."
            }
        ]
    },
    {
        slug: "satis-tapusu",
        title: "Alım & Satım İşlemleri",
        shortDesc: "Güvenli devir süreçleri ve tapu randevu yönetimi.",
        detailedDescription: [
            "Taşınmaz alım-satım işlemleri, tarafların tapu müdürlüğünde bir araya gelerek satış bedelinin ödenmesi ve tapunun devri ile tamamlanır.",
            "Satış sözleşmesi noterden düzenlenebilir ancak tapu devri mutlaka tapu müdürlüğünde yapılmalıdır.",
            "TapuTakipMerkezi.com.tr, evrak kontrolünden randevu alınmasına, harç ödemelerinden tescil işlemlerine kadar tüm süreci yönetir."
        ],
        process: [
            "Satış sözleşmesinin kontrolü",
            "Gerekli belgelerin teminive kontrolü",
            "Tapu randevusu alınması (Alo 181 veya e-randevu)",
            "Harç hesaplama ve ödeme desteği",
            "Tapu müdürlüğünde devir işleminin tamamlanması"
        ],
        requiredDocs: [
            "Tapu belgesi",
            "Kimlik (alıcı ve satıcı)",
            "Vergi levhası (satıcı)",
            "Belediye emlak beyan belgesi",
            "DASK poliçesi",
            "Vekaletname (gerekirse)"
        ],
        timeline: "Randevu durumuna göre 1-5 iş günü",
        faqs: [
            {
                q: "Tapu devir harçları ne kadardır?",
                a: "Tapu harcı toplam satış bedelinin %4'üdür ve genell ikle alıcı ile satıcı arasında eşit paylaşılır (%2-%2). Ancak taraflar arasında farklı anlaşma yapılabilir."
            },
            {
                q: "Satış işlemi aynı gün tamamlanabilir mi?",
                a: "Web Tapu'dan randevu alındıysa ve tüm evraklar hazırsa, satış işlemi randevu günü tamamlanabilir."
            }
        ]
    },
    {
        slug: "veraset-intikal",
        title: "Veraset & İntikal",
        shortDesc: "Miras kalan taşınmazların beyan ve tescil işlemleri.",
        detailedDescription: [
            "Bir kişinin vefatı sonrası geride kalan taşınır ve taşınmaz mal varlıklarının yasal mirasçılarına devri için veraset ve intikal işlemlerinin yapılması gerekir.",
            "Veraset ilamı alınması, vergi dairesine beyan edilmesi ve tapu müdürlüğünde tescil işleminin tamamlanması gerekir.",
            "TapuTakipMerkezi.com.tr, veraset ilamı alınmasından miras paylaşımına kadar tüm süreci profesyonelce yönetir."
        ],
        process: [
            "Veraset ilamı (mirasçılık belgesi) alınması",
            "Vergi dairesine veraset-intikal beyannamesi verilmesi",
            "Vergi borcu varsa ödenmesi",
            "Tapu müdürlüğüne başvuru",
            "Miras tescil işleminin tamamlanması"
        ],
        requiredDocs: [
            "Ölüm belgesi",
            "Veraset ilamı (noter veya mahkemeden)",
            "Miras kalan taşınmazların tapu bilgileri",
            "Mirasçıların kimlikleri",
            "Vergi dairesi işlem belgeleri"
        ],
        timeline: "15-45 gün (veraset ilamı alma süresi dahil)",
        faqs: [
            {
                q: "Veraset ilamı nereden alınır?",
                a: "Veraset ilamı noterden veya Sulh Hukuk Mahkemesinden alınabilir. Nüfus kayıtlarında sorun yoksa noterden hızlıca alınabilir."
            },
            {
                q: "Veraset ve intikal vergisi ne kadardır?",
                a: "Veraset ve intikal vergisi mirasa kalan değere ve mirasçı yakınlık derecesine göre %1 ile %30 arasında değişir. I. derece mirasçılar için düşük oranlı vergilendirme uygulanır."
            }
        ]
    },
    {
        slug: "vergi-ilisik-kesme",
        title: "Vergi İlişik Kesme",
        shortDesc: "Vergi dairesi ve belediye borç temizleme süreçleri.",
        detailedDescription: [
            "Taşınmaz satışlarında satıcının vergi dairesindeki и belediyedeki borçlarının kapatılması gerekir. Aksi takdirde tapu devri yapılamaz.",
            "Vergi ilişik kesme işlemi, satıcının vergi dairesi ve belediye nezdindeki tüm borçlarının ödenerek kaydın kapatılması işlemidir.",
            "TapuTakipMerkezi.com.tr, vergi ilişik kesme işlemlerini sizin adınıza takip eder ve borç varsa ödeme süreçlerini yönetir."
        ],
        process: [
            "Vergi dairesine başvuru",
            "Borç sorgulama",
            "Varsa borçların ödenmesi",
            "Emlak beyannamesi düzenlenmesi",
            "İlişik belgesi (BGBRV) alınması",
            "Belediyeden emlak vergisi borcu kontrolü"
        ],
        requiredDocs: [
            "Tapu fotokopisi",
            "Kimlik fotokopisi",
            "Vergi kimlik numarası",
            "Satış sözleşmesi (varsa)"
        ],
        timeline: "1-3 iş günü",
        faqs: [
            {
                q: "Vergi borcu varsa tapu devri yapılabilir mi?",
                a: "Hayır. Satıcının vergi dairesi ve belediye borçları kapatılmadan tapu devri yapılamaz."
            },
            {
                q: "BGBRV belgesi nedir?",
                a: "Bilgi, Belge ve Rapor Verme belgesidir. Taşınmazın vergi dairesindeki kaydını ve borç durumunu gösterir."
            }
        ]
    },
    {
        slug: "ifraz-tevhit",
        title: "İfraz & Tevhit",
        shortDesc: "Arazi ayırma ve birleştirme teknik takip süreçleri.",
        detailedDescription: [
            "İfraz, bir parselin iki veya daha fazla parsele bölünmesi işlemidir. Tevhit ise birden fazla parselin birleştirilerek tek parsel haline getirilmesidir.",
            "İfraz ve tevhit işlemleri imar mevzuatına uygun olarak yapılmalıdır. İmar planına aykırı ifraz işlemi yapılamaz.",
            "TapuTakipMerkezi.com.tr, ifraz ve tevhit projelerini hazırlayarak veya hazır projeleri ilgili kurumlara sunarak işlemleri tamamlar."
        ],
        process: [
            "Mevcut imar durumunu kontrol etme",
            "İfraz/tevhit projesinin hazırlanması (harita mühendisi)",
            "Belediye veya İl Müdürlüğü'ne onay başvurusu",
            "Proje onayı alındıktan sonra tapu müdürlüğüne başvuru",
            "Yeni parsel kayıtlarının oluşturulması"
        ],
        requiredDocs: [
            "Mevcut tapu fotokopisi",
            "İfraz/tevhit kroki ve projesi",
            "İmar durumu belgesi",
            "Kimlik belgesi",
            "Vekâletname (gerekirse)"
        ],
        timeline: "15-30 gün (proje hazırlama ve onay süresi dahil)",
        faqs: [
            {
                q: "Her arsa ifraz edilebilir mi?",
                a: "Hayır. İmar planına göre minimum parsel büyüklüğü şartını sağlayan ve imar yoluna cephesi olan parseller ifraz edilebilir."
            },
            {
                q: "Tevhit işlemi zorunlu mu?",
                a: "Tek proje için birden fazla parselde inşaat yapılacaksa tevhit işlemi yapılması genellikle zorunludur."
            }
        ]
    },
    {
        slug: "yabanci-satis",
        title: "Yabancı Satış",
        shortDesc: "Vatandaşlık ve yabancı mülk edinim uygunluk takibi.",
        detailedDescription: [
            "Türkiye'de yabancı uyruklu kişilere taşınmaz satışı belirli şartlara tabidir. Askeri yasak bölgeler ve güvenlik bölgelerinde satış yapılamaz.",
            "Yabancı alıcıların Türkiye'de toplam 30 hektar arazi edinme hakkı vardır. Ayrıca karşılıklılık şartı aranır.",
            "TapuTakipMerkezi.com.tr, yabancılara satış sürecinde gerekli izinlerin alınması ve tapu devir işlemlerinin sorunsuz tamamlanmasını sağlar."
        ],
        process: [
            "Yabancı alıcının pasaport bilgilerinin temini",
            "Taşınmazın satış yasağı olmayan bölgede olduğunun teyidi",
            "Tapu müdürlüğüne başvuru",
            "Valilik onayının alınması (gerekirse)",
            "Noter satış sözleşmesi düzenlenmesi",
            "Tapu devir işleminin tamamlanması"
        ],
        requiredDocs: [
            "Yabancının pasaportu (noter onaylı tercümesi)",
            "Vergi kimlik numarası",
            "İkamet belgesi veya ikamet izni",
            "Tapu belgesi",
            "DASK poliçesi",
            "Belediye emlak beyan belgesi"
        ],
        timeline: "5-15 iş günü (valilik onay süresi dahil)",
        faqs: [
            {
                q: "Hangi ülke vatandaşları Türkiye'de taşınmaz satın alabilir?",
                a: "Karşılıklılık şartını sağlayan ülke vatandaşları satın alabilir. Suriye, Ermenistan gibi bazı ülke vatandaşlarına satış yasaktır."
            },
            {
                q: "Yabancı 250.000 dolarlık konut alırsa vatandaşlık alabilir mi?",
                a: "Evet, en az 400.000 USD değerinde (2024 itibarıyla) taşınmaz satın alan yabancılar, 3 yıl satmama şartıyla Türk vatandaşlığına başvurabilir."
            }
        ]
    },
    {
        slug: "ipotek-kaldirma",
        title: "İpotek Fekki (İpotek Kaldırma)",
        shortDesc: "Banka borcu biten mülklerin ipotek kaldırma işlemleri.",
        detailedDescription: [
            "Konut veya taşınmaz kredisi kapandıktan sonra tapu üzerindeki ipotek kaydının kaldırılması (fek edilmesi) gerekir.",
            "İpotek kaldırılmadığı sürece taşınmaz üzerinde tam tasarruf hakkı kullanılamaz ve satış işlemi yapılamaz.",
            "TapuTakipMerkezi.com.tr, banka ile koordineli şekilde ipotek fek işlemlerini hızla tamamlar."
        ],
        process: [
            "Banka kredisinin tamamen kapatıldığının teyidi",
            "Bankadan fek yazısı ve belgelerinin talebi",
            "Tapu müdürlüğüne başvuru",
            "İpotek kaydının silinmesi",
            "Yeni tapu belgesinin alınması"
        ],
        requiredDocs: [
            "Tapu belgesi",
            "Kimlik belgesi",
            "Kredi kapama belgesi",
            "Banka fek yazısı",
            "Vekâletname (gerekirse)"
        ],
        timeline: "3-10 iş günü (banka fek yazısı bekleme süresi dahil)",
        faqs: [
            {
                q: "İpotek kaldırma ücreti ne kadardır?",
                a: "İpotek fek işlemi için tapu harcı ödenmez. Sadece tapu müdürlüğü döner sermaye ücreti alınır (sembolik tutardır)."
            },
            {
                q: "Krediyi kapattım ama ipotek hala tapuda görünüyor, ne yapmalıyım?",
                a: "Bankadan fek yazısı alarak tapu müdürlüğüne başvurmalısınız. Banka fek yazısı verince işlem çok hızlı tamamlanır."
            }
        ]
    },
    {
        slug: "kat-irtifaki",
        title: "Kat İrtifakı Tesisi",
        shortDesc: "İnşaat aşamasındaki projelerin tapu tescil süreci.",
        detailedDescription: [
            "Kat irtifakı, arsa üzerinde henüz tamamlanmamış bir yapının bağımsız bölümlerinin (daireler, dükkanlar) kat mülkiyetine geçmeden önce tescil edilmesidir.",
            "İnşaat firmaları genellikle kat irtifakı sonrası satış yapar. Alıcılar henüz yapı tamamlanmadan tapu alabilir.",
            "TapuTakipMerkezi.com.tr, kat irtifakı kurulumu sürecinde tüm teknik ve idari işlemleri yönetir."
        ],
        process: [
            "İmar durumu ve ruhsat kontrolü",
            "Mimari proje ve zemin kat planının hazırlanması",
            "Kat irtifakı projesinin kadastro müdürlüğüne onaylatılması",
            "Tapu müdürlüğüne başvuru",
            "Bağımsız bölümlerin tescili"
        ],
        requiredDocs: [
            "Arsa tapusu",
            "Yapı ruhsatı",
            "Onaylı mimari proje",
            "Kat irtifakı projesi",
            "Kimlik ve imza beyannamesi"
        ],
        timeline: "20-45 gün",
        faqs: [
            {
                q: "Kat irtifakı ile kat mülkiyeti arasındaki fark nedir?",
                a: "Kat irtifakı inşaat devam ederken kurulur. İskan alındıktan sonra kat mülkiyetine geçilir. Kat irtifakında arsa hissesi yoktur, sadece yapı hakkı vardır."
            },
            {
                q: "Kat irtifaklı daire satılabilir mi?",
                a: "Evet, kat irtifakı kurulduktan sonra daireler satılabilir. Alıcılar kredi de kullanabilir."
            }
        ]
    },
    {
        slug: "kat-mulkiyeti",
        title: "Kat Mülkiyeti Tesisi",
        shortDesc: "İskan sonrası kat mülkiyetine geçiş işlemleri.",
        detailedDescription: [
            "Kat mülkiyeti, bir yapının bağımsız bölümlerinin (daireler) ayrı ayrı mülkiyet konusu olmasıdır. İskan belgesi alındıktan sonra kat mülkiyetine geçilebilir.",
            "Kat irtifakı ile kat mülkiyeti arasındaki en önemli fark, kat mülkiyetinde arsa payının da mülkiyete dahil olmasıdır.",
            "TapuTakipMerkezi.com.tr, iskan sonrası kat mülkiyeti tesisi işlemlerini eksiksiz yönetir."
        ],
        process: [
            "İskan belgesinin alınması",
            "Kat mülkiyeti projesinin hazırlanması",
            "Kadastro müdürlüğü onayının alınması",
            "Tapu müdürlüğüne başvuru",
            "Bağımsız bölümlerin arsa paylarıyla birlikte tescili"
        ],
        requiredDocs: [
            "İskan belgesi (Yapı Kullanma İzin Belgesi)",
            "Kat irtifakı belgesi",
            "Mimari proje",
            "Kat mülkiyeti projesi",
            "Tapu belgesi"
        ],
        timeline: "15-30 gün",
        faqs: [
            {
                q: "Kat mülkiyeti olmadan daire satılabilir mi?",
                a: "İskan sonrası kat mülkiyeti kurulmadan satış yapılabilir ancak alıcının kredi kullanması zorlaşır. Kat mülkiyeti kurulması önerilir."
            },
            {
                q: "Kat mülkiyeti kurma harçları ne kadardır?",
                a: "Kat mülkiyeti tesisi için tapu harcı ödenmez. Sadece döner sermaye ve kadastro ücretleri alınır."
            }
        ]
    },
    {
        slug: "cins-tahsisi",
        title: "Cins Değişikliği (Cins Tahsisi)",
        shortDesc: "Arsadan binaya geçiş veya kullanım amacı değişimleri.",
        detailedDescription: [
            "Cins değişikliği (cins tahsisi), bir taşınmazın tapudaki tanımının değiştirilmesidir. Örneğin 'arsa' olan bir taşınmaz üzerine bina yapılınca 'bina' olarak değiştirilir.",
            "Yapı tamamlandıktan ve iskan alındıktan sonra cins değişikliği için tapu müdürlüğüne başvurulur.",
            "TapuTakipMerkezi.com.tr, cins değişikliği işlemlerini hızla sonuçlandırır."
        ],
        process: [
            "İskan belgesi veya yapı ruhsatının temini",
            "Tapu müdürlüğüne başvuru",
            "Yerinde keşif (gerekirse)",
            "Cinsin 'arsa'dan 'bina'ya çevrilmesi",
            "Yeni tapu belgesinin düzenlenmesi"
        ],
        requiredDocs: [
            "Tapu belgesi",
            "İskan belgesi veya yapı ruhsatı",
            "Kimlik belgesi",
            "Mimari proje (gerekirse)"
        ],
        timeline: "3-7 iş günü",
        faqs: [
            {
                q: "Cins değişikliği zorunlu mudur?",
                a: "Hayır, zorunlu değildir. Ancak yapılması önerilir çünkü tapuda 'arsa' olarak görünen ama üzerinde bina olan taşınmazlarda sorun yaşanabilir."
            },
            {
                q: "Cins değişikliği harçları ne kadardır?",
                a: "Cins değişikliği işlemi için tapu harcı ödenmez. Sadece döner sermaye ücreti alınır."
            }
        ]
    },
    {
        slug: "tapu-sorgulama",
        title: "Tapu Kaydı Sorgulama",
        shortDesc: "Resmi tapu kaydı ve takyidat belgesi temini.",
        detailedDescription: [
            "Tapu kaydı sorgulama, bir taşınmazın güncel tapu durumunu, malik bilgilerini, ipotek, haciz gibi takyidatlarını öğrenmek için yapılan resmi sorgulama işlemidir.",
            "Taşınmaz satın almadan önce mutlaka tapu sorgulaması yapılarak takyidat (haciz, ipotek, şerh) olup olmadığı kontrol edilmelidir.",
            "TapuTakipMerkezi.com.tr, tapu sorgulama ve takyidat belgesi temini işlemlerini sizin adınıza gerçekleştirir."
        ],
        process: [
            "Ada, parsel veya tapu bilgilerinin temini",
            "Tapu müdürlüğüne başvuru veya e-devlet sorgulaması",
            "Takyidat belgesinin alınması",
            "Detaylı raporun hazırlanması ve size iletilmesi"
        ],
        requiredDocs: [
            "Ada-parsel bilgisi veya tapu fotokopisi",
            "Kimlik fotokopisi",
            "Vekâletname (vekil yoluyla sorgulanacaksa)"
        ],
        timeline: "1-2 iş günü",
        faqs: [
            {
                q: "Takyidat belgesi nedir?",
                a: "Takyidat belgesi, taşınmaz üzerindeki ipotek, haciz, şerh gibi kayıtları gösteren resmi belgedir. Taşınmaz satın alırken mutlaka kontrol edilmelidir."
            },
            {
                q: "E-devletten tapu sorgulaması yapılabilir mi?",
                a: "Evet, kendi taşınmazınızın tapu bilgilerini e-devlet üzerinden sorgulayabilirsiniz. Başkasının taşınmazını sorgulamak için tapu müdürlüğüne başvurulması gerekir."
            }
        ]
    },
    {
        slug: "harc-hesaplama",
        title: "Harç Hesaplama",
        shortDesc: "Güncel tapu harcı ve döner sermaye hesaplamaları.",
        detailedDescription: [
            "Tapu işlemlerinde harç ve döner sermaye ücretleri, işlem türüne ve taşınmaz değerine göre değişir.",
            "TapuTakipMerkezi.com.tr, tapu harcı hesaplama ve ödeme süreçlerinde size destek olur, güncel oranları bilgilendirir."
        ],
        process: [
            "Taşınmaz değerinin belirlenmesi",
            "Harç oranlarının güncel verilerle hesaplanması",
            "Döner sermaye bedelinin tespit edilmesi",
            "Toplam maliyet raporunun hazırlanması"
        ],
        requiredDocs: [
            "Taşınmaz değer bilgisi",
            "İşlem türü (satış, miras, hibe vs.)"
        ],
        timeline: "Anında hesaplama",
        faqs: [
            {
                q: "Tapu harcı ne kadardır?",
                a: "Tapu devir harcı toplam satış bedelinin %4'üdür. Genellikle alıcı ve satıcı %2'şer öder."
            },
            {
                q: "Döner sermaye nedir?",
                a: "Döner sermaye, tapu müdürlüklerinin aldığı hizmet bedelidir. Miktarı işlem türüne göre değişir, genellikle düşük tutarlardır."
            }
        ]
    },
    {
        slug: "rayic-bedel",
        title: "Belediye Rayiç Değer",
        shortDesc: "Belediye rayiç değer takibi ve emlak beyan işlemleri.",
        detailedDescription: [
            "Belediye rayiç değeri, taşınmazın bulunduğu belediyenin belirlediği resmi değerdir. Tapu işlemlerinde bu değer esas alınır.",
            "Emlak beyan belgesi, belediyeden alınan ve taşınmazın rayiç değerini gösteren belgedir. Tapu devir işlemlerinde zorunludur.",
            "TapuTakipMerkezi.com.tr, belediye rayiç değer belgesi temini işlemlerini sizin adınıza gerçekleştirir."
        ],
        process: [
            "Belediye emlak müdürlüğüne başvuru",
            "Taşınmazın rayiç değerinin sorgulanması",
            "Emlak beyan belgesinin düzenlenmesi",
            "Belgenin alınması ve size iletilmesi"
        ],
        requiredDocs: [
            "Tapu fotokopisi",
            "Kimlik fotokopisi",
            "Ada-parsel bilgisi"
        ],
        timeline: "1-3 iş günü",
        faqs: [
            {
                q: "Rayiç değer ile piyasa değeri aynı mıdır?",
                a: "Hayır, rayiç değer genellikle piyasa değerinden düşüktür. Rayiç değer resmi işlemlerde esas alınır."
            },
            {
                q: "Her yıl emlak beyanı vermek gerekir mi?",
                a: "Evet, taşınmaz sahipleri her yıl mart ayında belediyeye emlak beyannamesi vermek zorundadır."
            }
        ]
    },
    {
        slug: "aile-ic-tapu-danismanligi",
        title: "Aile İçi Tapu Danışmanlığı",
        shortDesc: "Aile içi tapu sorunları ve miras süreçlerinde uzman danışmanlık hizmeti.",
        detailedDescription: [
            "Aile içinde ortaya çıkan tapu ve miras sorunlarını uzman ekibimiz analiz eder.",
            "Tapu devir, miras paylaşımı, vekâlet ve diğer hukuki süreçlerde rehberlik sağlar."
        ],
        process: [
            "Durum tespiti ve belge toplama",
            "Hukuki analiz ve çözüm önerisi",
            "Gerekli başvuruların hazırlanması ve takibi",
            "Sonuç raporu ve danışmanlık hizmeti"
        ],
        requiredDocs: [
            "Tapu fotokopisi",
            "Kimlik fotokopileri",
            "Vekâletname (gerekirse)",
            "Mirasçılar listesi"
        ],
        timeline: "3-10 iş günü",
        faqs: [
            {
                q: "Aile içinde tapu değişikliği nasıl yapılır?",
                a: "Gerekli belgeler ve vekâletname ile tapu müdürlüğüne başvurarak devir işlemi gerçekleştirilir."
            },
            {
                q: "Miras sürecinde hangi belgeler gerekir?",
                a: "Ölüm belgesi, veraset ilamı, mirasçıların kimlikleri ve tapu bilgileri gereklidir."
            }
        ]
    },
    {
        slug: "icra-takip",
        title: "İcra Takip İşlemleri",
        shortDesc: "İcra dairelerindeki taşınmaz ile ilgili tüm takip süreçlerinin profesyonel yönetimi.",
        detailedDescription: [
            "İcra takip işlemleri, borçlu aleyhine başlatılan icra süreçlerinde taşınmaz üzerindeki haciz, satış ve tescil gibi işlemlerin takibini kapsar.",
            "Taşınmaz üzerine konulan hacizler, icra müdürlükleri aracılığıyla yürütülür. Bu süreçlerde doğru ve zamanında yapılan takip, hak kayıplarının önlenmesi açısından kritik öneme sahiptir.",
            "TapuTakipMerkezi.com.tr, icra dairelerindeki taşınmaz ile ilgili tüm süreçleri (haciz koyma, kaldırma, icra satışı, dosya kapatma) sizin adınıza profesyonelce takip eder. İcra müdürlüğü, tapu müdürlüğü ve ilgili kurumlar nezdinde gerekli başvuruları yapar.",
            "Borçlu veya alacaklı taraf olmanız fark etmeksizin, icra süreçlerinde yaşanabilecek gecikmeleri en aza indirmek ve haklarınızı korumak için uzman desteği sunuyoruz."
        ],
        process: [
            "İcra dosya bilgilerinin ve taşınmaz kayıtlarının incelenmesi",
            "İcra müdürlüğü ile koordinasyon sağlanması",
            "Tapu müdürlüğünde haciz/şerh durumunun sorgulanması",
            "Gerekli başvuruların hazırlanması ve takibi",
            "Süreç hakkında düzenli bilgilendirme yapılması",
            "İşlem sonuçlarının raporlanması"
        ],
        requiredDocs: [
            "İcra dosya numarası ve icra müdürlüğü bilgisi",
            "Tapu belgesi veya taşınmaz bilgileri",
            "Kimlik fotokopisi",
            "Vekâletname (vekil yoluyla işlem yapılacaksa)",
            "Borç ödeme makbuzları (varsa)"
        ],
        timeline: "5-30 iş günü (dosya durumuna göre değişir)",
        faqs: [
            {
                q: "İcra takibi taşınmazı etkiler mi?",
                a: "Evet, icra takibi başlatıldığında borçlunun taşınmazına haciz konulabilir. Bu haciz tapu kaydına şerh olarak işlenir ve taşınmazın satışını veya devrini engeller."
            },
            {
                q: "İcra dosyasındaki taşınmaz bilgilerine nasıl ulaşılır?",
                a: "İcra müdürlüğünden dosya inceleme talebiyle veya UYAP sistemi üzerinden icra dosyası detaylarına ve taşınmaz bilgilerine ulaşılabilir."
            },
            {
                q: "İcra takibinde zamanaşımı var mı?",
                a: "İcra takibinde zamanaşımı süresi alacağın türüne göre değişir. Genel olarak 10 yıllık zamanaşımı süresi uygulanır. Ancak her dosyada ayrı değerlendirme yapılmalıdır."
            }
        ]
    },
    {
        slug: "haciz-kaldirma",
        title: "Haciz Kaldırma (Haciz Fekki)",
        shortDesc: "Tapu üzerindeki haciz şerhlerinin kaldırılması ve borç ödeme süreçlerinin takibi.",
        detailedDescription: [
            "Haciz kaldırma (haciz fekki), taşınmaz üzerine konulmuş haciz şerhinin kaldırılması işlemidir. Borç tamamen ödendikten sonra icra müdürlüğünden haciz kaldırma yazısı alınarak tapu müdürlüğüne başvurulur.",
            "Tapu üzerinde haciz şerhi bulunan taşınmazlar satılamaz, devredilemez ve ipotek verilemez. Bu nedenle haciz kaldırma işlemi, taşınmaz üzerinde tam tasarruf hakkı için zorunludur.",
            "TapuTakipMerkezi.com.tr, haciz kaldırma sürecinde icra müdürlüğü, tapu müdürlüğü ve ilgili kurumlar nezdinde tüm başvuruları sizin adınıza gerçekleştirir. Borç ödeme planı, taksitlendirme ve sulh anlaşması gibi konularda da rehberlik sağlar.",
            "Birden fazla haciz şerhi bulunan taşınmazlarda her dosya için ayrı ayrı haciz kaldırma işlemi yapılması gerekir. Tüm bu süreçleri koordineli şekilde yönetiyoruz."
        ],
        process: [
            "Tapu kaydında mevcut haciz şerhlerinin tespit edilmesi",
            "İlgili icra dosyalarının incelenmesi",
            "Borç tutarının ve ödeme durumunun belirlenmesi",
            "Borç ödeme veya sulh anlaşması sürecinin takibi",
            "İcra müdürlüğünden haciz kaldırma (fek) yazısının alınması",
            "Tapu müdürlüğüne başvuru ve haciz şerhinin kaldırılması",
            "Güncel tapu kaydının teyidi"
        ],
        requiredDocs: [
            "Tapu belgesi",
            "Kimlik belgesi",
            "İcra dosya numarası ve müdürlük bilgisi",
            "Borç ödeme makbuzları",
            "İcra müdürlüğünden alınan haciz kaldırma yazısı",
            "Vekâletname (vekil yoluyla işlem yapılacaksa)"
        ],
        timeline: "5-20 iş günü (borç ödeme ve icra müdürlüğü süresine bağlı)",
        faqs: [
            {
                q: "Haciz kaldırma ücreti var mıdır?",
                a: "Haciz kaldırma işlemi için tapu harcı ödenmez. Sadece tapu müdürlüğü döner sermaye ücreti alınır. Ancak icra dosyasındaki borç, faiz ve masrafların ödenmesi gerekir."
            },
            {
                q: "Birden fazla haciz varsa hepsi aynı anda kaldırılabilir mi?",
                a: "Her haciz ayrı bir icra dosyasına aittir. Her dosyadaki borç ayrı ayrı ödenerek fek yazısı alınmalıdır. Tüm hacizler kaldırılmadan taşınmaz üzerinde tam tasarruf hakkı oluşmaz."
            },
            {
                q: "Borç ödenmeden haciz kaldırılabilir mi?",
                a: "Kural olarak borç ödenmeden haciz kaldırılamaz. Ancak mahkeme kararı, taksitlendirme anlaşması veya alacaklı ile sulh anlaşması gibi durumlarda farklı çözümler mümkün olabilir."
            }
        ]
    },
    {
        slug: "icra-satis-takibi",
        title: "İcra Satış (İhale) Takibi",
        shortDesc: "İcra yoluyla satışa çıkarılan taşınmazların ihale süreç takibi.",
        detailedDescription: [
            "İcra satışı, borçlunun borcunu ödememesi halinde taşınmazının icra müdürlüğü tarafından açık artırma (ihale) yoluyla satılmasıdır. Bu süreç İcra ve İflas Kanunu çerçevesinde yürütülür.",
            "İcra satışı hem alıcılar hem de borçlular açısından dikkat edilmesi gereken önemli detaylar içerir. Satış ilanı, kıymet takdiri, ihale süreci ve tescil aşamalarının her biri ayrı uzmanlık gerektirir.",
            "TapuTakipMerkezi.com.tr, icra satış sürecinde taşınmaz üzerindeki takyidatların incelenmesi, kıymet takdiri raporunun değerlendirilmesi, ihale sürecinin takibi ve ihale sonrası tescil işlemlerinde profesyonel destek sağlar.",
            "İhaleye katılmak isteyen alıcılar için taşınmazın hukuki durumunun araştırılması, imar durumu kontrolü ve tapu kayıt analizi gibi hizmetler de sunulmaktadır."
        ],
        process: [
            "İcra satış ilanının ve dosya bilgilerinin incelenmesi",
            "Taşınmazın tapu kaydı ve takyidat durumunun araştırılması",
            "Kıymet takdiri raporunun değerlendirilmesi",
            "İhale tarihinin ve şartlarının takibi",
            "İhaleye katılım için gerekli teminat ve belgelerin hazırlanması",
            "İhale sonrası tescil işlemlerinin yürütülmesi"
        ],
        requiredDocs: [
            "İcra satış ilanı bilgileri",
            "Kimlik belgesi",
            "Teminat bedeli (ihaleye katılım için)",
            "İcra dosya numarası",
            "Tapu bilgileri (ada-parsel)",
            "Vekâletname (vekil yoluyla katılım için)"
        ],
        timeline: "30-90 gün (ihale takvimi ve tescil sürecine göre)",
        faqs: [
            {
                q: "İcra satışında taşınmaz piyasa değerinin altında mı satılır?",
                a: "İcra satışında birinci ihalede taşınmaz kıymet takdir bedelinin %50'sinden az olmamak üzere satılır. İkinci ihalede ise %50'sinin altına düşülebilir. Piyasa değerinin altında satış mümkündür."
            },
            {
                q: "İhaleye herkes katılabilir mi?",
                a: "İcra ihalelerine gerçek ve tüzel kişiler katılabilir. Ancak borçlunun kendisi, icra müdürü ve bazı yasaklı kişiler ihaleye katılamaz. Teminat yatırılması zorunludur."
            },
            {
                q: "İhale sonrası tapu devri nasıl yapılır?",
                a: "İhale kesinleştikten ve bedel ödendikten sonra icra müdürlüğü tapu müdürlüğüne tescil yazısı gönderir. Tapu müdürlüğü taşınmazı ihale alıcısı adına tescil eder."
            }
        ]
    },
    {
        slug: "icra-dosyasi-kapatma",
        title: "İcra Dosyası Kapatma",
        shortDesc: "Borç ödendikten sonra icra dosyasının kapatılması ve tapu üzerindeki kayıtların temizlenmesi.",
        detailedDescription: [
            "İcra dosyası kapatma, borçlunun borcunu tamamen ödemesi veya alacaklı ile anlaşma sağlaması durumunda icra dosyasının kapatılması ve tapu üzerindeki şerhlerin temizlenmesi işlemidir.",
            "Borç ödendikten sonra icra dosyasının kapatılmaması ve tapu üzerindeki haciz şerhlerinin kaldırılmaması sık karşılaşılan bir sorundur. Bu durum taşınmazın satışını ve devir işlemlerini engeller.",
            "TapuTakipMerkezi.com.tr, borç ödemesi sonrası icra dosyasının resmi olarak kapatılması, haciz kaldırma yazılarının alınması ve tapu müdürlüğünde şerhlerin temizlenmesi süreçlerini eksiksiz takip eder.",
            "Eski tarihli icra dosyalarında zamanaşımı, alacaklı tüzel kişiliğin sona ermesi gibi özel durumlarda da çözüm yolları araştırılarak dosya kapatma süreci yürütülür."
        ],
        process: [
            "İcra dosyasının güncel durumunun incelenmesi",
            "Borç tutarının (anapara + faiz + masraf) hesaplatılması",
            "Borç ödemesinin yapılması veya anlaşma sağlanması",
            "İcra müdürlüğüne dosya kapatma başvurusu",
            "Haciz kaldırma yazılarının alınması",
            "Tapu müdürlüğünde şerhlerin temizlenmesi",
            "Dosya kapatma ve tapu güncelleme teyidi"
        ],
        requiredDocs: [
            "İcra dosya numarası ve müdürlük bilgisi",
            "Borç ödeme makbuzları",
            "Kimlik belgesi",
            "Tapu belgesi",
            "Alacaklı ile yapılan anlaşma belgesi (varsa)",
            "Vekâletname (vekil yoluyla işlem yapılacaksa)"
        ],
        timeline: "5-15 iş günü",
        faqs: [
            {
                q: "Borç ödendikten sonra icra dosyası otomatik kapanır mı?",
                a: "Hayır. Borç ödendikten sonra alacaklının dosyayı kapatma talebi veya icra müdürlüğüne başvuru yapılması gerekir. Ayrıca tapu üzerindeki haciz şerhinin kaldırılması için ayrı işlem yapılmalıdır."
            },
            {
                q: "Eski icra dosyaları kapatılabilir mi?",
                a: "Evet. Zamanaşımına uğramış veya alacaklısı bulunamayan eski dosyalar için de kapatma yolları mevcuttur. Her dosya ayrı değerlendirilmelidir."
            },
            {
                q: "İcra dosyası kapatma masrafı ne kadardır?",
                a: "Dosya kapatma için icra müdürlüğüne ödenen masraflar dosyadaki borç tutarına eklenir. Ayrıca tapu döner sermaye ücreti gibi küçük tutarlar da söz konusu olabilir."
            }
        ]
    },
    {
        slug: "haciz-serhi-sorgulama",
        title: "Taşınmaz Haciz Şerhi Sorgulama",
        shortDesc: "Tapu üzerinde haciz, ihtiyati tedbir veya icra şerhi olup olmadığının araştırılması.",
        detailedDescription: [
            "Haciz şerhi sorgulama, bir taşınmazın tapu kaydında haciz, ihtiyati haciz, ihtiyati tedbir veya icra şerhi bulunup bulunmadığının resmi kaynaklardan araştırılmasıdır.",
            "Taşınmaz satın almadan önce tapu kaydındaki takyidatların (haciz, ipotek, şerh) kontrol edilmesi büyük önem taşır. Hacizli bir taşınmazın satın alınması ciddi hukuki sorunlara yol açabilir.",
            "TapuTakipMerkezi.com.tr, tapu müdürlüğü ve e-devlet kanallarından taşınmaz üzerindeki tüm takyidatları araştırır, haciz varsa hangi icra dosyasından geldiğini tespit eder ve detaylı rapor sunar.",
            "Sorgulama sonucunda haciz veya şerh tespit edilmesi halinde, kaldırma süreçleri hakkında da danışmanlık ve takip hizmeti verilmektedir."
        ],
        process: [
            "Taşınmaz bilgilerinin (ada-parsel, tapu bilgisi) alınması",
            "Tapu müdürlüğünden takyidat belgesi talep edilmesi",
            "E-devlet üzerinden tapu kaydı sorgulanması",
            "Haciz, ihtiyati tedbir ve diğer şerhlerin tespit edilmesi",
            "Haciz varsa ilgili icra dosyası bilgilerinin belirlenmesi",
            "Detaylı raporun hazırlanması ve sunulması"
        ],
        requiredDocs: [
            "Tapu fotokopisi veya ada-parsel bilgisi",
            "Kimlik fotokopisi",
            "Vekâletname (vekil yoluyla sorgulanacaksa)"
        ],
        timeline: "1-3 iş günü",
        faqs: [
            {
                q: "Haciz şerhi tapu kaydında nasıl görünür?",
                a: "Haciz şerhi tapu kaydının 'Beyanlar' veya 'Şerhler' bölümünde yer alır. İcra müdürlüğü, dosya numarası ve haciz tarihi bilgileri kayıtlıdır."
            },
            {
                q: "E-devletten haciz sorgulama yapılabilir mi?",
                a: "Evet, kendi taşınmazınız için e-devlet üzerinden tapu kaydı ve takyidat sorgulaması yapabilirsiniz. Üçüncü kişilerin taşınmazları için tapu müdürlüğüne başvurulması gerekir."
            },
            {
                q: "Hacizli taşınmaz satın alınır mı?",
                a: "Hacizli taşınmazın devri hukuken mümkün değildir. Önce hacizlerin kaldırılması gerekir. Bu nedenle satın almadan önce mutlaka haciz şerhi sorgulaması yaptırılmalıdır."
            }
        ]
    },
    {
        slug: "e-haciz-kaldirma",
        title: "E-Haciz & Banka Bloke Kaldırma",
        shortDesc: "Vergi dairelerinden uygulanan elektronik haciz ve banka blokelerinin kaldırılması danışmanlığı.",
        detailedDescription: [
            "E-haciz (elektronik haciz), 6183 sayılı Amme Alacaklarının Tahsil Usulü Hakkında Kanun kapsamında vergi dairelerinin borçlu mükelleflerin banka hesaplarına, menkul kıymetlerine ve taşınmazlarına elektronik ortamda haciz koymasıdır.",
            "Vergi daireleri, ödenmemiş vergi borçları, SGK primleri, trafik cezaları ve diğer kamu alacakları nedeniyle VEDOP sistemi üzerinden bankalara e-haciz talimatı gönderebilir. Bu durumda banka hesapları bloke edilir ve mevcut bakiye ile yeni gelen paralar otomatik olarak haciz altına alınır.",
            "E-haciz işlemi, 6183 sayılı Kanun'un 62. maddesi uyarınca ödeme emri tebliğ edildikten sonra 15 günlük ödeme süresi dolunca uygulanabilir. Ödeme emrine itiraz süresi de 15 gündür (6183/58. madde).",
            "TapuTakipMerkezi.com.tr, vergi dairelerinden uygulanan e-haciz ve banka blokelerinin kaldırılması süreçlerinde danışmanlık ve rehberlik hizmeti sunar. Borç yapılandırma, taksitlendirme ve itiraz süreçlerinde de destek sağlar."
        ],
        process: [
            "E-haciz ve bloke durumunun tespit edilmesi (banka ve vergi dairesi)",
            "Hacze konu borcun anapara, faiz ve gecikme zammı tutarının hesaplatılması",
            "Ödeme emrine itiraz hakkının değerlendirilmesi (6183/58. madde)",
            "Borç yapılandırma veya taksitlendirme başvurusu (varsa)",
            "Vergi dairesine e-haciz kaldırma dilekçesi verilmesi",
            "Banka blokesinin kaldırılmasının takibi",
            "Taşınmaz üzerindeki e-haciz şerhinin tapu müdürlüğünden kaldırılması"
        ],
        requiredDocs: [
            "Kimlik belgesi / Vergi kimlik numarası",
            "Vergi dairesi adı ve sicil numarası",
            "Banka hesap bilgileri ve bloke durumu",
            "Ödeme emri tebligatı (varsa)",
            "Borç ödeme makbuzları (varsa)",
            "Vekâletname (vekil yoluyla işlem yapılacaksa)"
        ],
        timeline: "3-15 iş günü (borç ödeme ve yapılandırma süresine bağlı)",
        faqs: [
            {
                q: "E-haciz nedir ve nasıl uygulanır?",
                a: "E-haciz, 6183 sayılı Kanun kapsamında vergi dairelerinin elektronik ortamda (VEDOP sistemi üzerinden) borçlu mükelleflerin banka hesaplarına, menkul kıymetlerine ve taşınmazlarına haciz koymasıdır. Ödeme emri tebliğ edildikten sonra 15 günlük süre dolunca uygulanabilir."
            },
            {
                q: "E-haciz nasıl kaldırılır?",
                a: "E-haciz, borcun tamamen ödenmesi, yapılandırılması (7440 sayılı Kanun gibi af kanunları dahil) veya ödeme emrine itiraz kabul edilmesi halinde kaldırılır. Vergi dairesine yazılı başvuru yapılması gerekir."
            },
            {
                q: "E-haciz konulduktan sonra bankadaki param kullanılabilir mi?",
                a: "Hayır. E-haciz konulan hesaptaki tutar borç miktarı kadar bloke edilir. Bu tutar üzerinde tasarruf hakkınız kalmaz. Ancak borç tutarından fazla olan kısım serbest kalır."
            },
            {
                q: "Vergi borcu yapılandırılırsa e-haciz kalkar mı?",
                a: "Evet. 6183 sayılı Kanun veya çıkarılan af/yapılandırma kanunları kapsamında borç yapılandırılırsa, ilk taksit ödendikten sonra vergi dairesinden e-haciz kaldırma talep edilebilir."
            }
        ]
    },
];

// Slug'a göre hizmet detayını bulma fonksiyonu
export const getServiceDetailBySlug = (slug: string): ServiceDetail | undefined => {
    return serviceDetails.find(detail => detail.slug === slug);
};
