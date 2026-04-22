const ITEMS = [
  "Hand-tossed pizza",
  "Cold drinks",
  "Fish fry Friday",
  "Homemade pasta",
  "Onion rings",
  "Pasta Sunday",
  "Powers, Michigan",
  "Est. local favorite",
];

function TickerItems({ instanceId }: { instanceId: string }) {
  return (
    <>
      {ITEMS.map((item) => (
        <span
          key={`${instanceId}-${item}`}
          className="inline-flex items-center gap-2 whitespace-nowrap px-4 text-[0.6875rem] font-medium tracking-[0.14em] sm:text-xs"
        >
          <span className="text-[color-mix(in_srgb,var(--color-amber)_55%,var(--color-muted))]" aria-hidden>
            ·
          </span>
          <span className="text-[color-mix(in_srgb,var(--color-tan)_92%,transparent)]">{item}</span>
        </span>
      ))}
    </>
  );
}

export function RailTicker() {
  return (
    <div
      className="relative z-[60] w-full overflow-hidden border-b border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] bg-[color-mix(in_srgb,var(--color-bg-deep)_98%,black)] py-2.5"
      aria-label="Sidetrack highlights"
    >
      <div className="animate-ticker flex w-max gap-2">
        <div className="flex shrink-0 items-center gap-2 pr-4">
          <TickerItems instanceId="a" />
        </div>
        <div className="flex shrink-0 items-center gap-2 pr-4" aria-hidden>
          <TickerItems instanceId="b" />
        </div>
      </div>
    </div>
  );
}
