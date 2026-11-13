import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  Download,
  GraduationCap,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-44 top-8 size-[34rem] rounded-full bg-salmon-soft/55 blur-3xl" />
        <div className="absolute -right-40 top-44 size-[30rem] rounded-full bg-sand-deep/70 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-cream" />
        <div className="absolute left-1/2 top-24 hidden h-[32rem] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-line to-transparent lg:block" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16 xl:gap-24">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-rose" aria-hidden="true" />
              Psicanálise &amp; Neurociência
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-serif text-[clamp(2.45rem,4.15vw,3.65rem)] leading-[1.04] tracking-[-0.035em] text-cocoa">
              Conheça a si mesmo,{" "}
              <span className="italic text-rose-deep">compreenda suas emoções</span>{" "}
              e transforme sua relação com a vida.
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-7 text-muted sm:text-[1.05rem] sm:leading-8">
              Um espaço de acolhimento, escuta e conhecimento para compreender
              os processos emocionais e descobrir novos caminhos para o
              autoconhecimento.
            </p>
          </Reveal>

          <Reveal delay={210}>
            <p className="mt-5 inline-flex items-start gap-2.5 font-serif text-[1.02rem] italic text-rose-deep sm:text-[1.12rem]">
              <Sparkles
                className="mt-1 size-4 shrink-0 text-rose"
                aria-hidden="true"
              />
              Conhecimento e acolhimento em uma jornada de autoconhecimento.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="#sobre" className="btn btn-primary">
                Conheça meu trabalho
                <ArrowDownRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="#ebook" className="btn btn-secondary">
                Acesse seu e-book gratuito
                <Download className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-10 flex items-center gap-4 border-t border-line pt-6">
              <span className="h-11 w-px shrink-0 bg-rose/40" aria-hidden="true" />
              <div>
                <p className="font-serif text-lg text-cocoa">{siteConfig.name}</p>
                <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted sm:text-[0.68rem]">
                  {siteConfig.credentials}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="relative mx-auto w-full max-w-[25rem] sm:max-w-[29rem] lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="arch absolute -inset-3 bg-salmon-soft/70 sm:-inset-4"
            />
            <div
              aria-hidden="true"
              className="arch absolute -inset-6 border border-rose/20 sm:-inset-8"
            />

            <div className="arch relative aspect-[4/5] overflow-hidden border border-white/70 bg-sand shadow-card">
              <Image
                src="/images/dra-simone.jpg"
                alt="Retrato profissional da Dra. Simone Sousa Pereira"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-[50%_17%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-cocoa/25 via-transparent to-transparent"
              />
            </div>

            <div className="animate-float absolute -bottom-5 left-1/2 flex w-[88%] -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-3.5 shadow-soft backdrop-blur-md sm:-left-6 sm:bottom-8 sm:w-auto sm:translate-x-0 sm:max-w-[17rem] sm:p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-salmon-soft text-cocoa">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-serif text-[0.98rem] leading-tight text-cocoa">
                  Mestre &amp; Doutora
                </span>
                <span className="mt-0.5 block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-muted">
                  Neurociência e Psicanálise
                </span>
              </span>
            </div>

            <div className="absolute -right-2 top-6 hidden items-center gap-2 rounded-full border border-white/70 bg-cocoa/90 px-3.5 py-2 text-cream shadow-soft backdrop-blur sm:flex lg:-right-5">
              <HeartHandshake className="size-3.5 text-salmon" aria-hidden="true" />
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em]">
                Escuta &amp; acolhimento
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
