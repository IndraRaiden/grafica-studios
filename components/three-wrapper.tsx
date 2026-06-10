"use client";

import { useEffect, useRef, useState } from "react";

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

/* ------------------------------------------------------------------ */
/* Palette tokens                                                      */
/* ------------------------------------------------------------------ */

const INK = "#0A0E27"; // section background
const CARD = "#0E1335"; // card surface
const PAPER = "#EEF0FF"; // primary text
const BODY = "#C7CBEA"; // body text
const MUTED = "#8B92C9"; // labels / secondary
const BLUE = "#3A9AFF"; // primary accent
const VIOLET = "#5A55E0"; // mid current
const ROYAL = "#261CC1"; // deep undercurrent
const SPARK = "#FFF15E"; // reserved: results, packets, progress

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
/* Card                                                                */
/* ------------------------------------------------------------------ */

function CaseCard({ project }: { project: Project }) {
  return (
    <article
      className="group flex h-full flex-col rounded-2xl border border-white/10 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3A9AFF]/40 hover:shadow-[0_24px_64px_-24px_rgba(58,154,255,0.35)] sm:p-8"
      style={{ backgroundColor: `${CARD}D9` }}
    >
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
          {project.stat}
        </div>
        <div className="mt-1.5 text-xs" style={{ color: MUTED }}>
          {project.statLabel}
        </div>
      </div>

      <dl className="mt-7 grid flex-1 auto-rows-min grid-cols-[84px_1fr] gap-x-4 gap-y-4 border-t border-white/10 pt-6">
        {(
          [
            ["Problem", project.problem, `${MUTED}B3`, BODY],
            ["Solution", project.solution, `${MUTED}B3`, BODY],
            ["Result", project.result, SPARK, PAPER],
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
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function ThreeWrapper({
  projects,
  eyebrow = "Case studies",
  heading = (
    <>
      Work that holds up <span style={{ color: BLUE }}>in production.</span>
    </>
  ),
}: ThreeWrapperProps) {
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

    const idx = Math.min(projects.length - 1, Math.max(0, Math.round(p * (projects.length - 1))));
    setActive((prev) => (prev === idx ? prev : idx));

    const start = el.scrollLeft < 8;
    const end = el.scrollLeft > max - 8;
    setEdges((prev) => (prev.start === start && prev.end === end ? prev : { start, end }));
  };

  useEffect(() => {
    syncScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects.length]);

  const page = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
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
      aria-label={eyebrow}
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
        {/* keeps text legible where the field is densest */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(1200px 500px at 18% 0%, ${INK}00 0%, ${INK}66 70%), linear-gradient(${INK}B3 0%, ${INK}00 30%, ${INK}00 70%, ${INK}B3 100%)`,
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-end justify-between gap-6 px-6 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div>
          <p
            className="font-mono text-[11px] uppercase tracking-[0.35em]"
            style={{ color: MUTED }}
          >
            {eyebrow}
          </p>
          <h2
            className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: PAPER }}
          >
            {heading}
          </h2>
        </div>

        <div className="hidden shrink-0 gap-2 sm:flex">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              aria-label={dir === 1 ? "Next case study" : "Previous case study"}
              onClick={() => page(dir)}
              disabled={dir === 1 ? edges.end : edges.start}
              className="flex size-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[#FFF15E]/70 hover:text-[#FFF15E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF15E]/60 disabled:pointer-events-none disabled:opacity-30"
              style={{ color: BODY }}
            >
              {arrow(dir)}
            </button>
          ))}
        </div>
      </div>

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
        aria-label="Case studies carousel"
        className="cs-track relative z-10 flex cursor-grab select-none gap-5 overflow-x-auto px-6 py-12 active:cursor-grabbing focus-visible:outline-none sm:px-8 lg:px-12"
      >
        {projects.map((project, index) => (
          <div
            key={`${project.client}-${index}`}
            data-card
            className="w-[88vw] flex-shrink-0 sm:w-[70vw] lg:w-[42vw] xl:w-[36vw]"
          >
            <CaseCard project={project} />
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
          Drag
        </span>
      </div>
    </section>
  );
}