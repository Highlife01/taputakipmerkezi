import { Helmet } from 'react-helmet-async';

export interface GeoTagProps {
    region?: string;      // e.g. "TR-01"
    placename?: string;   // e.g. "Adana, Türkiye"
    position?: string;    // e.g. "36.9914;35.3308"
    icbm?: string;        // e.g. "36.9914, 35.3308"
}

export interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    keywords?: string;
    geo?: GeoTagProps;
    schemas?: Record<string, unknown> | Array<Record<string, unknown>>;
    noIndex?: boolean;
    publishedTime?: string;
    modifiedTime?: string;
}

const defaultImage = "https://www.taputakipmerkezi.com.tr/og-image.png";
const defaultUrl = "https://www.taputakipmerkezi.com.tr";

const SEO = ({
    title = "Tapu Takip Merkezi | Resmi Tapu ve Vergi İşlemleri Takibi",
    description = "81 ilde profesyonel tapu, vergi ve miras işlemleri takibi. Resmi danışmanlık, Web Tapu randevu yönetimi ve süreç takibi.",
    image = defaultImage,
    url = defaultUrl,
    type = "website",
    keywords = "tapu takip, tapu devri, veraset intikal, iskan sorgulama, tapu randevu, vergi ilişik kesme, haciz kaldırma, gayrimenkul danışmanlık",
    geo,
    schemas,
    noIndex = false,
    publishedTime,
    modifiedTime,
}: SEOProps) => {
    const siteTitle = title.includes("Tapu Takip Merkezi")
        ? title
        : `${title} | Tapu Takip Merkezi`;

    const schemaList = schemas
        ? (Array.isArray(schemas) ? schemas : [schemas])
        : [];

    const fullImageUrl = image.startsWith("http")
        ? image
        : `${defaultUrl}${image.startsWith("/") ? "" : "/"}${image}`;

    return (
        <Helmet>
            {/* Temel Meta Etiketleri */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta
                name="robots"
                content={
                    noIndex
                        ? "noindex, nofollow"
                        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                }
            />
            <link rel="canonical" href={url} />

            {/* Hreflang Etiketleri */}
            <link rel="alternate" hrefLang="tr" href={url} />
            <link rel="alternate" hrefLang="x-default" href={url} />

            {/* Coğrafi ve Yerel SEO Meta Etiketleri (GEO) */}
            {geo?.region && <meta name="geo.region" content={geo.region} />}
            {geo?.placename && <meta name="geo.placename" content={geo.placename} />}
            {geo?.position && <meta name="geo.position" content={geo.position} />}
            {geo?.position && (
                <meta
                    name="ICBM"
                    content={geo.icbm || geo.position.replace(";", ", ")}
                />
            )}

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:site_name" content="Tapu Takip Merkezi" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content="tr_TR" />
            {publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />

            {/* Yapılandırılmış Veriler (Schema.org JSON-LD) */}
            {schemaList.map((s, idx) => (
                <script key={`seo-schema-${idx}`} type="application/ld+json">
                    {JSON.stringify(s)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
