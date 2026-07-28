import { brand, theme } from "@/lib/brand";

interface BrandMarkProps {
  /** Applied to the <img> when the brand ships a logo file. */
  imgClassName?: string;
  /** Applied to the text wordmark rendered when no logo file is configured. */
  textClassName?: string;
}

/**
 * The brand lockup. Falls back to a text wordmark whenever `brand.logo.src` is
 * unset, so a brand without artwork still renders correctly.
 */
export default function BrandMark({ imgClassName, textClassName }: BrandMarkProps) {
  if (brand.logo.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={brand.logo.src} alt={brand.name} className={imgClassName} />;
  }

  return (
    <span className={textClassName} style={{ color: theme.PAPER }}>
      {brand.name}
    </span>
  );
}
