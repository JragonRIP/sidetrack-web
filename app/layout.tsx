import type { Metadata } from "next";
import {
  Courier_Prime,
  Lora,
  Oswald,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { RailTicker } from "@/components/RailTicker";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "800"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-label",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const courier = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl = "https://sidetrackpowers.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sidetrack Restaurant & Bar | Powers, Michigan",
    template: "%s | Sidetrack Powers, MI",
  },
  description:
    "Sidetrack Restaurant & Bar: hand-tossed pizza, house-made sauces, and a full bar on US-2 in Powers, Michigan.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sidetrack Restaurant & Bar",
    title: "Sidetrack Restaurant & Bar · Powers, Michigan",
    description:
      "Relaxed dining on US-2: dine-in, takeout, and a full bar in Powers, MI.",
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Sidetrack Restaurant & Bar",
  url: siteUrl,
  telephone: "+1-906-497-5521",
  email: "TheTrax906@gmail.com",
  servesCuisine: ["Pizza", "American", "Italian", "Mexican"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "N15903 Pine Street",
    addressLocality: "Powers",
    addressRegion: "MI",
    postalCode: "49874",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.6867,
    longitude: -87.5289,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "15:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday"],
      opens: "11:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${oswald.variable} ${lora.variable} ${courier.variable} h-full scroll-auto antialiased`}
    >
      <body className="body-grain relative isolate flex min-h-full flex-col bg-[var(--color-bg-deep)] font-body text-[var(--color-text)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollToTop />
        <RailTicker />
        <SiteNav />
        <main className="relative z-[2] flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
