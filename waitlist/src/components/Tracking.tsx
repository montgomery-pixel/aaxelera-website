"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GOOGLE_TAG_ID, META_PIXEL_ID } from "@/lib/tracking";
import { captureAttribution } from "@/lib/utm";

/**
 * Loads the Meta Pixel and Google tag when their IDs are set in the
 * environment (see .env.example), and records UTM parameters on arrival.
 */
export function Tracking() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return (
    <>
      {META_PIXEL_ID ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', ${JSON.stringify(META_PIXEL_ID)});
fbq('track', 'PageView');`}
        </Script>
      ) : null}

      {GOOGLE_TAG_ID ? (
        <>
          <Script
            id="google-tag-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GOOGLE_TAG_ID)}`}
          />
          <Script id="google-tag" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', ${JSON.stringify(GOOGLE_TAG_ID)});`}
          </Script>
        </>
      ) : null}
    </>
  );
}
