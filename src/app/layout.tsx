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
  title: "Aaxelera | AI Search Visibility for Local Businesses",
  description:
    "Get found by ChatGPT, Google AI, and Perplexity. Aaxelera helps dentists, lawyers, and local businesses dominate AI search with the GEO Growth System.",
  openGraph: {
    title: "Aaxelera | Is AI Recommending Your Business?",
    description:
      "40% of local searches now touch AI. Get visible with the GEO Growth System.",
    url: "https://aaxelera.com",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
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
        {children}
      </body>
    </html>
  );
}
