import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { hasWhatsApp, whatsappHref } from "@/lib/config";

export function WhatsAppButton() {
  const label = hasWhatsApp ? "Fale pelo WhatsApp" : "Ir para contato";

  return (
    <a
      href={whatsappHref}
      target={hasWhatsApp ? "_blank" : undefined}
      rel={hasWhatsApp ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="group fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-cocoa text-cream shadow-[0_18px_45px_-18px_rgba(75,53,46,0.85)] transition-all duration-500 hover:-translate-y-1 hover:bg-ink sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-salmon/50 animate-pulse-ring"
      />
      <WhatsAppIcon className="size-6" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-3.5 py-2 text-[0.65rem] font-semibold tracking-wide text-cream opacity-0 shadow-soft transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
        {label}
      </span>
    </a>
  );
}
