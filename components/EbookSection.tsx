import Image from "next/image";
import { Check, Download, Gift, Sparkles } from "lucide-react";
import { EbookViewer } from "@/components/EbookViewer";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/config";

const highlights = [
  "Leitura direto no navegador",
  "Download gratuito em PDF",
  "Acesso pelo celular, tablet ou computador",
];

export function EbookSection() {
  return (
    <section
      id="ebook"
      className="grain relative overflow-hidden bg-cocoa py-24 text-cream sm:py-28 lg:py-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 size-[34rem] rounded-full bg-rose/25 blur-3xl" />
        <div className="absolute -right-32 bottom-0 size-[30rem] rounded-full bg-salmon/15 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
      </div>

      <div className="container-page relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-salmon/25 bg-salmon/10 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-salmon-soft">
              <Gift className="size-3.5" aria-hidden="true" />
              {siteConfig.ebook.label}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 max-w-xl text-balance font-serif text-[clamp(2.15rem,3.9vw,3.6rem)] leading-[1.06] text-cream">
              Um presente especial para sua jornada de{" "}
              <span className="italic text-salmon">autoconhecimento!</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-[0.96rem] leading-7 text-cream/70 sm:text-[1.02rem] sm:leading-8">
              Preparamos um conteúdo especial para você ampliar seus
              conhecimentos e descobrir novas perspectivas sobre si mesmo.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-salmon/60" aria-hidden="true" />
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cream/55">
                {siteConfig.ebook.title} · {siteConfig.ebook.subtitle}
              </p>
            </div>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-4 flex flex-wrap gap-2">
              {siteConfig.ebook.themes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full border border-cream/10 bg-cream/[0.04] px-3 py-1.5 text-[0.6rem] font-medium tracking-wide text-cream/55"
                >
                  {theme}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={260}>
            <EbookViewer />
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-8 grid gap-2.5 text-[0.8rem] text-cream/70 sm:grid-cols-1">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2.5">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-salmon/15 text-salmon">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={380}>
            <p className="mt-7 max-w-lg border-t border-cream/10 pt-5 text-[0.68rem] leading-relaxed text-cream/45">
              {siteConfig.ebook.note}
            </p>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative mx-auto w-full max-w-[21rem] sm:max-w-[24rem]">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-salmon/20 blur-3xl"
            />

            <div className="book-scene relative">
              <div className="book-3d">
                <div className="book-pages" aria-hidden="true" />
                <div className="book">
                  <Image
                    src="/images/ebook-cover.jpg"
                    alt="Capa do e-book Cuidando da sua mente, da Dra. Simone Sousa Pereira"
                    fill
                    sizes="(max-width: 640px) 80vw, 24rem"
                    className="object-cover"
                  />
                  <div className="book-glare" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-cream/95 px-3.5 py-2 text-cocoa shadow-soft sm:-left-6">
              <Sparkles className="size-3.5 text-rose-deep" aria-hidden="true" />
              <span className="text-[0.58rem] font-bold uppercase tracking-[0.16em]">
                E-book gratuito
              </span>
            </div>

            <div className="absolute -bottom-4 right-0 flex items-center gap-2 rounded-full border border-white/15 bg-ink/80 px-3.5 py-2 text-cream shadow-soft backdrop-blur sm:-right-4">
              <Download className="size-3.5 text-salmon" aria-hidden="true" />
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em]">
                PDF gratuito
              </span>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="font-serif text-[1.05rem] text-cream/90">
              {siteConfig.ebook.title}
            </p>
            <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cream/40">
              {siteConfig.ebook.subtitle}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
