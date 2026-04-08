import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO Growth System | Aaxelera — AI Search Visibility for Local Businesses",
  description:
    "Get found by ChatGPT, Google AI, and Perplexity. Aaxelera helps dentists, lawyers, and local businesses dominate AI search with the GEO Growth System.",
  openGraph: {
    title: "Is AI Recommending Your Business? | Aaxelera GEO",
    description:
      "40% of local searches now touch AI. Get a free GEO audit and see how AI search engines rank your business.",
    url: "https://aaxelera.com/geo",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function GeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
