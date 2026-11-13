"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import {
  AlertCircle,
  BookOpen,
  Download,
  ExternalLink,
  Loader2,
  X,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

type ViewerStatus = "idle" | "checking" | "unavailable";

export function EbookViewer() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<ViewerStatus>("idle");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [pdfAvailable, setPdfAvailable] = useState<boolean | null>(() =>
    siteConfig.ebook.available ? null : false,
  );

  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const ebookPath = siteConfig.ebook.path;
  const ebookFileName = siteConfig.ebook.fileName;

  useEffect(() => {
    if (!siteConfig.ebook.available) return;

    let cancelled = false;

    const checkFile = async () => {
      try {
        const response = await fetch(ebookPath, {
          method: "HEAD",
          cache: "no-store",
        });

        if (!cancelled) setPdfAvailable(response.ok);
      } catch {
        if (!cancelled) setPdfAvailable(false);
      }
    };

    checkFile();

    return () => {
      cancelled = true;
    };
  }, [ebookPath]);

  const closeViewer = useCallback(() => {
    setOpen(false);
    setLoading(true);
  }, []);

  const ensureAvailable = async () => {
    if (!siteConfig.ebook.available) {
      setStatus("unavailable");
      setMessage(
        "O e-book está sendo atualizado e estará disponível em breve. Obrigada pela compreensão!",
      );
      return false;
    }

    try {
      const response = await fetch(ebookPath, {
        method: "HEAD",
        cache: "no-store",
      });

      if (!response.ok) throw new Error("PDF indisponível");

      setPdfAvailable(true);
      return true;
    } catch {
      setPdfAvailable(false);
      setStatus("unavailable");
      setMessage(
        "Não foi possível localizar o e-book neste momento. Tente novamente em instantes ou entre em contato pelos canais de atendimento.",
      );
      return false;
    }
  };

  const handleView = async () => {
    setStatus("checking");
    setMessage("");

    const available = await ensureAvailable();

    if (!available) return;

    setStatus("idle");
    setLoading(true);
    setOpen(true);
  };

  const handleDownload = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (pdfAvailable === false) {
      event.preventDefault();
      setStatus("unavailable");
      setMessage(
        "O e-book está sendo atualizado e estará disponível em breve. Obrigada pela compreensão!",
      );
      return;
    }

    if (pdfAvailable === null) {
      const available = await ensureAvailable();
      if (!available) event.preventDefault();
    }
  };

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);

    const getFocusable = () =>
      Array.from(
        dialog?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => element.getClientRects().length > 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeViewer();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, closeViewer]);

  return (
    <>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          ref={triggerRef}
          type="button"
          onClick={handleView}
          disabled={status === "checking"}
          className="btn btn-light disabled:cursor-wait disabled:opacity-75"
        >
          {status === "checking" ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <BookOpen className="size-4" aria-hidden="true" />
          )}
          Visualizar e-book
        </button>

        <a
          href={ebookPath}
          download={ebookFileName}
          onClick={handleDownload}
          className="btn btn-outline-light"
        >
          <Download className="size-4" aria-hidden="true" />
          Baixar PDF gratuitamente
        </a>
      </div>

      <div aria-live="polite">
        {status === "unavailable" && (
          <p className="mt-4 flex max-w-lg items-start gap-2.5 rounded-2xl border border-salmon/25 bg-salmon/10 px-4 py-3 text-[0.78rem] leading-relaxed text-salmon-soft">
            <AlertCircle
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            {message}
          </p>
        )}
      </div>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6">
            <button
              type="button"
              aria-label="Fechar visualizador"
              onClick={closeViewer}
              className="absolute inset-0 cursor-default bg-ink/75 backdrop-blur-sm"
            />

            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="ebook-viewer-title"
              className="animate-fade-up relative flex h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] border border-white/30 bg-cream shadow-2xl"
            >
              <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-6">
                <div className="min-w-0">
                  <p className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-rose-deep">
                    Visualizador de e-book
                  </p>
                  <h2
                    id="ebook-viewer-title"
                    className="mt-1 truncate font-serif text-base text-cocoa sm:text-xl"
                  >
                    {siteConfig.ebook.title}
                    <span className="text-muted">
                      {" "}
                      — {siteConfig.ebook.subtitle}
                    </span>
                  </h2>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={ebookPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-2.5 text-xs font-semibold text-cocoa transition hover:bg-white sm:inline-flex"
                  >
                    Abrir em nova aba
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>

                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={closeViewer}
                    aria-label="Fechar visualizador"
                    className="grid size-10 place-items-center rounded-full border border-line bg-white/60 text-cocoa transition hover:bg-white"
                  >
                    <X className="size-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="relative flex-1 bg-sand">
                {loading && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-sand px-6 text-center">
                    <Loader2
                      className="size-7 animate-spin text-rose-deep"
                      aria-hidden="true"
                    />
                    <p className="font-serif text-lg text-cocoa">
                      Abrindo seu e-book...
                    </p>
                    <p className="max-w-sm text-xs leading-relaxed text-muted">
                      O arquivo em PDF pode levar alguns instantes para
                      carregar. Se ele não aparecer, abra em uma nova aba.
                    </p>
                    <a
                      href={ebookPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary mt-1 px-4 py-2.5 text-xs"
                    >
                      Abrir em nova aba
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}

                <iframe
                  src={`${ebookPath}#view=FitH`}
                  title={`E-book ${siteConfig.ebook.title} — ${siteConfig.ebook.subtitle}`}
                  className="h-full w-full"
                  onLoad={() => setLoading(false)}
                />
              </div>

              <div className="flex flex-col gap-3 border-t border-line bg-cream px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p className="max-w-md text-[0.68rem] leading-relaxed text-muted">
                  Se o visualizador não abrir no seu dispositivo, use
                  &ldquo;Abrir em nova aba&rdquo; ou baixe o PDF.
                </p>

                <div className="flex items-center gap-2">
                  <a
                    href={ebookPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary px-4 py-2.5 text-xs sm:hidden"
                  >
                    Nova aba
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={ebookPath}
                    download={ebookFileName}
                    className="btn btn-primary px-4 py-2.5 text-xs"
                  >
                    <Download className="size-3.5" aria-hidden="true" />
                    Baixar PDF
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
