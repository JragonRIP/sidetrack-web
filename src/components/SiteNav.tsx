"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/specials", label: "Specials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Visit" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="sticky top-0 z-[70] border-b border-[color-mix(in_srgb,var(--color-border)_65%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-deep)_92%,black)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-6 md:py-4">
        <Link
          href="/"
          className="group flex min-h-[44px] min-w-[44px] items-center gap-3 md:gap-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-amber)]"
          aria-label="Sidetrack Restaurant & Bar home"
        >
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-sm border border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-card)_90%,black)] md:h-12 md:w-12">
            <Image
              src="/brand/logo.png"
              alt=""
              fill
              className="object-contain object-center p-0.5"
              sizes="64px"
              quality={95}
              priority
            />
          </span>
          <span className="flex flex-col justify-center">
            <span className="font-display text-[1.25rem] font-semibold leading-tight tracking-tight text-[var(--color-white)] transition-colors group-hover:text-[color-mix(in_srgb,var(--color-amber)_92%,white)] md:text-[1.35rem]">
              Sidetrack
            </span>
            <span className="font-label mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--color-muted)_95%,transparent)] md:text-[0.62rem]">
              Restaurant & Bar · Powers, MI
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-label min-h-[44px] min-w-[44px] px-3.5 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                  active
                    ? "text-[var(--color-amber)]"
                    : "text-[color-mix(in_srgb,var(--color-tan)_88%,transparent)] hover:text-[var(--color-amber)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm border border-[color-mix(in_srgb,var(--color-border)_90%,transparent)] text-[color-mix(in_srgb,var(--color-tan)_90%,transparent)] transition-colors hover:border-[color-mix(in_srgb,var(--color-amber)_45%,transparent)] hover:text-[var(--color-amber)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.5} aria-hidden /> : <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] md:hidden"
          >
            <nav className="flex flex-col px-3 pb-5 pt-2" aria-label="Mobile primary">
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`font-label min-h-[48px] rounded-sm px-4 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.16em] ${
                      active
                        ? "bg-[color-mix(in_srgb,var(--color-amber)_10%,transparent)] text-[var(--color-amber)]"
                        : "text-[color-mix(in_srgb,var(--color-tan)_92%,transparent)] active:bg-[color-mix(in_srgb,var(--color-bg-elevated)_75%,transparent)]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
