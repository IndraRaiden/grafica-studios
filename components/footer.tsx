"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Image, Mail, MapPin, ArrowUp } from "lucide-react";
import BrandMark from "./brand-mark";
import { useCopy, useLocale } from "./locale-provider";
import { brand, theme } from "@/lib/brand";

const { INK, PAPER, BODY, MUTED, BLUE, VIOLET, ROYAL, SPARK } = theme;

/* Staggered fade-up on scroll — same cadence as the hero's entrance */
const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

/* ------------------------------------------------------------------ */
/* Flow field — a quieter reprise of the case-studies currents         */
/* ------------------------------------------------------------------ */

const FIELD_W = 4800;
const FIELD_H = 600;

function wavePath(y: number, amp: number, p: number): string {
  const reps = Math.ceil(FIELD_W / p) + 1;
  const c1 = Math.round(p / 3);
  const c2 = Math.round((2 * p) / 3);
  let d = `M0 ${y}`;
  for (let i = 0; i < reps; i++) d += ` c${c1} ${-amp} ${c2} ${amp} ${p} 0`;
  return d;
}

const WAVES = [
  { y: 320, amp: 64, p: 520, w: 80, color: ROYAL, o: 0.12, dur: 40 },
  { y: 230, amp: 48, p: 380, w: 1.5, color: BLUE, o: 0.28, dur: 24 },
  { y: 280, amp: 56, p: 330, w: 2, color: VIOLET, o: 0.4, dur: 18 },
  { y: 270, amp: 52, p: 330, w: 3, color: SPARK, o: 0.8, dur: 20, dash: { array: "0 28", loop: 560, dur: 8 } },
] as const;

