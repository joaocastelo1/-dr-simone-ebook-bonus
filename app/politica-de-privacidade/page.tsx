import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como as informações compartilhadas neste site são tratadas e quais são os seus direitos.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

const sections = [
  {
    title: "Compromisso com a sua privacidade",
    content:
      "Este site foi criado para apresentar o trabalho da Dra. Simone Sousa Pereira e disponibilizar um e-book gratuito. A sua privacidade é tratada com cuidado e respeito.",
  },
  {
    title: "Informações que você compartilha",
    content:
      "Este site não possui formulários de cadastro. Ao entrar em contato por WhatsApp, Instagram ou e-mail, você pode compartilhar voluntariamente dados como nome, telefone, endereço de e-mail e o conteúdo da sua mensagem.",
  },
  {
    title: "Como as informações são utilizadas",
    content:
      "As informações compartilhadas são utilizadas exclusivamente para responder à sua solicitação, fornecer informações sobre o atendimento e manter a comunicação que você iniciou.",
  },
  {
    title: "Compartilhamento de dados",
    content:
      "As informações não são vendidas, alugadas ou compartilhadas com terceiros para fins de marketing. O compartilhamento pode ocorrer apenas quando exigido por lei ou mediante o seu consentimento.",
  },
  {
    title: "Cookies e tecnologias de medição",
    content:
      "Este site não utiliza cookies de rastreamento próprios. Caso ferramentas de análise sejam adicionadas no futuro, esta política será atualizada para refletir a mudança.",
  },
  {
    title: "Segurança",
    content:
      "São adotadas medidas razoáveis para proteger as informações compartilhadas. Ainda assim, nenhum ambiente digital é totalmente imune a riscos, por isso recomendamos atenção ao compartilhar dados pessoais.",
  },
  {
    title: "Seus direitos",
    content:
      "Você pode solicitar acesso, correção ou exclusão das informações compartilhadas, conforme a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018). Para exercer esses direitos, utilize os canais de contato disponíveis na página inicial.",
  },
  {
    title: "Links externos",
    content:
      "O site pode direcionar para plataformas externas, como WhatsApp e Instagram. O uso dessas plataformas é regido pelas políticas de privacidade de cada serviço.",
  },
  {
    title: "Atualizações desta política",
    content:
      "Esta política pode ser atualizada para acompanhar mudanças no site ou na legislação. A versão mais recente estará sempre disponível nesta página.",
  },
  {
    title: "Contato",
    content:
      "Em caso de dúvidas sobre esta política, entre em contato pelos canais indicados na seção de contato da página inicial.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden pb-24 pt-32 sm:pt-36 lg:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-[28rem] rounded-full bg-salmon-soft/40 blur-3xl"
      />

      <div className="container-page relative z-10 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted transition hover:text-cocoa"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar ao início
        </Link>

        <div className="mt-8 flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-full bg-salmon-soft text-cocoa">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </span>
          <p className="eyebrow">Privacidade</p>
        </div>

        <h1 className="mt-6 text-balance font-serif text-[clamp(2.3rem,5vw,3.7rem)] leading-[1.05] text-cocoa">
          Política de Privacidade
        </h1>

        <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">
          Última atualização: novembro de 2026
        </p>

        <p className="mt-8 text-[0.98rem] leading-8 text-muted">
          A privacidade de quem visita este site é importante. Esta política
          explica, de forma simples, como as informações compartilhadas são
          tratadas.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="flex items-baseline gap-3 font-serif text-[1.45rem] leading-tight text-cocoa">
                <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-rose-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              <p className="mt-3 text-[0.92rem] leading-7 text-muted">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-line/80 bg-sand/60 p-6">
          <p className="text-[0.8rem] leading-6 text-muted">
            {siteConfig.name} — {siteConfig.credentials}. Este site tem caráter
            informativo e não substitui avaliação ou acompanhamento
            individualizado.
          </p>
        </div>
      </div>
    </div>
  );
}
