/* ------------------------------------------------------------------ */
/* Brand — every name, asset, contact point and color the site renders. */
/*                                                                     */
/* Pick a preset with NEXT_PUBLIC_BRAND (default: "computo").          */
/* Override individual fields with the NEXT_PUBLIC_* vars below without */
/* touching a preset — handy while assets are still in flight.         */
/* ------------------------------------------------------------------ */

export interface BrandTheme {
  INK: string; // page / section background
  CARD: string; // card surface
  PAPER: string; // primary text
  BODY: string; // body text
  MUTED: string; // labels / secondary
  BLUE: string; // primary accent
  VIOLET: string; // mid current
  ROYAL: string; // deep undercurrent
  SPARK: string; // results, packets, progress
  ON_ACCENT: string; // text sitting on top of BLUE
  GLOW: string; // accent-tinted shadow color
}

export interface Brand {
  /** Slug — also namespaces client-side storage keys. */
  id: string;
  /** Display name, used in copy and the copyright line. */
  name: string;
  /** Oversized ghost wordmark at the foot of the page. */
  wordmark: string;
  email: string;
  phone: {
    /** Human-readable, e.g. "+52 1 56 6395 4818" */
    display: string;
    /** tel: href target, digits only */
    tel: string;
    /** wa.me path, digits only */
    whatsapp: string;
  };
  logo: {
    /** Path under /public. `null` renders the wordmark as text instead. */
    src: string | null;
    /** Path to a favicon under /public. `null` falls back to app/favicon.ico. */
    favicon: string | null;
  };
  /** Hero backdrop under /public. */
  heroImage: string;
  social: {
    linkedin: string;
    instagram: string;
    pinterest: string;
  };
  /** Formspree (or compatible) endpoint the contact form POSTs to. */
  formEndpoint: string;
  theme: BrandTheme;
}

/* Shared palette — both presets ship the same violet/mint system today.
   Swap a preset's `theme` to re-skin a brand end to end. */
const VIOLET_SYSTEM: BrandTheme = {
  INK: "#000000",
  CARD: "#0E1335",
  PAPER: "#EEF0FF",
  BODY: "#C7CBEA",
  MUTED: "#8B92C9",
  BLUE: "#8B5CF6",
  VIOLET: "#6D28D9",
  ROYAL: "#4C1D95",
  SPARK: "#34D399",
  ON_ACCENT: "#0A0E27",
  GLOW: "rgba(139,92,246,0.35)",
};

const computo: Brand = {
  id: "computo-espacial",
  name: "Computo Espacial",
  wordmark: "COMPUTO ESPACIAL",
  email: "hola@computoespacial.com",
  phone: {
    display: "+52 1 56 6395 4818",
    tel: "+5215663954818",
    whatsapp: "5215663954818",
  },
  // Transparent artwork is shared by every <BrandMark> placement; the square
  // derivative keeps the same mark legible in browser and device icon slots.
  logo: {
    src: "/logo-computo-transparent.png",
    favicon: "/favicon-computo.png",
  },
  heroImage: "/trial.jpg",
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    pinterest: "https://pinterest.com",
  },
  formEndpoint: "https://formspree.io/f/mlgklbpn",
  theme: VIOLET_SYSTEM,
};

const blackstronghold: Brand = {
  id: "blackstronghold",
  name: "BlackStronghold",
  wordmark: "BLACKSTRONGHOLD",
  email: "sales@blackstronghold.com",
  phone: {
    display: "+52 1 56 6395 4818",
    tel: "+5215663954818",
    whatsapp: "5215663954818",
  },
  logo: { src: "/logostrong.jpg", favicon: "/logostrong.ico" },
  heroImage: "/trial.jpg",
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    pinterest: "https://pinterest.com",
  },
  formEndpoint: "https://formspree.io/f/mlgklbpn",
  theme: VIOLET_SYSTEM,
};

export const BRANDS = { computo, blackstronghold } as const;
export type BrandId = keyof typeof BRANDS;

/* Blank strings count as unset — an empty env var should not erase a preset. */
const or = <T,>(value: string | undefined, fallback: T): string | T =>
  value && value.trim() ? value.trim() : fallback;

/* NEXT_PUBLIC_* reads must be written out literally so Next can inline them. */
const preset = BRANDS[(process.env.NEXT_PUBLIC_BRAND ?? "computo") as BrandId] ?? computo;

export const brand: Brand = {
  ...preset,
  name: or(process.env.NEXT_PUBLIC_BRAND_NAME, preset.name),
  wordmark: or(process.env.NEXT_PUBLIC_BRAND_WORDMARK, preset.wordmark),
  email: or(process.env.NEXT_PUBLIC_BRAND_EMAIL, preset.email),
  phone: {
    display: or(process.env.NEXT_PUBLIC_BRAND_PHONE_DISPLAY, preset.phone.display),
    tel: or(process.env.NEXT_PUBLIC_BRAND_PHONE_TEL, preset.phone.tel),
    whatsapp: or(process.env.NEXT_PUBLIC_BRAND_WHATSAPP, preset.phone.whatsapp),
  },
  logo: {
    src: or(process.env.NEXT_PUBLIC_LOGO_SRC, preset.logo.src),
    favicon: or(process.env.NEXT_PUBLIC_FAVICON_SRC, preset.logo.favicon),
  },
  formEndpoint: or(process.env.NEXT_PUBLIC_FORM_ENDPOINT, preset.formEndpoint),
};

/** Palette tokens — imported by every section instead of local consts. */
export const theme = brand.theme;
