import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Quote,
} from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { Reveal } from "@/components/Reveal";
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

type Channel = {
  key: string;
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  primary?: boolean;
};

const channels: Channel[] = [];

if (hasWhatsApp) {
  channels.push({
    key: "whatsapp",
    label: "WhatsApp",
    value: siteConfig.contact.whatsappDisplay || "Conversar pelo WhatsApp",
    href: whatsappHref,
    icon: <WhatsAppIcon className="size-5" />,
    external: true,
    primary: true,
  });
}

if (hasInstagram) {
  channels.push({
    key: "instagram",
    label: "Instagram",
    value: instagramDisplay,
    href: instagramHref,
    icon: <InstagramIcon className="size-5" />,
    external: true,
  });
}

if (hasEmail) {
  channels.push({
    key: "email",
    label: "E-mail",
    value: siteConfig.contact.email,
    href: emailHref,
    icon: <Mail className="size-5" aria-hidden="true" />,
  });
}

export function Contact() {
  const hasServiceInfo = Boolean(
    siteConfig.contact.location || siteConfig.contact.hours,
  );

  return (
    <section id="contato" className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 bottom-0 size-[30rem] rounded-full bg-salmon-soft/40 blur-3xl"
      />

      <div className="container-page grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-rose" aria-hidden="true" />
              Contato
            </p>
          </Reveal>

          <Reveal delay={70}>
            <h2 className="mt-6 max-w-md text-balance font-serif text-[clamp(2.15rem,3.7vw,3.5rem)] leading-[1.06] text-cocoa">
              Vamos <span className="italic text-rose-deep">conversar?</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-lg text-[0.96rem] leading-7 text-muted sm:text-[1.01rem] sm:leading-8">
              Se você deseja conhecer melhor o trabalho ou obter informações
              sobre o atendimento, escolha o canal que preferir. Será um prazer
              receber sua mensagem.
            </p>
          </Reveal>

          <Reveal delay={210}>
            {hasServiceInfo ? (
              <div className="mt-9 max-w-md rounded-3xl border border-line/80 bg-white p-6 shadow-soft">
                <h3 className="font-serif text-xl text-cocoa">Atendimento</h3>
                <ul className="mt-4 space-y-3 text-[0.84rem] leading-relaxed text-muted">
                  {siteConfig.contact.location && (
                    <li className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 size-4 shrink-0 text-rose-deep"
                        aria-hidden="true"
                      />
                      {siteConfig.contact.location}
                    </li>
                  )}
                  {siteConfig.contact.hours && (
                    <li className="flex items-start gap-3">
                      <Clock
                        className="mt-0.5 size-4 shrink-0 text-rose-deep"
                        aria-hidden="true"
                      />
                      {siteConfig.contact.hours}
                    </li>
                  )}
                </ul>
              </div>
            ) : (
              <div className="relative mt-9 max-w-md overflow-hidden rounded-3xl border border-line/80 bg-sand/60 p-6">
                <Quote className="size-6 text-rose/70" aria-hidden="true" />
                <p className="mt-3 font-serif text-[1.25rem] leading-snug text-cocoa">
                  A escuta começa com um primeiro contato.
                </p>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-muted">
                  Escolha o canal que fizer mais sentido para você.
                </p>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-10 -right-8 size-32 rounded-full bg-salmon-soft/60 blur-2xl"
                />
              </div>
            )}
          </Reveal>

          <Reveal delay={280}>
            <p className="mt-8 max-w-md text-[0.7rem] leading-relaxed text-muted/80">
              Este site não realiza atendimento de urgência. Em situações de
              crise ou emergência, procure o serviço de saúde mais próximo ou
              ligue para o CVV — 188.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:pt-4">
          {channels.length > 0 ? (
            <div className="space-y-3">
              {channels.map((channel) => (
                <a
                  key={channel.key}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-4 rounded-[1.6rem] border p-4 transition-all duration-500 hover:-translate-y-1 sm:p-5 ${
                    channel.primary
                      ? "border-cocoa bg-cocoa text-cream shadow-[0_25px_60px_-35px_rgba(75,53,46,0.9)] hover:bg-ink"
                      : "border-line/80 bg-white text-cocoa hover:border-rose/30 hover:bg-white hover:shadow-soft"
                  }`}
                >
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-3 ${
                      channel.primary
                        ? "bg-salmon text-cocoa"
                        : "bg-sand text-cocoa group-hover:bg-salmon-soft"
                    }`}
                  >
                    {channel.icon}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-[0.56rem] font-semibold uppercase tracking-[0.2em] ${
                        channel.primary ? "text-cream/50" : "text-muted"
                      }`}
                    >
                      {channel.label}
                    </span>
                    <span
                      className={`mt-1 block truncate text-[0.94rem] font-semibold ${
                        channel.primary ? "text-cream" : "text-cocoa"
                      }`}
                    >
                      {channel.value}
                    </span>
                  </span>

                  <ArrowUpRight
                    className={`size-4 shrink-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      channel.primary ? "text-salmon" : "text-rose-deep"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              ))}

              {hasWhatsApp && (
                <div className="rounded-2xl border border-line/70 bg-sand/50 p-4">
                  <p className="text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-muted">
                    Mensagem sugerida
                  </p>
                  <p className="mt-2 text-[0.8rem] italic leading-relaxed text-muted">
                    &ldquo;{siteConfig.contact.whatsappMessage}&rdquo;
                  </p>
                </div>
              )}

              <a
                href="#ebook"
                className="group flex items-center gap-4 rounded-[1.6rem] border border-line/80 bg-sand/50 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-rose/30 hover:bg-white hover:shadow-soft sm:p-5"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-cocoa transition-transform duration-500 group-hover:-rotate-3 group-hover:bg-salmon-soft">
                  <BookOpen className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-muted">
                    Bônus para pacientes
                  </span>
                  <span className="mt-1 block truncate text-[0.94rem] font-semibold text-cocoa">
                    {siteConfig.ebook.title}
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-rose-deep transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          ) : (
            <div className="flex h-full min-h-[22rem] flex-col items-center justify-center rounded-[2rem] border border-dashed border-line bg-sand/40 p-8 text-center">
              <span className="grid size-14 place-items-center rounded-full bg-sand text-cocoa">
                <MessageCircle className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl text-cocoa">
                Canais de contato em breve
              </h3>
              <p className="mt-2 max-w-xs text-[0.82rem] leading-relaxed text-muted">
                Estamos preparando este espaço para que você possa falar com a
                Dra. Simone. Os canais de atendimento serão disponibilizados em
                breve.
              </p>
              <a
                href="#ebook"
                className="btn btn-secondary mt-6 px-4 py-2.5 text-xs"
              >
                Acesse o e-book gratuito
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
