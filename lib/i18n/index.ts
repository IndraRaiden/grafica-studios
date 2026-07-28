import { brand } from "@/lib/brand";
import { es } from "./es";
import { en } from "./en";
import { isLocale, type Dictionary, type Locale } from "./types";

export { LOCALES, LOCALE_LABELS, isLocale } from "./types";
export type { Dictionary, Locale } from "./types";

const BUILDERS = { es, en } as const;

/** Locale the site renders with out of the box. Set NEXT_PUBLIC_LOCALE to change it. */
export const defaultLocale: Locale = isLocale(process.env.NEXT_PUBLIC_LOCALE)
  ? process.env.NEXT_PUBLIC_LOCALE
  : "es";

/**
 * Show the ES/EN toggle in the navbar. Set NEXT_PUBLIC_LOCALE_SWITCHER=false to
 * lock the site to `defaultLocale` with no way for visitors to change it.
 */
export const localeSwitcherEnabled = process.env.NEXT_PUBLIC_LOCALE_SWITCHER !== "false";

/** Copy for a locale, already bound to the active brand. */
export function getCopy(locale: Locale = defaultLocale): Dictionary {
  return BUILDERS[locale](brand);
}

/** Static copy for server rendering (metadata, global-error) — always `defaultLocale`. */
export const defaultCopy: Dictionary = getCopy(defaultLocale);

/** localStorage key holding a visitor's locale override. */
export const LOCALE_STORAGE_KEY = `${brand.id}:locale`;
