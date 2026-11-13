import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InstallApp } from "@/components/InstallApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const seoTitle = "Dra. Simone Sousa Pereira | Neurociência e Psicanálise";
const seoDescription =
  "Conheça o trabalho da Dra. Simone Sousa Pereira, Mestre e Doutora em Neurociência e Psicanálise. Conhecimento, acolhimento e e-book gratuito.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoTitle,
    template: "%s | Dra. Simone Sousa Pereira",
  },
  description: seoDescription,
  keywords: [
    "Dra. Simone Sousa Pereira",
    "psicanálise",
    "neurociência",
    "psicanalista",
    "autoconhecimento",
    "emoções",
    "ansiedade",
    "depressão",
    "relacionamentos",
    "saúde mental",
    "corpo e emoções",
    "e-book gratuito",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "health",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.shortName,
    statusBarStyle: "default",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Simone Sousa Pereira — Neurociência e Psicanálise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/images/og-image.jpg"],
  },
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
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-dvh bg-cream text-ink antialiased">
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>

        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-cocoa focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Pular para o conteúdo
        </a>

        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <InstallApp />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
