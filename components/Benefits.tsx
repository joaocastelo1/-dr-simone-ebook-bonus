import { Compass, Ear, Lightbulb, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const benefits = [
  {
    icon: Compass,
    title: "Autoconhecimento",
    description:
      "Compreender melhor a própria história, os sentimentos e os comportamentos que acompanham a vida.",
  },
  {
    icon: Lightbulb,
    title: "Reflexão",
    description:
      "Desenvolver novas perspectivas sobre experiências, escolhas e relações.",
  },
  {
    icon: Ear,
    title: "Escuta",
    description:
      "Valorizar um espaço de acolhimento e reflexão sobre questões pessoais.",
  },
];

export function Benefits() {
  return (
    <section
      id="psicanalise"
      className="relative overflow-hidden bg-sand/55 py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-16 size-[26rem] rounded-full bg-salmon-soft/50 blur-3xl"
      />

      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-rose" aria-hidden="true" />
              Por que conhecer a psicanálise?
            </p>
          </Reveal>

          <Reveal delay={70}>
            <h2 className="mt-6 max-w-md text-balance font-serif text-[clamp(2.15rem,3.7vw,3.4rem)] leading-[1.07] text-cocoa">
              Uma oportunidade de{" "}
              <span className="italic text-rose-deep">olhar para dentro.</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-md text-[0.96rem] leading-7 text-muted sm:text-[1.01rem] sm:leading-8">
              A psicanálise é um convite à escuta e à reflexão sobre a
              experiência humana. Não se trata de encontrar respostas prontas,
              mas de abrir espaço para compreender o que se passa em você.
            </p>
          </Reveal>

          <Reveal delay={210}>
            <div className="relative mt-10 hidden max-w-sm overflow-hidden rounded-3xl border border-line/80 bg-cream/80 p-6 shadow-soft lg:block">
              <Quote className="size-6 text-rose/70" aria-hidden="true" />
              <p className="mt-3 font-serif text-[1.3rem] leading-snug text-cocoa">
                Um espaço para pausar, escutar e compreender.
              </p>
              <span
                aria-hidden="true"
                className="absolute -bottom-10 -right-8 size-28 rounded-full bg-salmon-soft/60 blur-2xl"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:pt-2">
          <div className="space-y-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal key={benefit.title} delay={index * 90}>
                  <article className="group relative flex gap-5 rounded-[1.6rem] border border-transparent px-4 py-6 transition-all duration-500 hover:border-line/80 hover:bg-white hover:shadow-soft sm:gap-7 sm:px-6 sm:py-7">
                    <div className="flex flex-col items-center gap-3">
                      <span className="font-serif text-[0.8rem] text-rose-deep/70">
                        0{index + 1}
                      </span>
                      <span className="w-px flex-1 bg-line transition-colors duration-500 group-hover:bg-rose/30" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-serif text-[1.45rem] leading-tight text-cocoa sm:text-[1.65rem]">
                          {benefit.title}
                        </h3>
                        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-cream text-cocoa shadow-[0_10px_30px_-20px_rgba(75,53,46,0.5)] transition-all duration-500 group-hover:-rotate-3 group-hover:bg-salmon-soft">
                          <Icon className="size-[1.15rem]" aria-hidden="true" />
                        </span>
                      </div>
                      <p className="mt-2.5 max-w-lg text-[0.86rem] leading-6 text-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={300}>
            <p className="mt-8 rounded-2xl border border-line/70 bg-cream/60 px-5 py-4 text-[0.72rem] leading-relaxed text-muted">
              Cada processo é singular. Este conteúdo tem caráter informativo e
              não substitui avaliação ou acompanhamento individualizado.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
