"use client";

import {
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { Download, MoreVertical, Share, Smartphone, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt: () => Promise<void>;
}

type Platform = "ios" | "android" | "other";

const DISMISS_KEY = "install-app-dismissed";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function InstallApp() {
  const mounted = useMounted();
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [standalone, setStandalone] = useState(false);
  const [platform, setPlatform] = useState<Platform>("other");
  const [dismissed, setDismissed] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(display-mode: standalone)");
    const updateStandalone = () => {
      setStandalone(
        media.matches ||
          (navigator as Navigator & { standalone?: boolean }).standalone === true,
      );
    };
    media.addEventListener("change", updateStandalone);

    const ua = navigator.userAgent;
    const isIOS =
      /iphone|ipad|ipod/i.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroid = /android/i.test(ua);

    const initTimer = window.setTimeout(() => {
      updateStandalone();
      setPlatform(isIOS ? "ios" : isAndroid ? "android" : "other");
      try {
        setDismissed(window.sessionStorage.getItem(DISMISS_KEY) === "1");
      } catch {
        setDismissed(false);
      }
    }, 0);

    const onPrompt = (event: Event) => {
      event.preventDefault();
      setDeferred(event as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      setDeferred(null);
      setStandalone(true);
    };

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.clearTimeout(initTimer);
      media.removeEventListener("change", updateStandalone);
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  useEffect(() => {
    if (!helpOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setHelpOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [helpOpen]);

  const dismiss = useCallback(() => {
    setDismissed(true);
    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Armazenamento indisponível: apenas oculta nesta sessão.
    }
  }, []);

  const handleInstall = useCallback(async () => {
    if (deferred) {
      await deferred.prompt();
      const choice = await deferred.userChoice;
      setDeferred(null);
      if (choice.outcome === "accepted") setStandalone(true);
      return;
    }

    if (platform !== "other") setHelpOpen(true);
  }, [deferred, platform]);

  const visible =
    mounted && !standalone && !dismissed && (Boolean(deferred) || platform !== "other");

  if (!visible) return null;

  const isIOS = platform === "ios";

  return (
    <>
      <div className="fixed bottom-5 left-5 z-40 sm:bottom-6 sm:left-6">
        <div className="flex items-center gap-1 rounded-full border border-cocoa/10 bg-white/90 p-1 shadow-soft backdrop-blur">
          <button
            type="button"
            onClick={handleInstall}
            className="flex items-center gap-2 rounded-full bg-cocoa px-4 py-2.5 text-[0.72rem] font-semibold text-cream transition hover:bg-ink"
          >
            <Download className="size-4" aria-hidden="true" />
            Instalar app
          </button>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dispensar instalação do app"
            className="grid size-9 place-items-center rounded-full text-muted transition hover:bg-sand hover:text-cocoa"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {helpOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="install-title"
          className="fixed inset-0 z-[120] grid place-items-center bg-ink/60 p-5 backdrop-blur-sm"
          onClick={() => setHelpOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl border border-line bg-cream p-7 shadow-soft"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-rose">
                  {isIOS ? "Instalar no iPhone / iPad" : "Instalar no Android"}
                </p>
                <h2
                  id="install-title"
                  className="mt-2 font-serif text-2xl leading-tight text-cocoa"
                >
                  {isIOS
                    ? "Adicione à Tela de Início"
                    : "Adicione à tela inicial"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setHelpOpen(false)}
                aria-label="Fechar"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-muted transition hover:bg-sand hover:text-cocoa"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <ol className="mt-6 space-y-4 text-[0.9rem] leading-6 text-muted">
              <li className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sand text-[0.72rem] font-semibold text-cocoa">
                  1
                </span>
                <span>
                  Abra este site no{" "}
                  <strong className="text-cocoa">
                    {isIOS ? "Safari" : "Chrome"}
                  </strong>
                  .
                </span>
              </li>
              <li className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sand text-[0.72rem] font-semibold text-cocoa">
                  2
                </span>
                <span>
                  {isIOS ? (
                    <>
                      Toque em{" "}
                      <Share
                        className="inline-block size-4 -translate-y-px text-rose"
                        aria-hidden="true"
                      />{" "}
                      <strong className="text-cocoa">Compartilhar</strong>.
                    </>
                  ) : (
                    <>
                      Toque no menu{" "}
                      <MoreVertical
                        className="inline-block size-4 -translate-y-px text-rose"
                        aria-hidden="true"
                      />{" "}
                      no canto superior.
                    </>
                  )}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sand text-[0.72rem] font-semibold text-cocoa">
                  3
                </span>
                <span>
                  Escolha{" "}
                  <strong className="text-cocoa">
                    {isIOS ? "Adicionar à Tela de Início" : "Instalar app"}
                  </strong>{" "}
                  e confirme.
                </span>
              </li>
            </ol>

            <p className="mt-5 flex items-center gap-2 text-[0.72rem] text-muted">
              <Smartphone className="size-4 shrink-0 text-rose" aria-hidden="true" />
              {isIOS
                ? "No Android, use o menu do navegador e toque em “Instalar app”."
                : "No iPhone/iPad, use o Safari e toque em Compartilhar → Adicionar à Tela de Início."}
            </p>

            <button
              type="button"
              onClick={() => setHelpOpen(false)}
              className="btn btn-primary mt-6 w-full"
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
