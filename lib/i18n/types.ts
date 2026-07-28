import type { es } from "./es";

/** Canonical copy shape — every other locale is typed against Spanish. */
export type Dictionary = ReturnType<typeof es>;

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}
