import Image from "next/image";
import { Ear, GraduationCap, Quote, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/config";

const pillars = [
  {
    icon: GraduationCap,
    title: "Formação acadêmica",
    description:
      "Mestrado e doutorado em Neurociência e Psicanálise, unindo rigor de estudo e sensibilidade humana.",
  },
  {
    icon: Ear,
    title: "Escuta acolhedora",
    description:
      "Um espaço de atenção, respeito e valorização da singularidade de cada história.",
  },
  {
    icon: Sparkles,
    title: "Olhar integrado",
    description:
      "Neurociência e psicanálise aproximadas em uma perspectiva reflexiva sobre a mente e as emoções.",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-sand/60 py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-[28rem] rounded-full bg-salmon-soft/50 blur-3xl"
      />

      <div className="container-page grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -left-5 -top-5 size-36 rounded-full border border-rose/20"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-4 size-48 rounded-full bg-salmon-soft/70 blur-2xl"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/70 bg-sand shadow-card">
              <Image
                src="/images/dra-simone-2.jpeg"
                alt="Dra. Simone Sousa Pereira em seu espaço de atendimento"
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover object-[50%_22%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-cocoa/20 via-transparent to-transparent"
              />
            </div>

            <div className="relative z-10 -mt-16 mr-0 ml-auto w-[88%] max-w-xs rounded-3xl border border-white/80 bg-cream/95 p-6 shadow-soft backdrop-blur-md sm:mr-2">
              <Quote className="size-5 text-rose" aria-hidden="true" />
              <p className="mt-3 font-serif text-[1.15rem] leading-snug text-cocoa">
                Compreender a si mesmo é um passo importante.
              </p>
              <p className="mt-2 text-[0.72rem] leading-relaxed text-muted">
                Uma relação mais consciente com a própria história e com a vida.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-rose" aria-hidden="true" />
              Sobre
            </p>
          </Reveal>

          <Reveal delay={70}>
            <h2 className="mt-6 max-w-xl text-balance font-serif text-[clamp(2.1rem,3.6vw,3.35rem)] leading-[1.08] text-cocoa">
              Conheça a Dra. Simone Sousa Pereira
            </h2>
          </Reveal>

          <Reveal delay={130}>
            <div className="mt-7 max-w-2xl space-y-5 text-[0.96rem] leading-7 text-muted sm:text-[1.01rem] sm:leading-8">
              <p>
                A Dra. Simone Sousa Pereira é uma profissional com formação de
                Mestre e Doutora em Neurociência e Psicanálise, dedicada ao
                estudo da mente humana, dos processos emocionais e da
                compreensão do comportamento.
              </p>
              <p>
                Seu trabalho está fundamentado no conhecimento, na escuta e na
                valorização da singularidade de cada pessoa.
              </p>
              <p>
                A partir de uma perspectiva que integra conhecimentos da
                Neurociência e da Psicanálise, busca proporcionar reflexões
                sobre o funcionamento da mente, as emoções, os conflitos
                internos e os caminhos para o autoconhecimento.
              </p>
              <p>
                Acredita que compreender a si mesmo é um passo importante para
                desenvolver uma relação mais consciente com a própria história
                e com a vida.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <Reveal key={pillar.title} delay={180 + index * 70}>
                  <article className="group h-full rounded-3xl border border-line/80 bg-white p-5 shadow-[0_16px_50px_-42px_rgba(75,53,46,0.4)] transition-all duration-500 hover:-translate-y-1 hover:border-rose/30 hover:bg-white hover:shadow-soft">
                    <span className="grid size-10 place-items-center rounded-2xl bg-salmon-soft/80 text-cocoa transition-colors duration-500 group-hover:bg-salmon">
                      <Icon className="size-[1.15rem]" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-serif text-[1.05rem] leading-tight text-cocoa">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-[0.76rem] leading-relaxed text-muted">
                      {pillar.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={380}>
            <p className="mt-8 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
              <span className="h-px w-8 bg-rose/50" aria-hidden="true" />
              {siteConfig.credentials}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
