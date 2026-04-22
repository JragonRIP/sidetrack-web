import type { Metadata } from "next";
import { BrandFigure } from "@/components/BrandFigure";
import { TrainDivider } from "@/components/TrainDivider";
import { SIDETRACK_FACEBOOK_URL } from "@/data/social";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Sidetrack Restaurant & Bar. N15903 Pine Street, Powers, MI. Call (906) 497-5521. On US-2.",
};

const rows = [
  { label: "Wednesday & Thursday", hours: "11:00 AM to 7:00 PM", status: "open" as const },
  { label: "Friday & Saturday", hours: "11:00 AM to 8:00 PM", status: "open" as const },
  { label: "Sunday", hours: "12:00 PM to 7:00 PM", status: "open" as const },
  { label: "Monday", hours: "3:00 PM to 7:00 PM", status: "open" as const },
  { label: "Tuesday", hours: "Closed", status: "closed" as const },
];

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-bg-deep)] px-4 pb-20 pt-12 sm:px-5 sm:pb-24 sm:pt-14 md:px-8 lg:px-12">
      <header className="mx-auto max-w-3xl text-center">
        <p className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--color-amber)_78%,transparent)]">
          Visit
        </p>
        <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-[var(--color-white)] md:text-5xl lg:text-6xl">
          Find us in Powers
        </h1>
        <p className="font-body mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)]">
          Located on US-2 with easy pull-off access and ample parking.
        </p>
        <TrainDivider />
      </header>

      <div className="mx-auto mt-14 max-w-3xl space-y-12 text-center">
        <address className="font-display not-italic">
          <p className="text-[1.65rem] font-semibold tracking-tight text-[var(--color-white)] md:text-[2rem]">
            N15903 Pine Street
          </p>
          <p className="mt-3 text-[1.1rem] text-[color-mix(in_srgb,var(--color-tan)_94%,transparent)] md:text-xl">
            Powers, MI 49874
          </p>
          <p className="mt-8">
            <a
              className="font-mono-detail text-xl text-[var(--color-amber)] transition-colors hover:text-[var(--color-amber-hover)] md:text-2xl"
              href="tel:+19064975521"
            >
              (906) 497-5521
            </a>
          </p>
          <p className="mt-5">
            <a
              className="font-body text-[0.98rem] text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] transition-colors hover:text-[var(--color-amber)]"
              href="mailto:TheTrax906@gmail.com"
            >
              TheTrax906@gmail.com
            </a>
          </p>
        </address>

        <BrandFigure
          src="/brand/exterior.png"
          alt="Exterior of Sidetrack Restaurant & Bar in Powers, Michigan, with roadside sign and building facade."
          caption="The building on US-2: plenty of parking and an easy pull-off when you’re passing through the UP."
          ratio="landscape"
          compact
        />

        <div className="overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
          {/*
            Uses Google Maps embed query mode (no API key). For Maps Embed API:
            https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_EMBED_API_KEY&q=Sidetrack+Powers+MI
          */}
          <iframe
            title="Sidetrack Restaurant & Bar map"
            src="https://maps.google.com/maps?q=45.6867,-87.5289&z=15&output=embed"
            className="aspect-[16/10] min-h-[280px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mx-auto max-w-lg rounded-md border border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-card)_96%,black)] px-8 py-10 text-left">
          <h2 className="font-display text-center text-xl font-semibold text-[var(--color-white)]">Hours</h2>
          <table className="font-mono-detail mt-8 w-full text-[0.875rem]">
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-[color-mix(in_srgb,var(--color-border)_45%,transparent)] last:border-0">
                  <th scope="row" className="py-3.5 pr-4 font-normal text-[color-mix(in_srgb,var(--color-tan)_92%,transparent)]">
                    {row.label}
                  </th>
                  <td
                    className={`py-3.5 text-right ${
                      row.status === "open" ? "text-[color-mix(in_srgb,var(--color-green-glow)_92%,white)]" : "text-[color-mix(in_srgb,var(--color-rust)_88%,white)]"
                    }`}
                  >
                    {row.hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={SIDETRACK_FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label inline-flex min-h-[48px] min-w-[44px] items-center justify-center rounded-sm border border-[color-mix(in_srgb,var(--color-border)_85%,transparent)] px-8 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--color-tan)_92%,transparent)] transition-colors hover:border-[color-mix(in_srgb,var(--color-amber)_45%,transparent)] hover:text-[var(--color-amber)]"
          >
            Facebook
          </a>
        </div>

        <p className="font-body mx-auto max-w-2xl text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)]">
          Traveling the UP? We&apos;re an easy stop with room to park, including space suited for trailers and ORVs when
          posted.
        </p>
      </div>
    </div>
  );
}
