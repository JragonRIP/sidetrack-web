import Image from "next/image";

type Ratio = "landscape" | "wide" | "portrait";

const ratioClass = (ratio: Ratio, compact: boolean): string => {
  if (compact) {
    const m: Record<Ratio, string> = {
      landscape: "aspect-[3/2]",
      wide: "aspect-[5/3]",
      portrait: "aspect-[3/4]",
    };
    return m[ratio];
  }
  const d: Record<Ratio, string> = {
    landscape: "aspect-[16/10]",
    wide: "aspect-[2/1]",
    portrait: "aspect-[4/5]",
  };
  return d[ratio];
};

const BRAND_QUALITY = 92;

type Props = {
  src: string;
  alt: string;
  caption: string;
  ratio?: Ratio;
  priority?: boolean;
  className?: string;
  objectFit?: "cover" | "contain";
  compact?: boolean;
};

export function BrandFigure({
  src,
  alt,
  caption,
  ratio = "landscape",
  priority,
  className = "",
  objectFit = "cover",
  compact = false,
}: Props) {
  const fit =
    objectFit === "contain"
      ? "object-contain bg-[color-mix(in_srgb,var(--color-bg-card)_96%,black)]"
      : "object-cover";

  const wrapMax = compact ? "max-w-md sm:max-w-lg" : "max-w-4xl";

  return (
    <figure className={`mx-auto w-full ${wrapMax} ${className}`}>
      <div
        className={`relative w-full overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--color-border)_50%,transparent)] ${compact ? "shadow-[0_10px_28px_rgba(0,0,0,0.2)]" : "shadow-[0_22px_60px_rgba(0,0,0,0.32)]"} ${ratioClass(ratio, compact)}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          quality={BRAND_QUALITY}
          sizes={
            compact
              ? "(max-width: 640px) 92vw, 520px"
              : "(max-width: 768px) 96vw, (max-width: 1280px) 800px, 960px"
          }
          className={fit}
          priority={priority}
        />
      </div>
      <figcaption
        className={`font-body mx-auto text-[color-mix(in_srgb,var(--color-muted)_98%,transparent)] ${compact ? "mt-3 max-w-md text-left text-[0.76rem] leading-snug sm:text-[0.8rem]" : "mt-4 max-w-2xl text-center text-[0.82rem] leading-relaxed"}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
