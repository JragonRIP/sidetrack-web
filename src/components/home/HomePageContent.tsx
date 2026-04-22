"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { TrainDivider } from "@/components/TrainDivider";
import { reviews, type Review } from "@/data/reviews";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const ORDER_PHONE_TEL = "tel:+19064975521";
const ORDER_PHONE_DISPLAY = "(906) 497-5521";

/** One review per screen on small phones: vertical copy, swipe sideways for next. */
function GuestNotesMobileCarousel({ items }: { items: Review[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const syncActive = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const page = el.clientWidth;
    if (page <= 0) return;
    const idx = Math.round(el.scrollLeft / page);
    setActive(Math.min(Math.max(0, idx), items.length - 1));
  }, [items.length]);

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <div
        ref={scrollerRef}
        onScroll={syncActive}
        className="flex touch-pan-x snap-x snap-mandatory gap-0 overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Guest reviews"
      >
        {items.map((r) => (
          <article
            key={r.author}
            className="flex min-h-[min(56svh,400px)] w-full min-w-full shrink-0 snap-center snap-always flex-col justify-center rounded-md border border-[color-mix(in_srgb,var(--color-border)_50%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-card)_96%,black)] px-5 py-7"
          >
            <p className="font-body max-w-none text-[clamp(0.88rem,3.4vw,1rem)] leading-snug text-[color-mix(in_srgb,var(--color-muted)_99%,transparent)] break-words">
              {r.quote}
            </p>
            <p className="font-label mt-5 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--color-tan)_85%,transparent)] sm:text-[0.6rem]">
              {r.author}
              {r.location ? (
                <span className="font-body font-normal normal-case tracking-normal text-[color-mix(in_srgb,var(--color-muted)_95%,transparent)]">
                  , {r.location}
                </span>
              ) : null}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-1 sm:gap-2" role="tablist" aria-label="Select review">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Review ${i + 1} of ${items.length}`}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border-0 bg-transparent p-0"
            onClick={() => goTo(i)}
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full transition-colors ${
                active === i
                  ? "bg-[var(--color-amber)]"
                  : "bg-[color-mix(in_srgb,var(--color-muted)_42%,transparent)]"
              }`}
              aria-hidden
            />
          </button>
        ))}
      </div>
      <p className="font-label mt-4 text-center text-[0.58rem] uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--color-muted)_75%,transparent)]">
        Swipe for more
      </p>
    </div>
  );
}

const featured = [
  {
    title: "The Engineer",
    body: "Our best-selling pie: pepperoni, beef, sausage, mushrooms, onion, and green pepper on hand-stretched dough.",
    meta: "From $15",
    metaKind: "price" as const,
  },
  {
    title: "Fish Fry Friday",
    body: "Beer-battered fish, crisp sides, and the kind of Friday-night plate people plan their week around.",
    meta: "Weekly",
    metaKind: "badge" as const,
  },
  {
    title: "Pasta Sunday",
    body: "House Alfredo and slow-simmered red sauces: chicken, seafood, or classic spaghetti.",
    meta: "Weekly",
    metaKind: "badge" as const,
  },
];

export function HomePageContent() {
  const featuredReviews = reviews.slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[var(--color-bg)] px-4 pb-10 pt-16 sm:px-5 sm:pb-12 sm:pt-20 md:px-8 lg:px-12">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[85%] max-w-4xl bg-[radial-gradient(ellipse_at_22%_42%,color-mix(in_srgb,var(--color-green-glow)_28%,transparent)_0%,transparent_58%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-3xl opacity-[0.38] md:opacity-[0.28] bg-rail-pattern" aria-hidden />
        <div className="relative mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_min(44vw,480px)] lg:items-center lg:gap-12 xl:gap-14">
          <div className="w-full max-w-xl pt-2 lg:max-w-none">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[color-mix(in_srgb,var(--color-amber)_78%,transparent)]"
            >
              Powers, Michigan · US-2
            </motion.p>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display mt-4 text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-[var(--color-white)] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
            >
              Get Derailed.
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-body mt-5 max-w-xl text-[1.02rem] leading-[1.65] text-[color-mix(in_srgb,var(--color-tan)_94%,transparent)] sm:text-[1.06rem] md:text-[1.125rem]"
            >
              Hand-tossed pizza, scratch sauces, and a full bar in a relaxed railroad-themed dining room built for locals
              and travelers alike.
            </motion.p>
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-9 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Link
                href="/menu"
                className="font-label inline-flex min-h-[48px] min-w-[44px] flex-1 items-center justify-center bg-[var(--color-amber)] px-8 py-3.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-bg-deep)] transition-colors hover:bg-[var(--color-amber-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-amber)] sm:flex-none sm:px-9"
              >
                View menu
              </Link>
              <Link
                href="/contact"
                className="font-label inline-flex min-h-[48px] min-w-[44px] flex-1 items-center justify-center border border-[color-mix(in_srgb,var(--color-amber)_65%,transparent)] px-8 py-3.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--color-tan)_96%,transparent)] transition-colors hover:border-[var(--color-amber)] hover:text-[var(--color-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-amber)] sm:flex-none sm:px-9"
              >
                Hours &amp; location
              </Link>
            </motion.div>
            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-mono-detail mt-12 flex flex-col gap-3 border-t border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] pt-7 text-[0.8rem] leading-relaxed text-[color-mix(in_srgb,var(--color-tan)_88%,transparent)] sm:mt-14 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2 sm:pt-8 sm:text-[0.8125rem]"
            >
              <a className="min-h-[44px] py-2 sm:py-1" href={ORDER_PHONE_TEL}>
                906-497-5521
              </a>
              <span className="hidden text-[color-mix(in_srgb,var(--color-muted)_65%,transparent)] sm:inline" aria-hidden>
                |
              </span>
              <span className="min-h-[44px] sm:min-h-0">N15903 Pine Street, Powers</span>
              <span className="hidden text-[color-mix(in_srgb,var(--color-muted)_65%,transparent)] sm:inline" aria-hidden>
                |
              </span>
              <span className="text-[0.78rem] sm:text-[0.8125rem]">Wed through Sun open; Mon limited; Tue closed</span>
            </motion.p>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-h-[min(46svh,380px)] max-w-[min(100%,380px)] overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--color-border)_45%,transparent)] bg-[var(--color-bg-card)] shadow-[0_20px_56px_rgba(0,0,0,0.35)] sm:max-h-[min(52svh,440px)] sm:max-w-md lg:mx-0 lg:aspect-[3/4] lg:max-h-[min(74vh,680px)] lg:max-w-none lg:shadow-[0_28px_80px_rgba(0,0,0,0.38)]">
            <Image
              src="/brand/exterior.png"
              alt="Sidetrack Restaurant & Bar building and roadside sign along US-2 in Powers, Michigan."
              fill
              priority
              quality={92}
              sizes="(max-width: 1024px) 92vw, 520px"
              className="object-cover object-[center_38%]"
            />
          </div>
        </div>
        <TrainDivider className="mt-10 max-w-6xl sm:mt-12 md:mx-auto md:mt-auto md:w-full" />
      </section>

      <section
        className="border-y border-[color-mix(in_srgb,var(--color-amber)_18%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-elevated)_88%,black)] px-4 py-14 sm:px-5 sm:py-16 md:px-8 lg:px-12"
        aria-labelledby="order-ahead-heading"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-7 sm:gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[color-mix(in_srgb,var(--color-amber)_72%,transparent)]">
              Takeout
            </p>
            <h2
              id="order-ahead-heading"
              className="font-display mt-2 text-[1.65rem] font-semibold leading-tight tracking-tight text-[var(--color-white)] sm:mt-3 sm:text-3xl md:text-[2.15rem]"
            >
              Order ahead by phone
            </h2>
            <p className="font-body mt-3 text-[0.92rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] sm:mt-4 sm:text-[0.95rem]">
              Call in takeout before you arrive. Same number if you have questions about the menu or hours.
            </p>
          </div>
          <a
            href={ORDER_PHONE_TEL}
            aria-label={`Call Sidetrack to order ahead at ${ORDER_PHONE_DISPLAY}`}
            className="font-label inline-flex min-h-[48px] w-full shrink-0 flex-col items-center justify-center gap-1 border border-[color-mix(in_srgb,var(--color-amber)_55%,transparent)] px-8 py-4 text-center transition-colors hover:bg-[color-mix(in_srgb,var(--color-amber)_10%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-amber)] sm:py-3.5 md:w-auto md:items-end md:px-10"
          >
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color-mix(in_srgb,var(--color-amber)_92%,white)]">
              Order ahead
            </span>
            <span className="font-mono-detail text-[1.05rem] font-semibold tabular-nums tracking-tight text-[var(--color-amber)] sm:text-[1.125rem]">
              {ORDER_PHONE_DISPLAY}
            </span>
          </a>
        </div>
      </section>

      <section className="bg-[var(--color-bg-deep)] px-4 py-16 sm:px-5 sm:py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-label text-center text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[color-mix(in_srgb,var(--color-amber)_78%,transparent)]">
            Signature dishes
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-2xl text-center text-[1.65rem] font-semibold leading-tight tracking-tight text-[var(--color-white)] sm:mt-4 sm:text-3xl md:text-[2.25rem]">
            What brings people back
          </h2>
          <p className="font-body mx-auto mt-3 max-w-2xl text-center text-[0.92rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] sm:mt-4 sm:text-[0.95rem]">
            Three plates that tend to anchor first visits, and the ones that follow.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3 md:gap-7">
            {featured.map(({ title, body, meta, metaKind }) => (
              <article
                key={title}
                className="flex flex-col rounded-md border border-[color-mix(in_srgb,var(--color-border)_52%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-card)_96%,black)] p-6 sm:p-7"
              >
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--color-white)] sm:text-xl">{title}</h3>
                <p className="font-body mt-3 flex-1 text-[0.88rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] sm:text-[0.9rem]">
                  {body}
                </p>
                <div className="mt-6 border-t border-[color-mix(in_srgb,var(--color-border)_45%,transparent)] pt-5 sm:mt-8 sm:pt-6">
                  {metaKind === "price" ? (
                    <p className="font-mono-detail text-[0.88rem] text-[var(--color-amber)] sm:text-[0.9rem]">{meta}</p>
                  ) : (
                    <span className="font-label inline-block rounded-sm border border-[color-mix(in_srgb,var(--color-amber)_42%,transparent)] px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--color-amber)_95%,white)]">
                      {meta}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
        <TrainDivider />
      </section>

      <section className="border-y border-[color-mix(in_srgb,var(--color-amber)_18%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-elevated)_88%,black)] px-4 py-14 sm:px-5 sm:py-16 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 sm:gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[color-mix(in_srgb,var(--color-amber)_72%,transparent)]">
              Weekly
            </p>
            <h2 className="font-display mt-2 text-[1.65rem] font-semibold leading-tight tracking-tight text-[var(--color-white)] sm:mt-3 sm:text-3xl md:text-[2.15rem]">
              Friday fish fry &amp; Sunday pasta
            </h2>
            <p className="font-body mt-3 text-[0.92rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] sm:mt-4 sm:text-[0.95rem]">
              Two calendars worth marking, prepared with the same care as the rest of the menu.
            </p>
          </div>
          <Link
            href="/specials"
            className="font-label inline-flex min-h-[48px] w-full shrink-0 items-center justify-center border border-[color-mix(in_srgb,var(--color-amber)_55%,transparent)] px-8 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-amber)] transition-colors hover:bg-[color-mix(in_srgb,var(--color-amber)_10%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-amber)] md:w-auto"
          >
            Weekly lineup
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] px-4 py-16 sm:px-5 sm:py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 md:grid-cols-2 md:items-center md:gap-14 lg:gap-16">
          <blockquote className="font-display text-[1.65rem] font-normal italic leading-snug text-[color-mix(in_srgb,var(--color-white)_98%,transparent)] sm:text-[1.85rem] md:text-[2.15rem] lg:text-[2.35rem]">
            More than a pizza stop: it&apos;s a place that still feels like the Upper Peninsula.
          </blockquote>
          <div>
            <p className="font-body text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] sm:text-[0.98rem]">
              Sidetrack leans into its railroad roots without turning dinner into a theme park: warm lighting, room to
              breathe, and food made with intention. Whether you&apos;re here for a quick bite off US-2 or a full table on
              the weekend.
            </p>
            <p className="font-body mt-5 text-[0.82rem] leading-relaxed text-[color-mix(in_srgb,var(--color-tan)_88%,transparent)] sm:mt-6">
              Dine-in · Takeout · Family welcome · Full bar · Moderate pricing
            </p>
            <Link
              href="/about"
              className="font-label mt-8 inline-flex min-h-[48px] items-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)] transition-colors hover:text-[var(--color-amber-hover)] sm:mt-10"
            >
              Our story
            </Link>
          </div>
        </div>
        <TrainDivider className="mx-auto mt-14 max-w-6xl md:mt-16 lg:mt-20" />
      </section>

      <section className="bg-[var(--color-bg-deep)] px-4 py-16 sm:px-5 sm:py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-label text-center text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[color-mix(in_srgb,var(--color-amber)_78%,transparent)]">
            Guest notes
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-xl text-center text-[1.65rem] font-semibold leading-tight tracking-tight text-[var(--color-white)] sm:mt-4 sm:text-3xl md:text-[2.15rem]">
            Word travels on US-2
          </h2>
          <div className="mt-10 md:mt-12">
            <div className="md:hidden">
              <GuestNotesMobileCarousel items={featuredReviews} />
            </div>
            <div className="hidden gap-6 md:grid md:grid-cols-3 lg:gap-8">
              {featuredReviews.map((r) => (
                <article
                  key={r.author}
                  className="box-border w-full rounded-md border border-[color-mix(in_srgb,var(--color-border)_50%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-card)_96%,black)] px-6 py-7 md:px-7 md:py-8"
                >
                  <p className="font-body max-w-none text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_99%,transparent)] break-words">
                    {r.quote}
                  </p>
                  <p className="font-label mt-6 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--color-tan)_85%,transparent)] sm:mt-8 sm:text-[0.62rem]">
                    {r.author}
                    {r.location ? (
                      <span className="font-body font-normal normal-case tracking-normal text-[color-mix(in_srgb,var(--color-muted)_95%,transparent)]">
                        , {r.location}
                      </span>
                    ) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <TrainDivider />
      </section>

      <section className="bg-[var(--color-green-deep)] px-4 py-16 sm:px-5 sm:py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[color-mix(in_srgb,var(--color-amber)_72%,transparent)]">
            Visit
          </p>
          <h2 className="font-display mt-3 text-[1.65rem] font-semibold leading-tight tracking-tight text-[var(--color-white)] sm:mt-4 sm:text-3xl md:text-[2.35rem]">
            On US-2 in Powers
          </h2>
          <p className="font-body mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,var(--color-tan)_92%,transparent)] sm:mt-5 sm:text-[0.98rem]">
            Straightforward access from the highway, generous parking, including room for trailers and ORVs when you need
            it.
          </p>
          <div className="font-body mx-auto mt-10 max-w-lg space-y-1.5 text-[1rem] text-[var(--color-white)] sm:mt-12 sm:text-[1.05rem]">
            <p>N15903 Pine Street</p>
            <p className="text-[color-mix(in_srgb,var(--color-tan)_92%,transparent)]">Powers, MI 49874</p>
            <p className="pt-2">
              <a className="font-mono-detail text-[var(--color-amber)] hover:underline" href={ORDER_PHONE_TEL}>
                {ORDER_PHONE_DISPLAY}
              </a>
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=N15903+Pine+Street,+Powers,+MI+49874"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label mt-10 inline-flex min-h-[48px] min-w-[44px] items-center justify-center border border-[color-mix(in_srgb,var(--color-amber)_55%,transparent)] px-8 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-amber)] transition-colors hover:bg-[color-mix(in_srgb,var(--color-amber)_10%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-amber)] sm:mt-12"
          >
            Open in Maps
          </a>
        </div>
      </section>
    </>
  );
}
