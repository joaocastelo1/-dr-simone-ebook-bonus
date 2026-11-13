"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig, whatsappHref } from "@/lib/config";

const sectionIds = siteConfig.nav.map((item) => item.href.replace("#", ""));

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      {
        rootMargin: "-42% 0px -52% 0px",
        threshold: [0, 0.15, 0.4],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-line/80 bg-cream/90 shadow-[0_10px_40px_-30px_rgba(75,53,46,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6 lg:h-24">
        <Link
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name} — ir para o início`}
          onClick={() => setOpen(false)}
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-cocoa/10 bg-salmon-soft font-serif text-xl text-cocoa shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition duration-500 group-hover:rotate-6 group-hover:bg-salmon">
            {siteConfig.monogram}
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-serif text-[1.02rem] tracking-[-0.02em] text-cocoa sm:text-[1.1rem]">
              Simone Sousa Pereira
            </span>
            <span className="mt-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-muted sm:text-[0.6rem]">
              Neurociência &amp; Psicanálise
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {siteConfig.nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`link-underline text-[0.8rem] font-semibold tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-cocoa"
                    : "text-muted hover:text-cocoa"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href={whatsappHref}
          target={whatsappHref.startsWith("http") ? "_blank" : undefined}
          rel={whatsappHref.startsWith("http") ? "noopener noreferrer" : undefined}
          className="btn btn-primary hidden lg:inline-flex"
        >
          Agendar conversa
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid size-11 place-items-center rounded-full border border-cocoa/10 bg-white/60 text-cocoa transition hover:bg-white lg:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`overflow-hidden border-t border-line/70 bg-cream/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open
            ? "max-h-[34rem] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Navegação mobile"
          className="container-page flex flex-col gap-1 py-6"
        >
          {siteConfig.nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${100 + index * 55}ms` : "0ms",
              }}
              className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[0.95rem] font-semibold text-cocoa transition-all duration-500 hover:bg-sand ${
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              {item.label}
              <ArrowUpRight className="size-4 text-rose" aria-hidden="true" />
            </a>
          ))}

          <a
            href={whatsappHref}
            target={whatsappHref.startsWith("http") ? "_blank" : undefined}
            rel={whatsappHref.startsWith("http") ? "noopener noreferrer" : undefined}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            style={{
              transitionDelay: open ? `${100 + siteConfig.nav.length * 55}ms` : "0ms",
            }}
            className={`btn btn-primary mt-3 w-full transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            Agendar conversa
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
