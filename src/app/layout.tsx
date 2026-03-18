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
  title: "Aaxelera | AI-Powered Demo Pipeline for PropTech SaaS",
  description:
    "AI SDRs and message testing systems that help PropTech SaaS teams book 30-60 qualified demos per month without adding headcount.",
  openGraph: {
    title: "Aaxelera | PropTech Demo Pipeline",
    description:
      "Book 30-60 qualified demos/month with AI-powered outbound.",
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
