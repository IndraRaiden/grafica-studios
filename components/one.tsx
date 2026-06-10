"use client";

import { motion, MotionValue } from "framer-motion";

/* Palette tokens — mirrors three-wrapper.tsx */
const INK = "#000000";
const PAPER = "#EEF0FF";
const BODY = "#C7CBEA";
const MUTED = "#8B92C9";
const BLUE = "#8B5CF6";
const SPARK = "#34D399";

interface OneProps {
  secondImageOpacity: MotionValue<number>;
}

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export default function One({ secondImageOpacity }: OneProps) {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image controlled by parent */}
      <motion.div
        style={{ opacity: secondImageOpacity }}
        className="absolute inset-0 z-0"
      >
        {/* ink wash keeps PAPER text legible and blends into the next section */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(${INK}B3 0%, ${INK}99 45%, ${INK} 100%)`,
          }}
        />
        <img
          src="/trial.jpg"
          alt="BlackStronghold Background"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Content - Always Visible */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-6">
          {/* Eyebrow */}
          <motion.span
            {...reveal(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.35em] backdrop-blur-sm"
            style={{ color: MUTED, backgroundColor: `${INK}66` }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: SPARK }} />
            AI software studio
          </motion.span>

          {/* Main heading */}
          <motion.h1
            {...reveal(0.1)}
            className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl"
            style={{ color: PAPER }}
          >
            AI software.{" "}
            <span style={{ color: BLUE }}>Built to scale</span>{" "}
            your business.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            {...reveal(0.2)}
            className="max-w-3xl text-lg leading-8 sm:text-xl"
            style={{ color: BODY }}
          >
            BlackStronghold builds AI-powered web apps that automate the work slowing you down — from lead capture and ticket triage to real-time tracking. Ready-to-deploy, built for results.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...reveal(0.3)} className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="rounded-full px-8 py-3.5 text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: BLUE, color: "#0A0E27" }}
            >
              See Our Products
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all hover:scale-105 hover:border-white/30"
              style={{ color: BODY, backgroundColor: `${INK}66` }}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: `${MUTED}99` }}>
          Scroll
        </span>
        <div className="h-8 w-px overflow-hidden bg-white/10">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full"
            style={{ backgroundColor: SPARK }}
          />
        </div>
      </motion.div>
    </section>
  );
}
