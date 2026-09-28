import { Helmet } from "react-helmet-async";

interface SchemaDataProps {
    type: string;
    data: Record<string, unknown>;
}

const SchemaData = ({ type, data }: SchemaDataProps) => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": type,
        ...data
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default SchemaData;
