type Props = {
  label?: string;
  className?: string;
};

export function TrainDivider({ label, className = "" }: Props) {
  return (
    <div
      className={`relative flex w-full items-center gap-5 py-8 ${className}`}
      role="separator"
      aria-hidden={label ? undefined : true}
    >
      <svg
        className="h-px min-h-[1px] flex-1 text-[color-mix(in_srgb,var(--color-muted)_55%,transparent)]"
        viewBox="0 0 400 2"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M0 1h400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 10" vectorEffect="non-scaling-stroke" />
      </svg>
      {label ? (
        <span className="font-label max-w-[min(90vw,16rem)] shrink-0 text-center text-[0.62rem] font-medium uppercase tracking-[0.26em] text-[color-mix(in_srgb,var(--color-amber)_88%,var(--color-tan))]">
          {label}
        </span>
      ) : null}
      <svg
        className="h-px min-h-[1px] flex-1 text-[color-mix(in_srgb,var(--color-muted)_55%,transparent)]"
        viewBox="0 0 400 2"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M0 1h400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 10" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
