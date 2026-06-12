"use client";

import {
  motion,
  MotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";

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

/* Entrance: blur-in rise — delays wait for the curtains to part */
const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 28, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function One({ progress }: OneProps) {
  /* ---- THE DEVELOP — scroll pulls the camera back while color burns in ---- */
  const imageScale = useTransform(progress, [0, 0.85], [1.4, 1]);
  const imageY = useTransform(progress, [0, 0.85], [80, 0]);
  const imageRotate = useTransform(progress, [0, 0.85], [2, 0]);
  const saturation = useTransform(progress, [0.05, 0.5], [0, 1.08]);
  const brightness = useTransform(progress, [0.05, 0.5], [0.78, 1]);
  const imageFilter = useMotionTemplate`saturate(${saturation}) brightness(${brightness})`;
  /* violet duotone wash — burns away as the scene develops */
  const duotoneOpacity = useTransform(progress, [0.05, 0.5], [0.85, 0]);

  /* Depth-staggered parallax — top layers detach first, CTAs linger */
  const eyebrowY = useTransform(progress, [0, 1], [0, -90]);
  const headingY = useTransform(progress, [0, 1], [0, -60]);
  const subY = useTransform(progress, [0, 1], [0, -38]);
  const ctaY = useTransform(progress, [0, 1], [0, -18]);

  /* Content bows out just before the sticky frame releases */
  const contentOpacity = useTransform(progress, [0.78, 0.97], [1, 0]);

  /* Letterbox bars close the scene as the frame releases */
  const barTopY = useTransform(progress, [0.86, 1], ["-100%", "0%"]);
  const barBottomY = useTransform(progress, [0.86, 1], ["100%", "0%"]);

  /* Scroll cue dies the moment scrolling starts */
  const cueOpacity = useTransform(progress, [0, 0.06], [1, 0]);

  /* Progress rail — live counter + phase readout */
  const pct = useTransform(progress, (v) =>
    String(Math.min(100, Math.max(0, Math.round(v * 100)))).padStart(2, "0")
  );
  const phase = useTransform(progress, (v): string => (v < 0.5 ? "developing" : "in focus"));

  /* ---- Pointer choreography — the scene leans with the cursor ---- */
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const spotX = useSpring(50, { stiffness: 50, damping: 20 });
  const spotY = useSpring(38, { stiffness: 50, damping: 20 });
  const imageX = useTransform(mouseX, [-0.5, 0.5], [18, -18]);
  const contentX = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${spotX}% ${spotY}%, ${BLUE}26, transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const nx = e.clientX / window.innerWidth;
    mouseX.set(nx - 0.5);
    spotX.set(nx * 100);
    spotY.set((e.clientY / window.innerHeight) * 100);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Backdrop — single scene that develops from violet monochrome to full color */}
      <motion.div
        initial={{ opacity: 0, scale: 1.12, filter: "blur(18px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          style={{ scale: imageScale, y: imageY, x: imageX, rotate: imageRotate, filter: imageFilter }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src="/trial.jpg"
            alt="BlackStronghold Background"
            className="h-full w-full object-cover"
          />
          {/* duotone wash — paints the grayscale frame in brand violet until it develops */}
          <motion.div
            aria-hidden="true"
            style={{ opacity: duotoneOpacity, backgroundColor: BLUE, mixBlendMode: "color" }}
            className="absolute inset-0"
          />
        </motion.div>
        {/* ink wash keeps PAPER text legible and blends into the next section */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(${INK}B3 0%, ${INK}99 45%, ${INK} 100%)`,
          }}
        />
      </motion.div>

      {/* Cursor spotlight — a soft violet light that follows the pointer */}
      <motion.div
        aria-hidden="true"
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 z-[6]"
      />

      {/* Content — entrance blur-in, then depth-staggered scroll parallax */}
      <motion.div
        style={{ opacity: contentOpacity, x: contentX }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:px-8 lg:px-12"
      >
        <div className="flex flex-col items-center gap-6">
          {/* Eyebrow */}
          <motion.div style={{ y: eyebrowY }}>
            <motion.span
              {...reveal(0.5)}
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
              {...reveal(0.6)}
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
              {...reveal(0.7)}
              className="max-w-3xl text-lg leading-8 sm:text-xl"
              style={{ color: BODY }}
            >
              BlackStronghold builds AI-powered web apps that automate the work slowing you down — from lead capture and ticket triage to real-time tracking. Ready-to-deploy, built for results.
            </motion.p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div style={{ y: ctaY }}>
            <motion.div {...reveal(0.8)} className="mt-4 flex flex-wrap items-center justify-center gap-4">
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
        <motion.span
          className="font-mono text-[9px] uppercase tracking-[0.25em] [writing-mode:vertical-rl]"
          style={{ color: `${MUTED}66` }}
        >
          {phase}
        </motion.span>
      </div>

      {/* Scroll cue — fades out as soon as scrolling starts */}
      <motion.div style={{ opacity: cueOpacity }} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
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

      {/* Exit letterbox — black bars close the scene as the frame releases */}
      <motion.div
        aria-hidden="true"
        style={{ y: barTopY, backgroundColor: INK }}
        className="pointer-events-none absolute left-0 top-0 z-20 h-[11vh] w-full"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: barBottomY, backgroundColor: INK }}
        className="pointer-events-none absolute bottom-0 left-0 z-20 h-[11vh] w-full"
      />

      {/* Opening curtains — full-black panels that part once on load */}
      <motion.div
        aria-hidden="true"
        initial={{ y: "0%" }}
        animate={{ y: "-101%" }}
        transition={{ duration: 1.3, delay: 0.15, ease: [0.83, 0, 0.17, 1] }}
        style={{ backgroundColor: INK }}
        className="pointer-events-none absolute left-0 top-0 z-30 h-[51vh] w-full"
      />
      <motion.div
        aria-hidden="true"
        initial={{ y: "0%" }}
        animate={{ y: "101%" }}
        transition={{ duration: 1.3, delay: 0.15, ease: [0.83, 0, 0.17, 1] }}
        style={{ backgroundColor: INK }}
        className="pointer-events-none absolute bottom-0 left-0 z-30 h-[51vh] w-full"
      />
    </section>
  );
}
