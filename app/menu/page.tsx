"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { MenuItem as MenuItemType } from "@/data/menu";
import { meatToppings, menuCategories, pizzaUpcharges, veggieToppings } from "@/data/menu";
import { TrainDivider } from "@/components/TrainDivider";

function MenuItemCard({ item }: { item: MenuItemType }) {
  return (
    <article className="flex flex-col rounded-md border border-[color-mix(in_srgb,var(--color-border)_52%,transparent)] border-l-[3px] border-l-[color-mix(in_srgb,var(--color-green)_72%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-card)_96%,black)] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.22)] transition-shadow md:hover:shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-label text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-white)]">
            {item.name}
          </h3>
          {item.badge ? (
            <span className="font-label mt-2 inline-block rounded-sm border border-[color-mix(in_srgb,var(--color-amber)_42%,transparent)] px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[color-mix(in_srgb,var(--color-amber)_92%,white)]">
              {item.badge}
            </span>
          ) : null}
        </div>
        {item.price ? (
          <p className="font-mono-detail shrink-0 text-right text-lg text-[var(--color-amber)]">{item.price}</p>
        ) : null}
      </div>
      {item.description ? (
        <p className="font-body mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{item.description}</p>
      ) : null}
      {item.variants?.length ? (
        <ul className="mt-4 space-y-2.5 border-t border-[color-mix(in_srgb,var(--color-border)_45%,transparent)] pt-4">
          {item.variants.map((v) => (
            <li key={v.name} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className="font-body text-sm leading-snug text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)]">
                {v.name}
              </span>
              {v.price ? (
                <span className="font-mono-detail shrink-0 text-[var(--color-amber)]">{v.price}</span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
      {item.pizzaSizes ? (
        <div
          className="mt-5 border-t border-[color-mix(in_srgb,var(--color-border)_45%,transparent)] pt-5"
          role="group"
          aria-label="Prices by pizza size"
        >
          <p className="font-label mb-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--color-muted)_92%,transparent)]">
            Sizes
          </p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {(
              [
                { label: `12"`, price: item.pizzaSizes.s12 },
                { label: `14"`, price: item.pizzaSizes.s14 },
                { label: `16"`, price: item.pizzaSizes.s16 },
              ] as const
            ).map(({ label, price }) => (
              <div
                key={label}
                className="flex min-h-[4.25rem] flex-col justify-center rounded-md border border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-deep)_65%,black)] px-3 py-3 text-center sm:min-h-[4.5rem] sm:px-4 sm:py-3.5"
              >
                <span className="font-label text-[0.95rem] font-bold tabular-nums leading-none text-[var(--color-white)] sm:text-base">
                  {label}
                </span>
                <span className="font-mono-detail mt-2 text-[1.125rem] font-bold tabular-nums leading-none tracking-tight text-[var(--color-amber)] sm:text-xl">
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {item.tieredPrices?.length ? (
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[color-mix(in_srgb,var(--color-border)_45%,transparent)] pt-4 sm:grid-cols-3 md:grid-cols-5">
          {item.tieredPrices.map((col) => (
            <div key={col.label}>
              <p className="font-mono-detail text-[0.65rem] uppercase tracking-wider text-[var(--color-muted)]">
                {col.label}
              </p>
              <p className="font-mono-detail mt-1 text-[var(--color-amber)]">{col.value}</p>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function PizzaToppingsBox() {
  return (
    <aside className="mt-12 rounded-md border border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-card)_94%,black)] p-8 shadow-inner">
      <h3 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-white)]">Toppings</h3>
      <p className="font-body mt-3 text-[0.9rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)]">
        Build from the lists below. Your server can ring pricing for extras and specialty builds.
      </p>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div>
          <p className="font-label text-xs uppercase tracking-[0.25em] text-[var(--color-amber)]">Meats</p>
          <ul className="font-body mt-3 columns-2 gap-x-6 text-sm text-[var(--color-tan)]">
            {meatToppings.map((m) => (
              <li key={m} className="mb-2 break-inside-avoid">
                • {m}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-label text-xs uppercase tracking-[0.25em] text-[var(--color-amber)]">Veggies</p>
          <ul className="font-body mt-3 columns-2 gap-x-6 text-sm text-[var(--color-tan)]">
            {veggieToppings.map((v) => (
              <li key={v} className="mb-2 break-inside-avoid">
                • {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] pt-6">
        <p className="font-label text-xs uppercase tracking-[0.25em] text-[var(--color-amber)]">Upcharges</p>
        <ul className="font-mono-detail mt-3 space-y-2 text-sm text-[var(--color-tan)]">
          {pizzaUpcharges.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default function MenuPage() {
  const [activeId, setActiveId] = useState(menuCategories[0]?.id ?? "");

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio > 0.08)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const first = visible[0];
        if (first?.target?.id) setActiveId(first.target.id);
      },
      { threshold: [0, 0.12, 0.22, 0.35], rootMargin: "-18% 0px -48% 0px" },
    );
    menuCategories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="bg-[var(--color-bg-deep)] px-4 pb-20 pt-10 md:px-8 lg:px-12">
      <header className="mx-auto max-w-6xl text-center">
        <p className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--color-amber)_78%,transparent)]">
          Menu
        </p>
        <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-[var(--color-white)] md:text-6xl lg:text-7xl">
          Dining room &amp; bar
        </h1>
        <p className="font-body mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)]">
          Prepared to order. Please ask your server about allergies and modifications.
        </p>
        <TrainDivider />
      </header>

      <div className="mx-auto mt-8 flex max-w-6xl gap-10 lg:gap-14">
        <aside className="hidden w-52 shrink-0 lg:block">
          <nav className="sticky top-28 space-y-1 pr-2" aria-label="Menu sections">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollTo(cat.id)}
                className={`font-label block w-full min-h-[44px] rounded-md px-3 py-2 text-left text-sm uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-amber)] ${
                  activeId === cat.id
                    ? "bg-[color-mix(in_srgb,var(--color-amber)_14%,transparent)] text-[var(--color-amber)]"
                    : "text-[var(--color-muted)] hover:bg-[color-mix(in_srgb,var(--color-bg-card)_85%,transparent)] hover:text-[var(--color-amber)]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1 space-y-4">
          <label className="font-label sr-only lg:hidden" htmlFor="menu-section-jump">
            Jump to menu section
          </label>
          <select
            id="menu-section-jump"
            className="font-label lg:hidden mb-8 w-full min-h-[48px] rounded-md border border-[color-mix(in_srgb,var(--color-amber)_40%,transparent)] bg-[var(--color-bg-card)] px-4 py-3 text-sm uppercase tracking-wide text-[var(--color-tan)]"
            value={activeId}
            onChange={(e) => {
              const v = e.target.value;
              scrollTo(v);
            }}
          >
            {menuCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>

          <p className="font-body mb-10 text-[0.85rem] text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] lg:hidden">
            Jump to a section below, or scroll the full menu.
          </p>

          {menuCategories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-28">
              <TrainDivider label={cat.railName} />
              <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-[var(--color-white)] md:text-4xl">
                {cat.title}
              </h2>
              <p className="font-body mt-3 text-[0.98rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)]">
                {cat.subtitle}
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {cat.items.map((item) => (
                  <MenuItemCard key={item.name} item={item} />
                ))}
              </div>
              {cat.id === "build-your-own" ? <PizzaToppingsBox /> : null}
            </section>
          ))}

          <div className="mt-16 rounded-md border border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-card)_96%,black)] px-8 py-10 text-center">
            <p className="font-body text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)]">
              Items and pricing may change. For allergies and dietary needs, please speak with your server before you
              order.
            </p>
            <Link
              href="/contact"
              className="font-label mt-8 inline-flex min-h-[48px] items-center justify-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-amber)] transition-colors hover:text-[var(--color-amber-hover)]"
            >
              Contact the restaurant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
