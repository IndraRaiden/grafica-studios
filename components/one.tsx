"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

/* Palette tokens — mirrors three-wrapper.tsx */
const INK = "#000000";
const PAPER = "#EEF0FF";
const BODY = "#C7CBEA";
const MUTED = "#8B92C9";
const BLUE = "#8B5CF6";
const SPARK = "#34D399";

interface OneProps {
  /** Spring-smoothed scroll progress of the pinned hero, 0 → 1 */
  progress: MotionValue<number>;
}

/* Entrance: blur-in rise with an easeOutQuint-style curve */
const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 28, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function One({ progress }: OneProps) {
  /* Act II — trial.jpg arrives settling: fades in while easing from 1.18× and drifting up */
  const secondImageOpacity = useTransform(progress, [0.3, 0.62], [0, 1]);
  const secondImageScale = useTransform(progress, [0.3, 0.95], [1.18, 1]);
  const secondImageY = useTransform(progress, [0.3, 0.95], [60, 0]);

  /* Vignette dips like a cinema cut at the heart of the dissolve */
  const vignetteOpacity = useTransform(progress, [0.3, 0.46, 0.62], [0, 0.45, 0]);

  /* Depth-staggered parallax — top layers detach first, CTAs linger */
  const eyebrowY = useTransform(progress, [0, 1], [0, -90]);
  const headingY = useTransform(progress, [0, 1], [0, -60]);
  const subY = useTransform(progress, [0, 1], [0, -38]);
  const ctaY = useTransform(progress, [0, 1], [0, -18]);

  /* Content bows out just before the sticky frame releases */
  const contentOpacity = useTransform(progress, [0.8, 1], [1, 0]);

  /* Scroll cue dies the moment scrolling starts */
  const cueOpacity = useTransform(progress, [0, 0.06], [1, 0]);

  /* Progress rail + live counter */
  const pct = useTransform(progress, (v) =>
    String(Math.min(100, Math.max(0, Math.round(v * 100)))).padStart(2, "0")
  );

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Second Background Image — settles into frame as the first dissolves */}
      <motion.div
        style={{ opacity: secondImageOpacity, scale: secondImageScale, y: secondImageY }}
        className="absolute inset-0 z-0 will-change-transform"
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

      {/* Cinematic vignette — pulses during the crossfade */}
      <motion.div
        aria-hidden="true"
        style={{
          opacity: vignetteOpacity,
          background: `radial-gradient(ellipse at center, transparent 38%, ${INK} 100%)`,
        }}
        className="pointer-events-none absolute inset-0 z-[5]"
      />

      {/* Content — entrance blur-in, then depth-staggered scroll parallax */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:px-8 lg:px-12"
      >
        <div className="flex flex-col items-center gap-6">
          {/* Eyebrow */}
          <motion.div style={{ y: eyebrowY }}>
            <motion.span
              {...reveal(0)}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.35em] backdrop-blur-sm"
              style={{ color: MUTED, backgroundColor: `${INK}66` }}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: SPARK }} />
              AI software studio
            </motion.span>
          </motion.div>

          {/* Main heading */}
          <motion.div style={{ y: headingY }}>
            <motion.h1
              {...reveal(0.1)}
              className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl"
              style={{ color: PAPER }}
            >
              AI software.{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BLUE}, #A78BFA, ${SPARK}, ${BLUE})`,
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Built to scale
              </motion.span>{" "}
              your business.
            </motion.h1>
          </motion.div>

          {/* Subheading */}
          <motion.div style={{ y: subY }}>
            <motion.p
              {...reveal(0.2)}
              className="max-w-3xl text-lg leading-8 sm:text-xl"
              style={{ color: BODY }}
            >
              BlackStronghold builds AI-powered web apps that automate the work slowing you down — from lead capture and ticket triage to real-time tracking. Ready-to-deploy, built for results.
            </motion.p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div style={{ y: ctaY }}>
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
          </motion.div>
        </div>
      </motion.div>

      {/* Progress rail — live scene readout, desktop only */}
      <div
        className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
        aria-hidden="true"
      >
        <motion.span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: `${MUTED}99` }}>
          {pct}
        </motion.span>
        <div className="h-36 w-px overflow-hidden bg-white/10">
          <motion.div
            style={{ scaleY: progress, transformOrigin: "top", backgroundColor: SPARK }}
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Scroll cue — fades out as soon as scrolling starts */}
      <motion.div style={{ opacity: cueOpacity }} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col items-center gap-3"
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
      </motion.div>
    </section>
  );
}
