"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionTemplate, useSpring } from "framer-motion";
import { useCopy } from "./locale-provider";
import { theme } from "@/lib/brand";

/* ------------------------------------------------------------------ */
/* Types — same public contract as before, plus optional copy props    */
/* ------------------------------------------------------------------ */

interface Project {
  client: string;
  title: string;
  category: string;
  stat: string;
  statLabel: string;
  problem: string;
  solution: string;
  result: string;
}

interface ThreeWrapperProps {
  projects: Project[];
  eyebrow?: string;
  heading?: React.ReactNode;
}

const { INK, CARD, PAPER, BODY, MUTED, BLUE, VIOLET, ROYAL, SPARK } = theme;

/* ------------------------------------------------------------------ */
/* Flow field — layered seamless currents + a dashed "packet" stream   */
/* ------------------------------------------------------------------ */

const FIELD_W = 4800;
const FIELD_H = 600;

/** Seamless periodic wave: repeats every `p` units, so a translateX(-p)
 *  loop is invisible. Cubic tangents match at every joint. */
function wavePath(y: number, amp: number, p: number): string {
  const reps = Math.ceil(FIELD_W / p) + 1;
  const c1 = Math.round(p / 3);
  const c2 = Math.round((2 * p) / 3);
  let d = `M0 ${y}`;
  for (let i = 0; i < reps; i++) d += ` c${c1} ${-amp} ${c2} ${amp} ${p} 0`;
  return d;
}

interface Wave {
  y: number;
  amp: number;
  p: number; // period (== loop distance)
  w: number; // stroke width
  color: string;
  o: number; // opacity
  dur: number; // drift duration (s)
  floatDur?: number; // optional vertical breathing (s)
  dash?: { array: string; loop: number; dur: number };
}

const WAVES: Wave[] = [
  { y: 300, amp: 70, p: 520, w: 90, color: ROYAL, o: 0.14, dur: 38 }, // undercurrent
  { y: 120, amp: 30, p: 420, w: 1, color: MUTED, o: 0.16, dur: 30 },
  { y: 210, amp: 52, p: 360, w: 1.5, color: BLUE, o: 0.32, dur: 22, floatDur: 11 },
  { y: 262, amp: 60, p: 320, w: 2, color: BLUE, o: 0.6, dur: 16, floatDur: 9 }, // hero line
  { y: 380, amp: 46, p: 460, w: 1.25, color: VIOLET, o: 0.3, dur: 26 },
  { y: 470, amp: 34, p: 400, w: 1, color: MUTED, o: 0.14, dur: 34, floatDur: 13 },
  {
    y: 252,
    amp: 58,
    p: 320,
    w: 3,
    color: SPARK,
    o: 0.9,
    dur: 18,
    dash: { array: "0 26", loop: 520, dur: 7 }, // 26 × 20 → seamless offset loop
  },
];

function FlowField() {
  return (
    <svg
      data-flow
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
              animation: `cs-flow-x ${wv.dur}s linear infinite`,
            } as React.CSSProperties
          }
        >
          <path
            d={wavePath(wv.y, wv.amp, wv.p)}
            stroke={wv.color}
            strokeWidth={wv.w}
            strokeLinecap={wv.dash ? "round" : "butt"}
            strokeDasharray={wv.dash?.array}
            opacity={wv.o}
            style={
              {
                "--d": wv.dash?.loop ?? 0,
                animation: [
                  wv.floatDur ? `cs-flow-y ${wv.floatDur}s ease-in-out infinite alternate` : "",
                  wv.dash ? `cs-dash-x ${wv.dash.dur}s linear infinite` : "",
                ]
                  .filter(Boolean)
                  .join(", ") || undefined,
              } as React.CSSProperties
            }
          />
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Stat — counts up from zero when it scrolls into view                */
/* ------------------------------------------------------------------ */

