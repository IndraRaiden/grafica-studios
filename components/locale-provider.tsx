"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import {
  defaultLocale,
  getCopy,
  isLocale,
  LOCALE_STORAGE_KEY,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

/* localStorage is an external store, so the visitor's saved locale is read
   through useSyncExternalStore: the server and the hydration pass both see
   `defaultLocale`, and React swaps in the stored value right after. */
const listeners = new Set<() => void>();
let cached: Locale | null = null;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot(): Locale {
  if (cached === null) {
    try {
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
      cached = isLocale(saved) ? saved : defaultLocale;
    } catch {
      // Private mode / storage disabled — the env default stands.
      cached = defaultLocale;
    }
  }
  return cached;
}

function getServerSnapshot(): Locale {
  return defaultLocale;
}

function persist(next: Locale) {
  cached = next;
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  } catch {}
  listeners.forEach((notify) => notify());
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => persist(next), []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, copy: getCopy(locale) }),
    [locale, setLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}

/** Copy for the active locale, already bound to the active brand. */
export function useCopy(): Dictionary {
  return useLocale().copy;
}
