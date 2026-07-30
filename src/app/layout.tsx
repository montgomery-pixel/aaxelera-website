import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaxelera.com"),
  title: "Aaxelera | AI Search Visibility & AI-Powered Lead Generation",
  description:
    "Aaxelera gets businesses found when customers ask ChatGPT, Perplexity, and Google AI for recommendations, and books qualified meetings with AI-powered lead generation systems.",
  alternates: { canonical: "https://aaxelera.com" },
  openGraph: {
    title: "Aaxelera | AI Search Visibility & Lead Generation",
    description:
      "Get found in AI search and fill your pipeline with AI-powered lead generation. Both built by Aaxelera.",
    url: "https://aaxelera.com",
    siteName: "Aaxelera",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

// Entity signals for search engines and AI crawlers. The double-a "Aaxelera"
// spelling gets autocorrected to a large chip company's brand; explicit
// Organization markup + sameAs profiles is the strongest counter-signal.
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aaxelera",
  legalName: "Aaxelera LLC",
  url: "https://aaxelera.com",
  logo: "https://aaxelera.com/logo.svg",
  description:
    "Aaxelera gets businesses found in AI search (ChatGPT, Perplexity, Google AI) and books qualified meetings with AI-powered lead generation systems.",
  founder: { "@type": "Person", name: "Montgomery Pruss" },
  sameAs: [
    "https://www.youtube.com/@AaxeleraPod",
    "https://podcasts.apple.com/us/podcast/the-aaxelera-podcast/id1858952309",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        {children}
      </body>
    </html>
  );
}
