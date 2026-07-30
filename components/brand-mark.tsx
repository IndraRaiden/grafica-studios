import { brand, theme } from "@/lib/brand";

interface BrandMarkProps {
  /** Applied to the <img> when the brand ships a logo file. */
  imgClassName?: string;
  /** Applied to the wordmark rendered when no logo file is configured. */
  textClassName?: string;
}

/**
 * The brand lockup.
 *
 * With no logo file configured, this renders a typographic wordmark rather than
 * plain text: the first word carries the weight, the rest is set light, and the
 * pair is tracked tight so it reads as a drawn mark instead of a heading. A
 * single-word brand simply renders in the heavy weight.
 */
export default function BrandMark({ imgClassName, textClassName }: BrandMarkProps) {
  if (brand.logo.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={brand.logo.src} alt={brand.name} className={imgClassName} />;
  }

  const [lead, ...rest] = brand.name.split(" ");
  const tail = rest.join(" ");

  return (
    <span
      className={textClassName}
      style={{
        color: theme.PAPER,
        fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
        letterSpacing: "-0.035em",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontWeight: 700 }}>{lead}</span>
      {tail && <span style={{ fontWeight: 300 }}>&nbsp;{tail}</span>}
    </span>
  );
}
