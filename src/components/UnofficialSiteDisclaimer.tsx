"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Shown for each route until dismissed; navigating to a new “page” shows it again
 * (full load or client navigation).
 */
export function UnofficialSiteDisclaimer() {
  const pathname = usePathname();
  const [dismissedForPath, setDismissedForPath] = useState<string | null>(null);
  const open = dismissedForPath !== pathname;

  const acknowledge = () => {
    setDismissedForPath(pathname);
  };

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDismissedForPath(pathname);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, pathname]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="unofficial-site-title"
      aria-describedby="unofficial-site-desc"
    >
      <div
        className="absolute inset-0 bg-[color-mix(in_srgb,black_55%,transparent)] backdrop-blur-[2px]"
        aria-hidden
      />
      <div
        className="relative z-[1] w-full max-w-md rounded border border-[color-mix(in_srgb,var(--color-border)_80%,transparent)] bg-[var(--color-bg-elevated)] p-6 shadow-2xl shadow-black/50 md:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="unofficial-site-title"
          className="font-label text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]"
        >
          Notice
        </h2>
        <p
          id="unofficial-site-desc"
          className="mt-4 text-[0.95rem] leading-relaxed text-[var(--color-text)]"
        >
          This is not an official website of the company. Content here may be
          incomplete or for informational use only, unless stated otherwise.
        </p>
        <button
          type="button"
          className="font-label mt-6 w-full min-h-[44px] rounded border border-[color-mix(in_srgb,var(--color-amber)_65%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-green)_35%,var(--color-bg-card))] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-amber)] transition-colors hover:border-[var(--color-amber)] hover:bg-[color-mix(in_srgb,var(--color-green)_45%,var(--color-bg-card))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-amber)]"
          onClick={acknowledge}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
