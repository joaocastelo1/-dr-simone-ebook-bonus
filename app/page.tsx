import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { EbookSection } from "@/components/EbookSection";
import { Hero } from "@/components/Hero";
import { Knowledge } from "@/components/Knowledge";
import { Welcome } from "@/components/Welcome";
import { instagramHref, siteConfig } from "@/lib/config";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "pt-BR",
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        jobTitle: "Psicanalista",
        description: siteConfig.description,
        url: siteConfig.url,
        knowsAbout: [
          "Neurociência",
          "Psicanálise",
          "Autoconhecimento",
          "Emoções",
          "Comportamento humano",
          "Processos inconscientes",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Mestrado",
            about: "Neurociência e Psicanálise",
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Doutorado",
            about: "Neurociência e Psicanálise",
          },
        ],
        sameAs: instagramHref ? [instagramHref] : undefined,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <Knowledge />
      <EbookSection />
      <Benefits />
      <Welcome />
      <Contact />
    </>
  );
}
