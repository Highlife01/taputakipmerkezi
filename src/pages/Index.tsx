import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DocumentRequirements from "@/components/DocumentRequirements";
import ServicesGrid from "@/components/ServicesGrid";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import RegionalExplorer from "@/components/RegionalExplorer";

const homeFaqSchema = {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Tapu takip işlemleri ne kadar sürede tamamlanır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evraklarınızın eksiksiz olması durumunda, vergi ilişik kesme süreçleri genellikle 1-3 iş günü, tapu devir işlemleri ise randevu yoğunluğuna göre aynı gün veya ertesi gün sonuçlanır."
      }
    },
    {
      "@type": "Question",
      "name": "Tapu takibi için vekaletname vermem gerekiyor mu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, sizin adınıza resmi kurumlarda (Tapu Müdürlükleri, Belediyeler, Vergi Daireleri) takip yapabilmemiz için gayrimenkul işlemlerine özel sınırlı yetkili bir noter vekâletnamesi vermeniz süreci hızlandırır."
      }
    },
    {
      "@type": "Question",
      "name": "Hangi illerde tapu takip hizmeti veriyorsunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Türkiye'nin tüm 81 ilinde ve 970'ten fazla ilçesinde Tapu ve Kadastro Müdürlükleri nezdinde dosya takibi ve resmi danışmanlık hizmeti sunmaktayız."
      }
    },
    {
      "@type": "Question",
      "name": "Tapu harcı neye göre hesaplanır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tapu harcı, beyan edilen satış bedeli ile belediye rayiç bedelinden yüksek olanı üzerinden toplam %4 (%2 alıcı, %2 satıcı) oranında hesaplanır ve döner sermaye bedeli eklenir."
      }
    }
  ]
};

const homeLocalBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": "https://www.taputakipmerkezi.com.tr",
  "name": "Tapu Takip Merkezi",
  "image": "https://www.taputakipmerkezi.com.tr/favicon.png",
  "url": "https://www.taputakipmerkezi.com.tr",
  "telephone": "+905320550945",
  "priceRange": "₺₺",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Türkiye Geneli Hizmet Ağı",
    "addressLocality": "Adana",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.9914,
    "longitude": 35.3308
  },
  "areaServed": {
    "@type": "Country",
    "name": "Turkey"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  }
};

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Tapu Takip Merkezi | 81 İlde Resmi Tapu, Vergi ve Miras Takibi"
        description="Türkiye'nin 81 ilinde tapu devri, veraset intikal, iskan sorgulama ve icra haciz kaldırma takibi. Uzman kadromuzla resmi dairelerdeki işlemlerinizi güvenle tamamlayın."
        url="https://www.taputakipmerkezi.com.tr"
        keywords="tapu takip, tapu devri, veraset intikal, tapu randevu, iskan sorgulama, vergi ilişik kesme, haciz kaldırma, gayrimenkul danışmanlık, 81 il tapu takibi"
        schemas={[homeLocalBusinessSchema, homeFaqSchema]}
      />
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <RegionalExplorer />
      <DocumentRequirements />
      <ServicesGrid />
      <ContactSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
