import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { site } from "@/config/copy";
import { counties } from "@/config/counties";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SlimFooter from "@/components/SlimFooter";
import ChromeSwitch from "@/components/ChromeSwitch";
import Analytics from "@/components/Analytics";
import LeadModal from "@/components/LeadModal";
import OfferStickyCta from "@/components/OfferStickyCta";
import ConsentBanner from "@/components/ConsentBanner";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const defaultTitle =
  "Dublin Growth Digital | Lead Generation & Digital Marketing Agency Ireland";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: defaultTitle,
    template: "%s | Dublin Growth Digital",
  },
  description: site.metaDescription,
  applicationName: site.name,
  keywords: [
    "digital marketing agency Ireland",
    "lead generation Ireland",
    "estate agent marketing Ireland",
    "vendor leads estate agents",
    "solar lead generation Ireland",
    "roofing leads Ireland",
    "Meta ads agency Ireland",
    "Google Ads agency Dublin",
    "SEO agency Dublin",
    "web design Dublin",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: site.metaDescription,
    url: site.domain,
    siteName: site.name,
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.metaDescription,
  },
  other: {
    "geo.region": "IE-D",
    "geo.placename": "Dublin",
  },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

const organisation = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${site.domain}/#organisation`,
  name: site.name,
  alternateName: "DGD",
  legalName: "Dublin Growth Digital",
  description: site.metaDescription,
  url: site.domain,
  logo: `${site.domain}/logo.svg`,
  image: `${site.domain}/opengraph-image.png`,
  telephone: site.phone,
  email: site.email,
  priceRange: "€1,500 - €2,500 per month",
  founder: { "@type": "Person", name: "Oscar Markham" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dublin",
    addressRegion: "County Dublin",
    addressCountry: "IE",
  },
  areaServed: [
    { "@type": "Country", name: "Ireland" },
    ...counties.map((c) => ({ "@type": "AdministrativeArea", name: `County ${c.name}` })),
  ],
  knowsAbout: [
    "Lead generation",
    "Meta advertising",
    "Google Ads",
    "Search engine optimisation",
    "Web design",
    "Estate agent marketing",
    "Solar installer marketing",
    "Trades marketing",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    email: site.email,
    contactType: "sales",
    areaServed: "IE",
    availableLanguage: "en",
  },
  sameAs: [site.instagram, site.facebook],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      "Lead generation",
      "Meta ads management",
      "Google Ads management",
      "SEO",
      "Web design",
      "Social media management",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.domain}/#website`,
  name: site.name,
  url: site.domain,
  inLanguage: "en-IE",
  publisher: { "@id": `${site.domain}/#organisation` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IE" className={archivo.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <Nav />
        {children}
        <ChromeSwitch slimOn={["/offer"]} slim={<SlimFooter />}>
          <Footer />
        </ChromeSwitch>
        <LeadModal />
        <OfferStickyCta />
        <Analytics />
        <ConsentBanner />
      </body>
    </html>
  );
}
