import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { Geist, Cormorant_Garamond } from "next/font/google"
import { Analytics as VercelAnalytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
})

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ""
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || ""
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || ""

export const metadata: Metadata = {
  title: "Maru Travel - Luxury Travel Experiences & Destinations",
  description:
    "Discover extraordinary journeys with Maru Travel. Explore handpicked luxury destinations, curated travel packages, and unforgettable experiences around the world.",
  keywords:
    "luxury travel, travel packages, vacation destinations, luxury tours, travel agency, exotic destinations, premium travel",
  authors: [{ name: "Maru Travel" }],
  creator: "Maru Travel",
  category: "travel",
  publisher: "Maru Travel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://marutravel.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maru Travel - Luxury Travel Experiences & Destinations",
    description:
      "Discover extraordinary journeys with Maru Travel. Explore handpicked luxury destinations and curated travel packages.",
    url: "https://marutravel.com",
    siteName: "Maru Travel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maru Travel",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maru Travel - Luxury Travel Experiences & Destinations",
    description:
      "Discover extraordinary journeys with Maru Travel. Explore handpicked luxury destinations and curated travel packages.",
    images: ["/og-image.jpg"],
    creator: "@marutravel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Maru Travel",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        {GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}

        {/* Google Analytics 4 */}
        {GA4_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4-script" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel */}
        {FB_PIXEL_ID && (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* Schema.org structured data for SEO */}
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Maru Travel",
            description: "Luxury travel agency specializing in curated travel experiences and exotic destinations",
            url: "https://marutravel.com",
            logo: "https://marutravel.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-XXX-XXX-XXXX",
              contactType: "Customer Service",
            },
            sameAs: [
              "https://www.facebook.com/marutravel",
              "https://www.instagram.com/marutravel",
              "https://www.twitter.com/marutravel",
            ],
          })}
        </Script>
      </head>
      <body className={`${geist.variable} ${cormorant.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          <VercelAnalytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
