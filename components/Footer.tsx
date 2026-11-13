import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  emailHref,
  hasEmail,
  hasInstagram,
  hasWhatsApp,
  instagramDisplay,
  instagramHref,
  siteConfig,
  whatsappHref,
} from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();
  const navigationLinks = siteConfig.footerLinks.filter(
    (link) => link.href.startsWith("#"),
  );

  return (
    <footer className="grain relative overflow-hidden bg-cocoa text-cream">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 size-[32rem] rounded-full bg-rose/15 blur-3xl" />
        <div className="absolute -bottom-52 -left-32 size-[30rem] rounded-full bg-salmon/10 blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr] lg:gap-10 lg:py-20">
          <div>
            <Link
              href="#inicio"
              className="group inline-flex items-center gap-3"
              aria-label={`${siteConfig.name} — ir para o início`}
            >
              <span className="grid size-12 place-items-center rounded-full border border-cream/15 bg-cream/10 font-serif text-xl text-cream transition duration-500 group-hover:rotate-6 group-hover:bg-salmon group-hover:text-cocoa">
                {siteConfig.monogram}
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-[1.15rem] text-cream">
                  {siteConfig.name}
                </span>
                <span className="mt-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-cream/45">
                  {siteConfig.credentials}
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-[0.82rem] leading-6 text-cream/55">
              Conhecimento, escuta e acolhimento em uma jornada de
              autoconhecimento.
            </p>

            <a
              href="#contato"
              className="mt-6 inline-flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-salmon transition hover:text-salmon-soft"
            >
              Vamos conversar
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>

          <div>
            <h2 className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-cream/40">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.84rem] text-cream/70 transition hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-cream/40">
              Informações
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="text-[0.84rem] text-cream/70 transition hover:text-cream"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <a
                  href="#ebook"
                  className="text-[0.84rem] text-cream/70 transition hover:text-cream"
                >
                  E-book gratuito
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-cream/40">
              Contato
            </h2>

            <ul className="mt-5 space-y-3">
              {hasWhatsApp && (
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-[0.84rem] text-cream/70 transition hover:text-cream"
                  >
                    <WhatsAppIcon className="size-4 text-salmon" />
                    WhatsApp
                    {siteConfig.contact.whatsappDisplay && (
                      <span className="text-cream/40">
                        {siteConfig.contact.whatsappDisplay}
                      </span>
                    )}
                  </a>
                </li>
              )}

              {hasInstagram && (
                <li>
                  <a
                    href={instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-[0.84rem] text-cream/70 transition hover:text-cream"
                  >
                    <InstagramIcon className="size-4 text-salmon" />
                    {instagramDisplay}
                  </a>
                </li>
              )}

              {hasEmail && (
                <li>
                  <a
                    href={emailHref}
                    className="group inline-flex items-center gap-2.5 text-[0.84rem] text-cream/70 transition hover:text-cream"
                  >
                    <Mail className="size-4 text-salmon" aria-hidden="true" />
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}

              {!hasWhatsApp && !hasInstagram && !hasEmail && (
                <li>
                  <a
                    href="#contato"
                    className="text-[0.84rem] text-cream/70 transition hover:text-cream"
                  >
                    Canais de atendimento
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-cream/10 py-6 text-[0.68rem] leading-relaxed text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="max-w-md sm:text-right">
            Este site tem caráter informativo e não substitui acompanhamento
            individualizado.
          </p>
        </div>
      </div>
    </footer>
  );
}