function FlowField() {
  return (
    <svg
      data-flow-ftr
      aria-hidden="true"
      className="absolute left-0 top-0 h-full"
      style={{ width: FIELD_W }}
      viewBox={`0 0 ${FIELD_W} ${FIELD_H}`}
      preserveAspectRatio="none"
      fill="none"
    >
      {WAVES.map((wv, i) => (
        <g
          key={i}
          style={
            {
              "--p": wv.p,
              animation: `ftr-flow-x ${wv.dur}s linear infinite`,
            } as React.CSSProperties
          }
        >
          <path
            d={wavePath(wv.y, wv.amp, wv.p)}
            stroke={wv.color}
            strokeWidth={wv.w}
            strokeLinecap={"dash" in wv ? "round" : "butt"}
            strokeDasharray={"dash" in wv ? wv.dash.array : undefined}
            opacity={wv.o}
            style={
              "dash" in wv
                ? ({
                    "--d": wv.dash.loop,
                    animation: `ftr-dash-x ${wv.dash.dur}s linear infinite`,
                  } as React.CSSProperties)
                : undefined
            }
          />
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Live status clock — avoids hydration mismatch by mounting first     */
/* ------------------------------------------------------------------ */

function StatusClock() {
  const { locale, copy } = useLocale();
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString(locale, { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [locale]);
  return (
    <span className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: MUTED }}>
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ backgroundColor: SPARK }} />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SPARK }} />
      </span>
      {copy.footer.status}
      <span className="tabular-nums" style={{ color: `${MUTED}99` }}>{time ?? "--:--:--"}</span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

const SECTIONS = ["home", "services", "portfolio", "process", "contact"] as const;

export default function Footer() {
  const copy = useCopy();
  const marqueeItems = copy.footer.products;

  const navigateLinks = SECTIONS.map((id) => ({
    name: copy.nav.links[id],
    href: `#${id}`,
  }));

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: brand.social.linkedin },
    { name: "Instagram", icon: Instagram, href: brand.social.instagram },
    { name: "Pinterest", icon: Image, href: brand.social.pinterest },
  ];

  const marqueeRow = (
    <>
      {marqueeItems.map((item) => (
        <span key={item} className="flex shrink-0 items-center gap-8 pr-8">
          <span style={{ color: MUTED }}>{item}</span>
          <span style={{ color: `${BLUE}99` }}>✦</span>
        </span>
      ))}
    </>
  );

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      <style>{`
        @keyframes ftr-flow-x { to { transform: translateX(calc(var(--p) * -1px)); } }
        @keyframes ftr-dash-x { to { stroke-dashoffset: calc(var(--d) * -1px); } }
        @keyframes ftr-marquee { to { transform: translateX(-50%); } }
        @keyframes ftr-shimmer { to { background-position: -200% 0; } }
        @media (prefers-reduced-motion: reduce) {
          [data-flow-ftr] g, [data-flow-ftr] path, .ftr-marquee, .ftr-shimmer { animation: none !important; }
        }
      `}</style>

      {/* ---------------- CTA finale over the flow field ---------------- */}
      <div className="relative border-b border-white/5">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <FlowField />
          {/* keep the headline legible where the currents run */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(1100px 480px at 50% 45%, ${INK}33 0%, ${INK}CC 75%), linear-gradient(${INK} 0%, ${INK}00 35%, ${INK}00 65%, ${INK} 100%)`,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
          <div className="flex flex-col items-center gap-8 text-center">
            <motion.span
              {...reveal(0)}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.35em] backdrop-blur-sm"
              style={{ color: MUTED, backgroundColor: `${INK}66` }}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: SPARK }} />
              {copy.footer.eyebrow}
            </motion.span>

            <motion.h2
              {...reveal(0.1)}
              className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
              style={{ color: PAPER }}
            >
              {copy.footer.headingLead}{" "}
              <span
                className="ftr-shimmer"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BLUE}, ${SPARK}, ${BLUE})`,
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  animation: "ftr-shimmer 6s linear infinite",
                }}
              >
                {copy.footer.headingAccent}
              </span>
            </motion.h2>

            <motion.p {...reveal(0.2)} className="max-w-xl text-lg leading-8" style={{ color: BODY }}>
              {copy.footer.sub}
            </motion.p>

            <motion.div {...reveal(0.3)} className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="group relative overflow-hidden rounded-full px-10 py-4 text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
                style={{ backgroundColor: BLUE, color: theme.ON_ACCENT }}
              >
                <span className="relative z-10">{copy.footer.ctaPrimary}</span>
                <span className="absolute inset-y-0 -left-1/2 z-0 w-1/3 -skew-x-12 bg-white/30 opacity-0 blur-sm transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-white/15 px-10 py-4 text-sm font-semibold backdrop-blur-sm transition-all hover:scale-105 hover:border-white/30"
                style={{ color: BODY, backgroundColor: `${INK}66` }}
              >
                {copy.footer.ctaSecondary}
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------------- Product marquee ---------------- */}
      <div
        className="relative overflow-hidden border-b border-white/5 py-5"
        aria-hidden="true"
      >
        <div
          className="ftr-marquee flex w-max font-mono text-[11px] uppercase tracking-[0.3em]"
          style={{ animation: "ftr-marquee 36s linear infinite" }}
        >
          {marqueeRow}
          {marqueeRow}
        </div>
      </div>

      {/* ---------------- Main grid ---------------- */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Brand */}
          <motion.div {...reveal(0)} className="lg:col-span-5">
            <a href="#home" className="mb-8 inline-block">
              <BrandMark
                imgClassName="h-10 w-auto object-contain"
                textClassName="text-xl"
              />
            </a>
            <p className="mb-8 max-w-sm text-sm leading-relaxed" style={{ color: BODY }}>
              {copy.footer.blurb}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm" style={{ color: BODY }}>
                <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: MUTED }} />
                <span>{copy.footer.location}</span>
              </div>
              <a
                href={`mailto:${brand.email}`}
                className="group flex items-center gap-3 text-sm transition-colors hover:text-brand-paper"
                style={{ color: BODY }}
              >
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: MUTED }} />
                <span>{brand.email}</span>
              </a>
              <div className="pt-2">
                <StatusClock />
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div {...reveal(0.15)} className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
              <div>
                <h4 className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: MUTED }}>
                  {copy.footer.navigate}
                </h4>
                <ul className="space-y-4">
                  {navigateLinks.map((link, i) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group inline-flex items-baseline gap-3 text-sm transition-colors hover:text-brand-paper"
                        style={{ color: BODY }}
                      >
                        <span className="font-mono text-[10px] tabular-nums" style={{ color: `${BLUE}99` }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand-accent after:transition-all after:duration-300 group-hover:after:w-full">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: MUTED }}>
                  {copy.footer.productsTitle}
                </h4>
                <ul className="space-y-4">
                  {marqueeItems.slice(0, 4).map((item) => (
                    <li key={item}>
                      <a
                        href="#services"
                        className="relative inline-block text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand-accent after:transition-all after:duration-300 hover:text-brand-paper hover:after:w-full"
                        style={{ color: BODY }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: MUTED }}>
                  {copy.footer.connect}
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-full border border-white/15 transition-all hover:-translate-y-1 hover:border-brand-accent/60 hover:text-brand-accent"
                      style={{ color: BODY }}
                    >
                      <social.icon className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <p className="font-mono text-[11px] tracking-wide" style={{ color: `${MUTED}99` }}>
            {copy.footer.rights(new Date().getFullYear())}
          </p>
          <button
            type="button"
            onClick={() => {
              try {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } catch {
                window.scrollTo(0, 0);
              }
            }}
            className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-brand-paper"
            style={{ color: MUTED }}
          >
            {copy.footer.backToTop}
            <span className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-all group-hover:-translate-y-1 group-hover:border-brand-accent/60 group-hover:text-brand-accent">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>

      {/* ---------------- Giant ghost wordmark ---------------- */}
      <div className="pointer-events-none relative select-none" aria-hidden="true">
        <div
          className="ftr-shimmer translate-y-[22%] whitespace-nowrap text-center font-black leading-none tracking-tighter"
          style={{
            fontSize: "clamp(3.5rem, 12.5vw, 13rem)",
            backgroundImage: `linear-gradient(90deg, ${BLUE}33, ${SPARK}33, ${VIOLET}33, ${BLUE}33)`,
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            animation: "ftr-shimmer 12s linear infinite",
          }}
        >
          {brand.wordmark}
        </div>
        {/* fade the wordmark into the page edge */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{ background: `linear-gradient(${INK}00, ${INK}99)` }}
        />
      </div>
    </footer>
  );
}
