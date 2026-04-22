import Link from "next/link";
import type { Metadata } from "next";
import { weeklySpecials } from "@/data/dailySpecials";
import { SIDETRACK_FACEBOOK_URL } from "@/data/social";
import { TrainDivider } from "@/components/TrainDivider";

export const metadata: Metadata = {
  title: "Weekly specials",
  description:
    "Fish fry Friday, pasta Sunday, and the weekly rhythm at Sidetrack Restaurant & Bar in Powers, Michigan.",
};

function accentColor(border: "green" | "amber" | "rust") {
  if (border === "green") return "border-l-[color-mix(in_srgb,var(--color-green-glow)_75%,transparent)]";
  if (border === "amber") return "border-l-[color-mix(in_srgb,var(--color-amber)_45%,transparent)]";
  return "border-l-[color-mix(in_srgb,var(--color-rust)_55%,transparent)]";
}

export default function SpecialsPage() {
  return (
    <div className="bg-[var(--color-bg-deep)] px-4 pb-24 pt-12 sm:px-5 md:px-8 lg:px-12">
      <header className="mx-auto max-w-2xl text-left sm:text-center">
        <p className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[color-mix(in_srgb,var(--color-amber)_78%,transparent)]">
          Specials
        </p>
        <h1 className="font-display mt-3 text-[2rem] font-semibold tracking-tight text-[var(--color-white)] sm:text-4xl md:text-5xl">
          Weekly rhythm
        </h1>
        <p className="font-body mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] sm:text-center">
          Anchored by the full menu whenever we&apos;re open. Hours below are typical; confirm before you drive.
        </p>
        <TrainDivider />
      </header>

      <div className="mx-auto mt-12 max-w-2xl border-t border-[color-mix(in_srgb,var(--color-border)_45%,transparent)]">
        {weeklySpecials.map((day) => {
          const closed = day.status === "closed";
          const featured = Boolean(day.featured && !closed);
          return (
            <article
              key={day.day}
              className={`border-b border-[color-mix(in_srgb,var(--color-border)_45%,transparent)] py-8 pl-4 ${accentColor(day.border)} border-l-[3px] sm:py-9 sm:pl-6 ${closed ? "opacity-[0.72]" : ""}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h2 className="font-display text-[1.35rem] font-semibold tracking-tight text-[var(--color-white)] sm:text-2xl">
                    {day.day}
                  </h2>
                  {featured ? (
                    <span className="font-label text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[color-mix(in_srgb,var(--color-amber)_85%,transparent)]">
                      Spotlight
                    </span>
                  ) : null}
                </div>
                <p className="font-mono-detail text-[0.78rem] text-[color-mix(in_srgb,var(--color-amber)_88%,white)] sm:text-[0.8rem]">
                  {day.hours}
                </p>
              </div>
              <p className="font-display mt-3 text-[1.05rem] font-medium text-[color-mix(in_srgb,var(--color-white)_96%,transparent)] sm:text-lg">
                {day.specialName}
              </p>
              <p className="font-body mt-3 max-w-prose text-[0.92rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] sm:text-[0.95rem]">
                {day.description}
              </p>
            </article>
          );
        })}
      </div>

      <aside className="mx-auto mt-14 max-w-2xl rounded-md border border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-card)_94%,black)] px-5 py-8 sm:px-8 sm:py-9">
        <p className="font-body text-center text-[0.9rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] sm:text-[0.95rem]">
          Hours can shift seasonally. Confirm on{" "}
          <a
            href={SIDETRACK_FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-amber)] underline-offset-4 hover:underline"
          >
            Facebook
          </a>
          .
        </p>
      </aside>

      <div className="mx-auto mt-12 max-w-2xl px-1 text-center">
        <Link
          href="/menu"
          className="font-label inline-flex min-h-[48px] w-full items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--color-amber)_45%,transparent)] px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)] transition-colors hover:bg-[color-mix(in_srgb,var(--color-amber)_8%,transparent)] sm:w-auto"
        >
          Full menu
        </Link>
      </div>
    </div>
  );
}
