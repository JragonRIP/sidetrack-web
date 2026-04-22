import type { Metadata } from "next";
import Link from "next/link";
import { BrandFigure } from "@/components/BrandFigure";
import { TrainDivider } from "@/components/TrainDivider";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sidetrack Restaurant & Bar in Powers, MI. Hand-tossed pizza, house-made sauces, and straightforward UP hospitality.",
};

const facts = [
  "Rail-inspired interior details",
  "Wheelchair accessible",
  "Dine-in & takeout",
  "ORV-friendly parking",
  "Full bar & cold drinks",
  "Welcoming to families",
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-bg-deep)] px-4 pb-20 pt-12 sm:px-5 sm:pb-24 sm:pt-14 md:px-8 lg:px-12">
      <header className="mx-auto max-w-2xl text-left sm:mx-auto sm:max-w-3xl sm:text-center">
        <p className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--color-amber)_78%,transparent)]">
          About
        </p>
        <h1 className="font-display mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-[var(--color-white)] sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
          Rooted in Powers
        </h1>
        <p className="font-body mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] sm:mt-5 sm:text-[1rem]">
          A railroad-themed dining room on US-2, built for locals, travelers, and anyone who appreciates honest cooking.
        </p>
        <TrainDivider />
      </header>

      <article className="mx-auto mt-12 max-w-2xl space-y-12 sm:mt-14 sm:max-w-3xl md:space-y-14">
        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-white)] sm:text-2xl md:text-3xl">
            The setting
          </h2>
          <p className="font-body mt-4 text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] sm:mt-5 sm:text-[1rem]">
            Sidetrack’s identity nods to the lines that built the region without overwhelming the meal. You’ll notice it in
            the details: warm wood tones, straightforward layout, and enough personality to feel like a neighborhood joint
            rather than a concept restaurant.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-white)] sm:text-2xl md:text-3xl">
            The food
          </h2>
          <p className="font-body mt-4 text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] sm:mt-5 sm:text-[1rem]">
            Dough is stretched by hand. Sauces are cooked in-house. Ingredients are chosen for flavor first, whether
            that’s a Friday fish fry, a Sunday pasta plate, or an order of onion rings big enough to split across the
            table.
          </p>
        </section>

        <section className="space-y-8 sm:space-y-10">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-white)] sm:text-2xl md:text-3xl">
              The room
            </h2>
            <p className="font-body mt-4 text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] sm:mt-5 sm:text-[1rem]">
              Expect a relaxed tavern atmosphere: comfortable seating, a well-stocked bar, and rail-inspired touches that
              feel lived in. It works for a quick bite off the highway or a longer night with friends.
            </p>
          </div>

          <BrandFigure
            src="/brand/interior.png"
            alt="Interior of Sidetrack Restaurant & Bar showing the back bar, train mural, and wooden signage."
            caption="Back bar, bottles, and locomotive mural: warm wood and a straightforward Upper Peninsula tavern feel."
            ratio="landscape"
            compact
            priority
          />

          <BrandFigure
            src="/brand/sign.png"
            alt="Sidetrack roadside sign with Side-Track lettering, casual dining and cocktails script, and locomotive artwork."
            caption="Roadside signage along US-2, easy to spot when you’re traveling the corridor."
            ratio="wide"
            objectFit="contain"
            compact
          />
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-white)] sm:text-2xl md:text-3xl">
            At a glance
          </h2>
          <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
            {facts.map((fact) => (
              <li
                key={fact}
                className="border-l-2 border-[color-mix(in_srgb,var(--color-amber)_38%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-card)_96%,black)] px-4 py-3.5 font-body text-[0.9rem] text-[color-mix(in_srgb,var(--color-tan)_94%,transparent)] sm:px-5 sm:py-4 sm:text-[0.95rem]"
              >
                {fact}
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] pt-10 text-center sm:pt-12">
          <Link
            href="/menu"
            className="font-label inline-flex min-h-[48px] min-w-[44px] items-center justify-center bg-[var(--color-amber)] px-8 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-bg-deep)] transition-colors hover:bg-[var(--color-amber-hover)] sm:px-10"
          >
            View menu
          </Link>
        </div>
      </article>
    </div>
  );
}
