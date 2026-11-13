import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Welcome() {
  return (
    <section className="grain relative overflow-hidden bg-salmon py-24 sm:py-28 lg:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 size-[24rem] rounded-full border border-white/25" />
        <div className="absolute -bottom-32 -right-20 size-[30rem] rounded-full border border-white/20" />
        <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/15 blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="mx-auto grid size-14 place-items-center rounded-full border border-cocoa/15 bg-cream/30 text-cocoa">
              <Quote className="size-6" aria-hidden="true" />
            </span>
          </Reveal>

          <Reveal delay={80}>
            <blockquote className="mt-8 text-balance font-serif text-[clamp(1.85rem,4.2vw,3.7rem)] leading-[1.14] tracking-[-0.025em] text-cocoa">
              Cada história é única. Compreender a própria história pode ser o
              início de{" "}
              <span className="italic text-cream">novas possibilidades.</span>
            </blockquote>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-xl text-[0.94rem] leading-7 text-cocoa/70 sm:text-[1.02rem]">
              Um espaço de escuta para acolher o que você está vivendo e
              construir novos caminhos com mais consciência.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <a
              href="#contato"
              className="btn btn-primary mt-9 bg-cream text-cocoa shadow-[0_18px_40px_-22px_rgba(75,53,46,0.55)] hover:bg-white"
            >
              Entre em contato
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-8 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-cocoa/50">
              Dra. Simone Sousa Pereira
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
