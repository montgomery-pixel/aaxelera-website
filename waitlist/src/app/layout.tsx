import type { Metadata, Viewport } from "next";
import { Tracking } from "@/components/Tracking";
import { meta } from "@/config/content";
import { site } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    siteName: site.brand,
  },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
        <Tracking />
      </body>
    </html>
  );
}
