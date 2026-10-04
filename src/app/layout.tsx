import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";
import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171717",
  colorScheme: "light"
};

export const metadata: Metadata = {
  title: {
    default: "ZORS CRAFT — Think. Craft. Grow.",
    template: "%s — ZORS CRAFT",
  },
  description: "From strategy and brand identity to websites, digital experiences, and product solutions, we help businesses build trust, attract customers, and grow.",
  applicationName: "ZORS CRAFT",
  keywords: ["Design Agency", "Web Development", "Brand Strategy", "Digital Craftsmanship", "Next.js Development", "UI UX Design"],
  authors: [{ name: "ZORS CRAFT" }],
  openGraph: {
    title: "ZORS CRAFT — Think. Craft. Grow.",
    description: "From strategy and brand identity to websites, digital experiences, and product solutions, we help businesses build trust, attract customers, and grow.",
    url: "https://zorscraft.id",
    siteName: "ZORS CRAFT",
    images: [
      {
        url: "https://zorscraft.id/og.png",
        width: 1200,
        height: 630,
        alt: "ZORS CRAFT",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZORS CRAFT — Think. Craft. Grow.',
    description: "From strategy and brand identity to websites, digital experiences, and product solutions, we help businesses build trust, attract customers, and grow.",
    creator: '@zorscraft',
    images: ['https://zorscraft.id/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-neutral-900 dark:text-neutral-50 flex`}
      >
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org", 
      "@type": "Organization",
      "name": "ZORS CRAFT",
      "alternateName": "ZORS",
      "url": "https://zorscraft.id", 
      "logo": "https://zorscraft.id/logo.png", 
      "description": "Think. Craft. Grow. ZORS is a digital studio crafting brands, websites, and digital products meant to last.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "General Inquiry",
        "email": "hello@zorscraft.id",
        "availableLanguage": ["en", "id"]
      }
    }
  `}
        </script>
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org", 
      "@type": "WebSite",
      "url": "https://zorscraft.id/", 
      "hasPart": [
        {
          "@type": "SiteNavigationElement",
          "name": "Home",
          "url": "https://zorscraft.id/"
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Services",
          "url": "https://zorscraft.id/services"
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Client Stories",
          "url": "https://zorscraft.id/client-stories"
        },
         {
          "@type": "SiteNavigationElement",
          "name": "About",
          "url": "https://zorscraft.id/about"
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Contact",
          "url": "https://zorscraft.id/contact"
        }
      ]
    }
  `}
        </script>
        <Header />
        <main className="w-full">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
