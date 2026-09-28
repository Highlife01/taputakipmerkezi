export interface GuideQuestion {
    question: string;
    slug: string;
    answer: string;
}

export const questions: GuideQuestion[] = [
    {
        question: "Tapu devri ne kadar sürer?",
        slug: "tapu-devri-ne-kadar-surer",
        answer: "Normal şartlarda başvuru yapıldıktan sonra 1-2 iş günü içerisinde tamamlanır."
    },
    {
        question: "Tapu devri masrafı ne kadar?",
        slug: "tapu-devri-masrafi-ne-kadar",
        answer: "Satış bedelinin %4'ü oranında harç ve döner sermaye ücreti ödenir."
    },
    {
        question: "Hisseli tapu satılır mı?",
        slug: "hisseli-tapu-satilir-mi",
        answer: "Evet, diğer hissedarların ön alım hakkı (şufa) gözetilerek satılabilir."
    },
    {
        question: "Tapu işlemleri kaç gün sürer?",
        slug: "tapu-islemleri-kac-gun-surer",
        answer: "Evrakların eksiksiz olması durumunda genellikle 24-48 saat sürer."
    },
    {
        question: "E-devlet tapu takip nasıl yapılır?",
        slug: "e-devlet-tapu-takip-nasil-yapilir",
        answer: "e-Devlet üzerinden Web Tapu sistemine giriş yaparak tüm başvuruları takip edebilirsiniz."
    },
    {
        question: "İskan belgesi nedir?",
        slug: "iskan-belgesi-nedir",
        answer: "Yapının ruhsat ve eklerine uygun olarak tamamlandığını gösteren, belediye tarafından verilen kullanım izin belgesidir."
    },
    {
        question: "İskan olmazsa ne olur?",
        slug: "iskan-olmazsa-ne-olur",
        answer: "İskan olmayan binalarda şantiye elektriği/suyu kullanılır, kat mülkiyetine geçilemez ve konut kredisi almak zorlaşır."
    },
    {
        question: "Tapu harcı neye göre hesaplanır?",
        slug: "tapu-harci-neye-gore-hesaplanir",
        answer: "Beyan edilen satış bedeli ile belediye rayiç bedelinden yüksek olanı üzerinden %4 oranında hesaplanır."
    },
    {
        question: "İpotek fekki ne kadar sürer?",
        slug: "ipotek-fekki-ne-kadar-surer",
        answer: "Banka fek yazısını sisteme gönderdikten sonra tapu dairesinde genellikle aynı gün veya ertesi gün işlem tamamlanır."
    },
    {
        question: "Veraset ve intikal vergisi ödenmeden tapu devri yapılır mı?",
        slug: "veraset-intikal-vergisi-odenmeden-tapu-devri-yapilir-mi",
        answer: "Hayır, vergi dairesinden 'ilişik kesme belgesi' alınmadan veya tapuya şerh konulmadan devir yapılamaz."
    },
    {
        question: "Hisseli tapuda şufa hakkı nedir?",
        slug: "hisseli-tapuda-sufa-hakki-nedir",
        answer: "Bir hissedarın hissesini satması durumunda, diğer hissedarların o hisseyi öncelikle satın alma hakkıdır."
    },
    {
        question: "Adrese göre iskan sorgulaması nasıl yapılır?",
        slug: "adrese-gore-iskan-sorgulamasi-nasil-yapilir",
        answer: "Belediyelerin imar müdürlüklerine adres bilgisi ile başvurarak veya varsa online sistemlerinden sorgulama yapılabilir."
    },
    {
        question: "Yabancı satışında ekspertiz raporu zorunlu mu?",
        slug: "yabanci-satisinda-ekspertiz-raporu-zorunlu-mu",
        answer: "Evet, yabancı uyruklu kişilerin taraf olduğu tüm gayrimenkul satışlarında değerleme raporu alınması zorunludur."
    }
];
