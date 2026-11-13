"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    const frame = window.requestAnimationFrame(onScroll);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Voltar ao início"
      tabIndex={visible ? 0 : -1}
      className={`group fixed right-5 z-40 grid size-12 place-items-center rounded-full border border-cocoa/10 bg-white/90 text-cocoa shadow-soft backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:bg-cocoa hover:text-cream sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      style={{
        bottom: "calc(5.5rem + env(safe-area-inset-bottom))",
      }}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-3.5 py-2 text-[0.65rem] font-semibold tracking-wide text-cream opacity-0 shadow-soft transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
        Voltar ao topo
      </span>
    </button>
  );
}
