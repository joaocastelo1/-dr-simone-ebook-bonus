import {
  Activity,
  Brain,
  Compass,
  HeartHandshake,
  MoonStar,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

type KnowledgeItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const items: KnowledgeItem[] = [
  {
    icon: Compass,
    title: "Autoconhecimento",
    description:
      "Olhar para a própria história, reconhecer padrões e ampliar a compreensão sobre si.",
  },
  {
    icon: HeartHandshake,
    title: "Compreensão das emoções",
    description:
      "Refletir sobre o que se sente, como as emoções se manifestam e o que elas comunicam.",
  },
  {
    icon: Users,
    title: "Relações interpessoais",
    description:
      "Pensar sobre vínculos, limites, comunicação e a forma como nos relacionamos com o outro.",
  },
  {
    icon: Brain,
    title: "Comportamento humano",
    description:
      "Compreender experiências e comportamentos que moldam a maneira como agimos e reagimos.",
  },
  {
    icon: MoonStar,
    title: "Processos inconscientes",
    description:
      "A escuta de conteúdos que muitas vezes escapam à consciência e influenciam a experiência cotidiana.",
  },
  {
    icon: Activity,
    title: "Neurociência e funcionamento cerebral",
    description:
      "Conhecimentos sobre o cérebro e os processos emocionais que participam da nossa experiência.",
  },
];

export function Knowledge() {
  return (
    <section id="conhecimento" className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/3 size-[30rem] rounded-full bg-salmon-soft/35 blur-3xl"
      />

      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-rose" aria-hidden="true" />
                Conhecimento
              </p>
            </Reveal>

            <Reveal delay={70}>
              <h2 className="mt-6 max-w-2xl text-balance font-serif text-[clamp(2.1rem,3.8vw,3.5rem)] leading-[1.07] text-cocoa">
                Entender a mente é também aprender a{" "}
                <span className="italic text-rose-deep">compreender a si mesmo.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <p className="max-w-md text-[0.95rem] leading-7 text-muted lg:pb-2">
              Um convite para ampliar o repertório sobre o que acontece dentro de
              você — sem respostas prontas, com espaço para novas perguntas.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 60} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line/80 bg-white p-6 shadow-[0_18px_60px_-48px_rgba(75,53,46,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-rose/30 hover:bg-white hover:shadow-lift sm:p-7">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-1 top-1 font-serif text-[4.5rem] leading-none text-cocoa/[0.045] transition-colors duration-500 group-hover:text-rose/10"
                  >
                    0{index + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <span className="grid size-12 place-items-center rounded-2xl bg-sand text-cocoa transition-all duration-500 group-hover:-rotate-3 group-hover:bg-salmon-soft">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>

                  <h3 className="mt-6 font-serif text-[1.22rem] leading-tight text-cocoa">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.83rem] leading-6 text-muted">
                    {item.description}
                  </p>

                  <span className="mt-auto block pt-6">
                    <span className="block h-px w-10 bg-rose/40 transition-all duration-500 group-hover:w-16 group-hover:bg-rose" />
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 max-w-3xl rounded-2xl border border-line/70 bg-sand/50 px-5 py-4 text-[0.72rem] leading-relaxed text-muted">
            Os temas apresentados têm caráter educativo e reflexivo. Não
            constituem promessa de cura ou resultado e não substituem
            acompanhamento individualizado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
