"use client";

import { motion } from "framer-motion";
import { Search, Code, FlaskConical, Rocket } from "lucide-react";
import { useCopy } from "./locale-provider";
import { theme } from "@/lib/brand";

const { INK, CARD, PAPER, BODY, MUTED, BLUE, SPARK } = theme;

/* Icons stay in code — the dictionary only carries copy. */
const STEP_ICONS = [Search, Code, FlaskConical, Rocket];

/* Staggered fade-up on scroll — same cadence as the hero's entrance */
const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export default function Four() {
  const { process } = useCopy();
  const steps = process.steps.map((step, i) => ({ ...step, icon: STEP_ICONS[i] }));

  return (
    <section
      id="process"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: INK }}
    >
      {/* Background decoration — faint indigo glow + vertical guide lines */}
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(900px 600px at 50% 30%, ${BLUE}14, transparent 70%)` }}
      />
      <div
        className="absolute left-1/4 top-0 h-full w-px"
        style={{ background: `linear-gradient(transparent, ${MUTED}33, transparent)` }}
      />
      <div
        className="absolute right-1/3 top-0 h-full w-px"
        style={{ background: `linear-gradient(transparent, ${MUTED}33, transparent)` }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header — staggered reveal, hero-style */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            {...reveal(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.35em] backdrop-blur-sm"
            style={{ color: MUTED, backgroundColor: `${INK}66` }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: SPARK }} />
            {process.eyebrow}
          </motion.span>
          <motion.h2
            {...reveal(0.1)}
            className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: PAPER }}
          >
            {process.headingLead}{" "}
            <br className="hidden sm:block" />
            <span style={{ color: BLUE }}>{process.headingAccent}</span>
          </motion.h2>
          <motion.p {...reveal(0.2)} className="mt-6 text-lg leading-8" style={{ color: BODY }}>
            {process.sub}
          </motion.p>
        </div>

        {/* Process steps */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="grid gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Animated connector line with a traveling pulse, echoing the hero's scroll cue */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="absolute left-8 top-24 hidden w-px overflow-hidden lg:block"
                    style={{ background: `linear-gradient(${BLUE}80, ${BLUE}1A)` }}
                  >
                    <motion.div
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.8,
                        repeatDelay: 1.2,
                      }}
                      className="h-full w-full"
                      style={{ background: `linear-gradient(transparent 20%, ${SPARK} 50%, transparent 80%)` }}
                    />
                  </motion.div>
                )}

                <div
                  className="brand-lift relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 sm:p-8 lg:flex-row lg:items-start lg:gap-8"
                  style={{ backgroundColor: `${CARD}D9` }}
                >
                  {/* Corner glow accent */}
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle, ${BLUE}26, transparent 70%)` }}
                  />

                  {/* Step number and icon */}
                  <div className="relative flex shrink-0 flex-col items-center gap-4 lg:items-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <step.icon className="h-7 w-7" style={{ color: MUTED }} />
                    </div>
                    {/* Large mono number */}
                    <div
                      className="font-mono text-6xl font-semibold tabular-nums tracking-tight lg:text-7xl"
                      style={{ color: `${BLUE}40` }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="hidden items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] lg:flex lg:justify-start" style={{ color: `${MUTED}B3` }}>
                      <span className="h-1 w-1 animate-pulse rounded-full" style={{ backgroundColor: SPARK }} />
                      {process.stepLabel} {step.number}
                    </div>
                    <h3
                      className="mt-1 text-xl font-medium leading-snug tracking-tight sm:text-2xl"
                      style={{ color: PAPER }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-7" style={{ color: BODY }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#contact"
            className="rounded-full px-8 py-4 text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
            style={{ backgroundColor: BLUE, color: theme.ON_ACCENT }}
          >
            {process.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
