import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
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
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