function StatValue({ value }: { value: string }) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-15% 0px" });

  const m = value.match(/-?\d[\d,]*(\.\d+)?/);
  const num = m ? parseFloat(m[0].replace(/,/g, "")) : null;
  const prefix = m ? value.slice(0, m.index) : value;
  const suffix = m ? value.slice((m.index ?? 0) + m[0].length) : "";
  const decimals = m?.[1] ? m[1].length - 1 : 0;

  useEffect(() => {
    if (!inView || num === null || !numRef.current) return;
    const node = numRef.current;
    const controls = animate(0, num, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = v.toFixed(decimals);
      },
    });
    return () => controls.stop();
  }, [inView, num, decimals]);

  return (
    <span ref={wrapRef}>
      {prefix}
      {num !== null && <span ref={numRef}>{(0).toFixed(decimals)}</span>}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Card — 3D pointer tilt with a glare sweep                           */
/* ------------------------------------------------------------------ */

function CaseCard({ project }: { project: Project }) {
  const { carousel } = useCopy().portfolio;
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });
  const glareX = useSpring(50, { stiffness: 120, damping: 22 });
  const glareY = useSpring(50, { stiffness: 120, damping: 22 });
  const glare = useMotionTemplate`radial-gradient(460px circle at ${glareX}% ${glareY}%, rgba(238,240,255,0.08), transparent 65%)`;

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rotateY.set((px - 0.5) * 5);
    rotateX.set(-(py - 0.5) * 5);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };
  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", backgroundColor: `${CARD}D9` }}
      className="group brand-lift relative flex h-full flex-col rounded-2xl border border-white/10 p-7 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-brand-accent/40 sm:p-8"
    >
      {/* glare sweep — follows the pointer across the card surface */}
      <motion.div
        aria-hidden="true"
        style={{ background: glare }}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs tracking-wide" style={{ color: PAPER }}>
          {project.client}
        </span>
        <span
          className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]"
          style={{ color: MUTED }}
        >
          {project.category}
        </span>
      </div>

      <h3
        className="mt-5 text-xl font-medium leading-snug tracking-tight sm:text-2xl"
        style={{ color: PAPER }}
      >
        {project.title}
      </h3>

      <div className="mt-7">
        <div
          className="font-mono text-5xl font-semibold tabular-nums tracking-tight sm:text-6xl"
          style={{ color: BLUE }}
        >
          <StatValue value={project.stat} />
        </div>
        <div className="mt-1.5 text-xs" style={{ color: MUTED }}>
          {project.statLabel}
        </div>
      </div>

      <dl className="mt-7 grid flex-1 auto-rows-min grid-cols-[84px_1fr] gap-x-4 gap-y-4 border-t border-white/10 pt-6">
        {(
          [
            [carousel.problem, project.problem, `${MUTED}B3`, BODY],
            [carousel.solution, project.solution, `${MUTED}B3`, BODY],
            [carousel.result, project.result, SPARK, PAPER],
          ] as const
        ).map(([label, text, labelColor, textColor]) => (
          <div key={label} className="contents">
            <dt
              className="pt-0.5 font-mono text-[10px] uppercase tracking-[0.25em]"
              style={{ color: labelColor }}
            >
              {label}
            </dt>
            <dd className="text-sm leading-relaxed" style={{ color: textColor }}>
              {text}
            </dd>
          </div>
        ))}
      </dl>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function ThreeWrapper({ projects, eyebrow, heading }: ThreeWrapperProps) {
  const { carousel } = useCopy().portfolio;

  const sectionEyebrow = eyebrow ?? carousel.eyebrow;
  const sectionHeading = heading ?? (
    <>
      {carousel.headingLead} <span style={{ color: BLUE }}>{carousel.headingAccent}</span>
    </>
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0 });

  const [active, setActive] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const syncScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;

    if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
    if (fieldRef.current)
      fieldRef.current.style.transform = `translateX(${-el.scrollLeft * 0.1}px)`;

    /* Cover-flow depth: cards recede as they leave the track's center */
    const mid = el.scrollLeft + el.clientWidth / 2;
    el.querySelectorAll<HTMLElement>("[data-card]").forEach((c) => {
      const n = Math.max(-1, Math.min(1, (c.offsetLeft + c.offsetWidth / 2 - mid) / el.clientWidth));
      c.style.transform = `scale(${(1 - Math.abs(n) * 0.07).toFixed(3)}) rotateY(${(-n * 5).toFixed(2)}deg)`;
      c.style.opacity = (1 - Math.abs(n) * 0.38).toFixed(3);
    });

    const idx = Math.min(projects.length - 1, Math.max(0, Math.round(p * (projects.length - 1))));
    setActive((prev) => (prev === idx ? prev : idx));

    const start = el.scrollLeft < 8;
    const end = el.scrollLeft > max - 8;
    setEdges((prev) => (prev.start === start && prev.end === end ? prev : { start, end }));
  };

  useEffect(() => {
    syncScroll();
    window.addEventListener("resize", syncScroll);
    return () => window.removeEventListener("resize", syncScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects.length]);

  const page = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    try {
      el.scrollBy({ left: dir * step, behavior: "smooth" });
    } catch {
      el.scrollLeft += dir * step;
    }
  };

  /* Mouse drag-to-scroll (touch keeps native momentum) */
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = trackRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.down) return;
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX);
  };
  const endDrag = () => {
    drag.current.down = false;
  };

  const arrow = (dir: -1 | 1) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={dir === 1 ? "M3 8h10m0 0L9 4m4 4l-4 4" : "M13 8H3m0 0l4-4M3 8l4 4"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section
      aria-label={sectionEyebrow}
      className="relative overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      <style>{`
        @keyframes cs-flow-x { to { transform: translateX(calc(var(--p) * -1px)); } }
        @keyframes cs-flow-y { from { transform: translateY(-9px); } to { transform: translateY(9px); } }
        @keyframes cs-dash-x { to { stroke-dashoffset: calc(var(--d) * -1px); } }
        .cs-track { scrollbar-width: none; }
        .cs-track::-webkit-scrollbar { display: none; }
        @media (prefers-reduced-motion: reduce) {
          [data-flow] g, [data-flow] path { animation: none !important; }
          .cs-track { scroll-behavior: auto; }
        }
      `}</style>

      {/* Flowing current field — parallaxes against the horizontal scroll */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div ref={fieldRef} className="h-full will-change-transform">
          <FlowField />
        </div>
        {/* breathing ambient glows — slow depth behind the currents */}
        <motion.div
          animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.18, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full"
          style={{ background: `radial-gradient(circle, ${VIOLET}40, transparent 70%)` }}
        />
        <motion.div
          animate={{ opacity: [0.45, 0.2, 0.45], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full"
          style={{ background: `radial-gradient(circle, ${BLUE}30, transparent 70%)` }}
        />
        {/* keeps text legible where the field is densest */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(1200px 500px at 18% 0%, ${INK}00 0%, ${INK}66 70%), linear-gradient(${INK}B3 0%, ${INK}00 30%, ${INK}00 70%, ${INK}B3 100%)`,
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex items-end justify-between gap-6 px-6 pt-16 sm:px-8 sm:pt-20 lg:px-12"
      >
        <div>
          <p
            className="font-mono text-[11px] uppercase tracking-[0.35em]"
            style={{ color: MUTED }}
          >
            {sectionEyebrow}
          </p>
          <h2
            className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: PAPER }}
          >
            {sectionHeading}
          </h2>
        </div>

        <div className="hidden shrink-0 gap-2 sm:flex">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              aria-label={dir === 1 ? carousel.next : carousel.previous}
              onClick={() => page(dir)}
              disabled={dir === 1 ? edges.end : edges.start}
              className="flex size-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-brand-spark/70 hover:text-brand-spark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-spark/60 disabled:pointer-events-none disabled:opacity-30"
              style={{ color: BODY }}
            >
              {arrow(dir)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Track */}
      <div
        ref={trackRef}
        onScroll={syncScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") page(1);
          if (e.key === "ArrowLeft") page(-1);
        }}
        tabIndex={0}
        aria-label={carousel.label}
        style={{ perspective: "1400px" }}
        className="cs-track relative z-10 flex cursor-grab select-none gap-5 overflow-x-auto px-6 py-12 active:cursor-grabbing focus-visible:outline-none sm:px-8 lg:px-12"
      >
        {projects.map((project, index) => (
          <div
            key={`${project.client}-${index}`}
            data-card
            style={{ perspective: "1000px" }}
            className="w-[88vw] flex-shrink-0 will-change-transform sm:w-[70vw] lg:w-[42vw] xl:w-[36vw]"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.7, delay: Math.min(index, 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <CaseCard project={project} />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Position: counter + progress */}
      <div className="relative z-10 flex items-center gap-5 px-6 pb-14 sm:px-8 lg:px-12">
        <span className="font-mono text-xs tabular-nums" style={{ color: MUTED }}>
          <span style={{ color: PAPER }}>{String(active + 1).padStart(2, "0")}</span>
          {" / "}
          {String(projects.length).padStart(2, "0")}
        </span>
        <div className="h-px flex-1 overflow-hidden rounded-full bg-white/10">
          <div
            ref={progressRef}
            className="h-full origin-left will-change-transform"
            style={{ backgroundColor: SPARK, transform: "scaleX(0)" }}
          />
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] sm:block" style={{ color: `${MUTED}99` }}>
          {carousel.drag}
        </span>
      </div>
    </section>
  );
}
