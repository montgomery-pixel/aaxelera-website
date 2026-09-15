import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO Growth System | Aaxelera | AI Search Visibility for Local Businesses",
  description:
    "Get found by ChatGPT, Google AI, and Perplexity. Aaxelera helps clinics, practices, firms, and local service businesses dominate AI search with the GEO Growth System.",
  openGraph: {
    title: "Is AI Recommending Your Business? | Aaxelera GEO",
    description:
      "40% of local searches now touch AI. Get a free GEO audit and see how AI search engines rank your business.",
    url: "https://aaxelera.com/geo",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/geo" },
};

// The service this page sells, stated for AI crawlers rather than left implied
// in marketing prose. Mirrors what our own audits grade clients on.
const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GEO Growth System",
  serviceType: "Generative Engine Optimization",
  description:
    "Aaxelera measures whether AI search engines name a local business when customers ask for a recommendation, then does the work to make it the answer.",
  provider: {
    "@type": "Organization",
    name: "Aaxelera",
    url: "https://aaxelera.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    name: "Local service businesses, clinics, practices and firms",
  },
  url: "https://aaxelera.com/geo",
};

export default function GeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      {children}
    </>
  );
}
