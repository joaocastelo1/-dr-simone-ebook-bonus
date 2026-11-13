const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  "https://dra-simone-sousa-pereira.vercel.app"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Dra. Simone Sousa Pereira",
  shortName: "Simone Sousa Pereira",
  monogram: "S",
  credentials: "Mestre e Doutora em Neurociência e Psicanálise",
  role: "Psicanálise e Neurociência",
  description:
    "Conheça o trabalho da Dra. Simone Sousa Pereira, Mestre e Doutora em Neurociência e Psicanálise. Conhecimento, acolhimento e e-book gratuito.",
  url: siteUrl,
  locale: "pt_BR",
  contact: {
    // Número completo com código do país, apenas dígitos.
    whatsappNumber: "559885376364",
    whatsappDisplay: "(98) 8537-6364",
    whatsappMessage:
      "Olá, Dra. Simone! Gostaria de conhecer melhor seu trabalho e obter informações sobre o atendimento.",
    // Informe a URL completa ou apenas o @perfil.
    instagramUrl: "",
    instagramHandle: "",
    email: "",
    // Preencha apenas se essas informações forem divulgadas oficialmente.
    location: "",
    hours: "",
  },
  ebook: {
    title: "Cuidando da sua mente",
    subtitle: "Reflexões e exercícios para o autoconhecimento",
    fileName: "ebook-simone-pereira.pdf",
    path: "/ebooks/ebook-simone-pereira.pdf",
    available: true,
    label: "E-book gratuito — Bônus especial para pacientes",
    note: "Material educativo. Não substitui avaliação ou acompanhamento individualizado.",
    themes: [
      "Relacionamentos",
      "Ansiedade",
      "Autoestima",
      "Saúde mental",
      "Corpo e emoções",
    ],
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Conhecimento", href: "#conhecimento" },
    { label: "E-book gratuito", href: "#ebook" },
    { label: "Contato", href: "#contato" },
  ],
  footerLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Conhecimento", href: "#conhecimento" },
    { label: "E-book gratuito", href: "#ebook" },
    { label: "Contato", href: "#contato" },
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  ],
};

const whatsappDigits = siteConfig.contact.whatsappNumber.replace(/\D/g, "");

export const hasWhatsApp = whatsappDigits.length >= 10;

export const whatsappHref = hasWhatsApp
  ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
      siteConfig.contact.whatsappMessage,
    )}`
  : "#contato";

const instagramHandle = siteConfig.contact.instagramHandle
  .replace(/^@/, "")
  .trim();

export const instagramHref =
  siteConfig.contact.instagramUrl.trim() ||
  (instagramHandle ? `https://instagram.com/${instagramHandle}` : "");

export const hasInstagram = Boolean(instagramHref);

export const instagramDisplay = instagramHandle
  ? `@${instagramHandle}`
  : instagramHref.replace(/^https?:\/\/(www\.)?instagram\.com\/?/, "@");

export const hasEmail = Boolean(siteConfig.contact.email.trim());

export const emailHref = `mailto:${siteConfig.contact.email.trim()}`;

export const hasContactInfo = Boolean(
  hasWhatsApp ||
    hasInstagram ||
    hasEmail ||
    siteConfig.contact.location ||
    siteConfig.contact.hours,
);
