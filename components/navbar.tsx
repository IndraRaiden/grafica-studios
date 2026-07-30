"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import BrandMark from "./brand-mark";
import { useLocale } from "./locale-provider";
import { brand, theme } from "@/lib/brand";
import { LOCALES, LOCALE_LABELS, localeSwitcherEnabled } from "@/lib/i18n";

const { INK, PAPER, BODY, MUTED, BLUE, SPARK } = theme;

const SECTIONS = ["home", "services", "portfolio", "process", "contact"] as const;

export default function Navbar() {
  const { copy, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  const LINKS = SECTIONS.map((id) => ({ name: copy.nav.links[id], href: `#${id}` }));

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 32));

  /* Track which section is in view — drives the sliding indicator */
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = SECTIONS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Lock page scroll behind the mobile overlay */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-6">
        <motion.nav
          initial={false}
          animate={scrolled ? "pill" : "top"}
          variants={{
            top: {
              marginTop: 16,
              paddingTop: 12,
              paddingBottom: 12,
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgba(255,255,255,0)",
              boxShadow: "0 0 0 0 rgba(0,0,0,0)",
              backdropFilter: "blur(0px)",
            },
            pill: {
              marginTop: 12,
              paddingTop: 8,
              paddingBottom: 8,
              backgroundColor: "rgba(2,4,16,0.7)",
              borderColor: "rgba(255,255,255,0.1)",
              boxShadow: "0 16px 48px -16px rgba(139,92,246,0.25)",
              backdropFilter: "blur(16px)",
            },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex w-full max-w-7xl items-center justify-between rounded-full border px-5 sm:px-6"
        >
          {/* Logo */}
          <a href="#home" className="shrink-0">
            <BrandMark
              imgClassName={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-9" : "h-12"}`}
              textClassName={`block transition-all duration-300 ${scrolled ? "text-base" : "text-lg"}`}
            />
          </a>

          {/* Desktop links with sliding active indicator */}
          <ul className="hidden items-center md:flex">
            {LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    className="relative block rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300"
                    style={{ color: isActive ? PAPER : MUTED }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                        className="absolute inset-0 rounded-full border border-white/10 bg-white/10"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {isActive && (
                        <span
                          className="h-1 w-1 animate-pulse rounded-full"
                          style={{ backgroundColor: SPARK }}
                        />
                      )}
                      {link.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            {localeSwitcherEnabled && (
              <div
                role="group"
                aria-label={copy.meta.localeSwitchLabel}
                className="flex items-center rounded-full border border-white/15 p-0.5"
              >
                {LOCALES.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLocale(code)}
                    aria-pressed={locale === code}
                    className="rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] transition-colors"
                    style={
                      locale === code
                        ? { backgroundColor: `${BLUE}33`, color: PAPER }
                        : { color: MUTED }
                    }
                  >
                    {LOCALE_LABELS[code]}
                  </button>
                ))}
              </div>
            )}
            <a
              href={`tel:${brand.phone.tel}`}
              aria-label={copy.nav.callAria}
              className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-brand-accent/60 hover:text-brand-accent"
              style={{ color: BODY }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.279-.087.431l4.108 7.293a.414.414 0 00.431.087l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="rounded-full px-5 py-2 text-xs font-bold transition-all hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: BLUE, color: theme.ON_ACCENT }}
            >
              {copy.nav.cta}
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? copy.nav.closeMenu : copy.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/30 md:hidden"
            style={{ color: BODY }}
          >
            <span className="relative block h-3 w-4">
              <motion.span
                animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 top-0 block h-px w-4 bg-current"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 top-[5px] block h-px w-4 bg-current"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 top-[10px] block h-px w-4 bg-current"
              />
            </span>
          </button>
        </motion.nav>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-xl md:hidden"
            style={{ backgroundColor: `${INK}F2` }}
          >
            <nav className="flex h-full flex-col justify-center px-8">
              <ul>
                {LINKS.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: "easeOut" }}
                    className="border-b border-white/5 last:border-0"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-5 py-4"
                    >
                      <span className="font-mono text-xs tabular-nums" style={{ color: BLUE }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="text-3xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2"
                        style={{ color: active === link.href ? PAPER : BODY }}
                      >
                        {link.name}
                      </span>
                      {active === link.href && (
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: SPARK }} />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + LINKS.length * 0.07, ease: "easeOut" }}
                className="mt-10 flex items-center gap-4"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full px-7 py-3 text-sm font-bold transition-all hover:brightness-110"
                  style={{ backgroundColor: BLUE, color: theme.ON_ACCENT }}
                >
                  {copy.nav.cta}
                </a>
                <a
                  href={`tel:${brand.phone.tel}`}
                  className="rounded-full border border-white/15 px-7 py-3 font-mono text-xs uppercase tracking-[0.2em]"
                  style={{ color: MUTED }}
                >
                  {copy.nav.callUs}
                </a>
              </motion.div>

              {localeSwitcherEnabled && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.17 + LINKS.length * 0.07, ease: "easeOut" }}
                  className="mt-6 flex items-center gap-2"
                  role="group"
                  aria-label={copy.meta.localeSwitchLabel}
                >
                  {LOCALES.map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLocale(code)}
                      aria-pressed={locale === code}
                      className="rounded-full border px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] transition-colors"
                      style={
                        locale === code
                          ? { borderColor: `${BLUE}80`, backgroundColor: `${BLUE}26`, color: PAPER }
                          : { borderColor: "rgba(255,255,255,0.15)", color: MUTED }
                      }
                    >
                      {LOCALE_LABELS[code]}
                    </button>
                  ))}
                </motion.div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
