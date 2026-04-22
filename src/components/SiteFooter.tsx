import { SIDETRACK_FACEBOOK_URL } from "@/data/social";

export function SiteFooter() {
  return (
    <footer className="relative z-[2] mt-auto border-t border-[color-mix(in_srgb,var(--color-border)_65%,transparent)] bg-[var(--color-bg-deep)] px-5 py-14 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-10">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight text-[var(--color-white)]">Sidetrack</p>
          <p className="font-body mt-3 max-w-xs text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)]">
            Hand-tossed pizza, house-made sauces, and a full bar, served with straightforward UP hospitality.
          </p>
        </div>
        <div>
          <p className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[color-mix(in_srgb,var(--color-amber)_85%,white)]">
            Hours
          </p>
          <ul className="font-mono-detail mt-4 space-y-2 text-[0.875rem] leading-relaxed text-[color-mix(in_srgb,var(--color-tan)_94%,transparent)]">
            <li>Wed–Thu · 11:00–7:00</li>
            <li>Fri–Sat · 11:00–8:00</li>
            <li>Sun · 12:00–7:00</li>
            <li>Mon · 3:00–7:00</li>
            <li className="text-[color-mix(in_srgb,var(--color-muted)_95%,transparent)]">Tue · Closed</li>
          </ul>
        </div>
        <div>
          <p className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[color-mix(in_srgb,var(--color-amber)_85%,white)]">
            Location & contact
          </p>
          <address className="font-body mt-4 not-italic text-[color-mix(in_srgb,var(--color-tan)_94%,transparent)]">
            <a
              href="https://maps.google.com/?q=N15903+Pine+Street,+Powers,+MI+49874"
              className="block min-h-[44px] py-1.5 transition-colors hover:text-[var(--color-amber)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              N15903 Pine Street
              <br />
              Powers, MI 49874
            </a>
            <a
              className="mt-2 inline-block min-h-[44px] py-2 font-mono-detail text-[var(--color-amber)] hover:underline"
              href="tel:+19064975521"
            >
              (906) 497-5521
            </a>
            <br />
            <a
              className="inline-block min-h-[44px] py-2 text-[0.9rem] hover:text-[var(--color-amber)]"
              href="mailto:TheTrax906@gmail.com"
            >
              TheTrax906@gmail.com
            </a>
          </address>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SIDETRACK_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label min-h-[44px] rounded-sm border border-[color-mix(in_srgb,var(--color-border)_85%,transparent)] px-5 py-2.5 text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--color-tan)_92%,transparent)] transition-colors hover:border-[color-mix(in_srgb,var(--color-amber)_45%,transparent)] hover:text-[var(--color-amber)]"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <p className="font-label mx-auto mt-14 max-w-6xl text-center text-[0.6rem] font-medium uppercase tracking-[0.32em] text-[color-mix(in_srgb,var(--color-muted)_88%,transparent)]">
        © {new Date().getFullYear()} Sidetrack Restaurant & Bar · Powers, Michigan
      </p>
    </footer>
  );
}
