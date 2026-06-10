"use client";

import { motion } from "framer-motion";
import { Users, Ticket, MapPin, Cpu, Plug, MessageSquare } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Palette tokens — mirrors three-wrapper.tsx                          */
/* ------------------------------------------------------------------ */

const INK = "#000000"; // section background
const CARD = "#0E1335"; // card surface
const PAPER = "#EEF0FF"; // primary text
const BODY = "#C7CBEA"; // body text
const MUTED = "#8B92C9"; // labels / secondary
const BLUE = "#8B5CF6"; // primary accent
const VIOLET = "#6D28D9"; // mid current
const ROYAL = "#4C1D95"; // deep undercurrent
const SPARK = "#34D399"; // reserved: results, packets, progress

/* ------------------------------------------------------------------ */
/* Flow field — same layered seamless currents as three-wrapper        */
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
      data-flow-svc
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
              animation: `svc-flow-x ${wv.dur}s linear infinite`,
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
                  wv.floatDur ? `svc-flow-y ${wv.floatDur}s ease-in-out infinite alternate` : "",
                  wv.dash ? `svc-dash-x ${wv.dash.dur}s linear infinite` : "",
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
/* Mockups                                                             */
/* ------------------------------------------------------------------ */

function ChatbotMockup() {
  const messages = [
    { role: "user", text: "What's my order status?" },
    { role: "ai", text: "Order #4821 is out for delivery — estimated arrival today between 2–4 PM." },
    { role: "user", text: "Can I reschedule?" },
    { role: "ai", text: "Sure! Pick a new date and I'll update it now." },
  ];
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 text-xs">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <div className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: SPARK }} />
        <span className="font-mono" style={{ color: MUTED }}>assistant • online</span>
      </div>
      <div className="flex flex-col gap-2 p-3">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.4, ease: "easeOut" }}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] rounded-xl px-3 py-1.5 leading-relaxed ${
                m.role === "user" ? "" : "border border-white/10 bg-white/5"
              }`}
              style={
                m.role === "user"
                  ? { backgroundColor: `${BLUE}26`, color: BODY }
                  : { color: MUTED }
              }
            >
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LeadsMockup() {
  const leads = [
    { name: "Acme Corp", score: 94, status: "Hot" },
    { name: "Dunder Mifflin", score: 81, status: "Warm" },
    { name: "Initech", score: 73, status: "Warm" },
    { name: "Globex Inc", score: 58, status: "Cold" },
  ];
  const statusStyle = (status: string): React.CSSProperties =>
    status === "Hot"
      ? { backgroundColor: `${SPARK}26`, color: SPARK }
      : status === "Warm"
      ? { backgroundColor: `${BLUE}26`, color: BLUE }
      : { backgroundColor: "rgba(255,255,255,0.05)", color: MUTED };
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 text-xs">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <div className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: SPARK }} />
        <span className="font-mono" style={{ color: MUTED }}>live pipeline</span>
      </div>
      {leads.map((lead, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: "easeOut" }}
          className="flex items-center justify-between border-b border-white/5 px-3 py-2 last:border-0"
        >
          <span className="font-medium" style={{ color: PAPER }}>{lead.name}</span>
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lead.score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ backgroundColor: BLUE }}
              />
            </div>
            <span className="rounded-full px-1.5 py-0.5 text-[10px] font-bold" style={statusStyle(lead.status)}>
              {lead.status}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TicketMockup() {
  const tickets = [
    { id: "#1042", label: "Billing Error", priority: "P1", routed: "Finance" },
    { id: "#1043", label: "Login Issue", priority: "P2", routed: "Auth" },
    { id: "#1044", label: "Feature Request", priority: "P3", routed: "Product" },
  ];
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 text-xs">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="font-mono" style={{ color: MUTED }}>ai triage — 2s avg</span>
      </div>
      {tickets.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 + i * 0.18, ease: "easeOut" }}
          className="flex items-center gap-2 border-b border-white/5 px-3 py-2.5 last:border-0"
        >
          <span className="font-mono" style={{ color: `${MUTED}99` }}>{t.id}</span>
          <span className="flex-1 truncate" style={{ color: BODY }}>{t.label}</span>
          <span
            className="text-[10px] font-bold"
            style={{ color: t.priority === "P1" ? SPARK : t.priority === "P2" ? BLUE : MUTED }}
          >
            {t.priority}
          </span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]" style={{ color: MUTED }}>{t.routed}</span>
        </motion.div>
      ))}
    </div>
  );
}

function TrackingMockup() {
  const dots = [
    { left: "20%", top: "30%", pulse: true, delay: 0 },
    { left: "50%", top: "55%", pulse: false, delay: 0.3 },
    { left: "75%", top: "25%", pulse: true, delay: 0.6 },
    { left: "35%", top: "70%", pulse: false, delay: 0.9 },
  ];
  return (
    <div className="relative h-28 w-full overflow-hidden rounded-xl border border-white/10 bg-black/30">
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `linear-gradient(${MUTED}4D 1px, transparent 1px), linear-gradient(90deg, ${MUTED}4D 1px, transparent 1px)`,
        backgroundSize: "24px 24px"
      }} />
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + dot.delay, ease: "easeOut" }}
          className="absolute"
          style={{ left: dot.left, top: dot.top }}
        >
          {dot.pulse && (
            <span
              className="absolute inline-flex h-3 w-3 -translate-x-1.5 -translate-y-1.5 animate-ping rounded-full"
              style={{ backgroundColor: `${SPARK}66` }}
            />
          )}
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: SPARK }} />
        </motion.div>
      ))}
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polyline points="20,30 35,70 50,55 75,25" stroke={BLUE} strokeWidth="1" fill="none" strokeDasharray="3,2" />
      </motion.svg>
      <div className="absolute bottom-2 right-3 font-mono text-[10px]" style={{ color: MUTED }}>4 assets • live</div>
    </div>
  );
}

function CustomAIMockup() {
  const lines = [
    <><span style={{ color: MUTED }}>def</span> <span style={{ color: BLUE }}>classify</span><span style={{ color: `${MUTED}99` }}>(input):</span></>,
    <div className="pl-4"><span style={{ color: MUTED }}>embed</span> <span style={{ color: `${MUTED}66` }}>=</span> <span style={{ color: BODY }}>encode(input)</span></div>,
    <div className="pl-4"><span style={{ color: MUTED }}>score</span> <span style={{ color: `${MUTED}66` }}>=</span> <span style={{ color: BODY }}>model(embed)</span></div>,
    <div className="pl-4"><span style={{ color: MUTED }}>return</span> <span style={{ color: PAPER }}>top_k(score, k=3)</span></div>,
    <div className="mt-1" style={{ color: SPARK }}>✓ 98.2% accuracy on test set</div>,
  ];
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 font-mono text-xs">
      <div className="border-b border-white/10 px-3 py-2" style={{ color: `${MUTED}99` }}>model.py</div>
      <div className="space-y-1 px-3 py-3 leading-relaxed">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: "easeOut" }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IntegrationMockup() {
  const tools = ["Salesforce", "HubSpot", "Zendesk", "Custom API"];
  return (
    <div className="flex flex-col gap-2">
      {tools.map((tool, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.2, ease: "easeOut" }}
          className="flex items-center gap-2 text-xs"
        >
          <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: `${BLUE}80` }} />
          <span className="font-mono" style={{ color: MUTED }}>{tool}</span>
          <div className="flex-1 border-t border-dashed border-white/10" />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
            className="font-mono text-[10px]"
            style={{ color: SPARK }}
          >
            connected
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Card chrome — same surface / hover treatment as CaseCard            */
/* ------------------------------------------------------------------ */

const cardClass =
  "group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40 hover:shadow-[0_24px_64px_-24px_rgba(139,92,246,0.35)] sm:p-8";
const cardSurface = { backgroundColor: `${CARD}D9` };

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
      {children}
    </div>
  );
}

function Stat({ value, label, large = false }: { value: React.ReactNode; label: string; large?: boolean }) {
  return (
    <div className="shrink-0 text-right">
      <div
        className={`font-mono font-semibold tabular-nums tracking-tight ${large ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}
        style={{ color: BLUE }}
      >
        {value}
      </div>
      <div className="mt-1 text-xs" style={{ color: MUTED }}>{label}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function Two() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: INK }}
    >
      <style>{`
        @keyframes svc-flow-x { to { transform: translateX(calc(var(--p) * -1px)); } }
        @keyframes svc-flow-y { from { transform: translateY(-9px); } to { transform: translateY(9px); } }
        @keyframes svc-dash-x { to { stroke-dashoffset: calc(var(--d) * -1px); } }
        @media (prefers-reduced-motion: reduce) {
          [data-flow-svc] g, [data-flow-svc] path { animation: none !important; }
        }
      `}</style>

      {/* Flowing current field */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <FlowField />
        {/* keeps text legible where the field is densest */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(1200px 500px at 18% 0%, ${INK}00 0%, ${INK}66 70%), linear-gradient(${INK}B3 0%, ${INK}00 30%, ${INK}00 70%, ${INK}B3 100%)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.35em]" style={{ color: MUTED }}>
            Our products
          </p>
          <h2
            className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: PAPER }}
          >
            AI does the work.{" "}
            <span style={{ color: BLUE }}>You focus on growth.</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 — Leads, large */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className={`${cardClass} lg:col-span-2`}
            style={cardSurface}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-3">
                <IconTile><Users className="h-5 w-5" style={{ color: MUTED }} /></IconTile>
                <h3 className="text-xl font-medium leading-snug tracking-tight sm:text-2xl" style={{ color: PAPER }}>
                  Leads Manager & CRM
                </h3>
                <p className="max-w-sm text-sm leading-relaxed" style={{ color: BODY }}>
                  Capture, score, and auto-assign leads. Your team only sees the ones that matter.
                </p>
              </div>
              <Stat large value="3×" label="more conversions" />
            </div>
            <LeadsMockup />
          </motion.div>

          {/* Card 2 — Ticket Triage */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={cardClass}
            style={cardSurface}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4">
                <IconTile><Ticket className="h-5 w-5" style={{ color: MUTED }} /></IconTile>
                <Stat value="68%" label="faster resolution" />
              </div>
              <h3 className="text-xl font-medium leading-snug tracking-tight sm:text-2xl" style={{ color: PAPER }}>
                Ticket Triage AI
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                Routes, prioritizes, and auto-responds in under 2 seconds.
              </p>
            </div>
            <TicketMockup />
          </motion.div>

          {/* Card 3 — Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={cardClass}
            style={cardSurface}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4">
                <IconTile><MapPin className="h-5 w-5" style={{ color: MUTED }} /></IconTile>
                <Stat value="91%" label="on-time delivery" />
              </div>
              <h3 className="text-xl font-medium leading-snug tracking-tight sm:text-2xl" style={{ color: PAPER }}>
                Tracking AI System
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                Live GPS, predictive ETAs, and anomaly alerts for vehicles or orders.
              </p>
            </div>
            <TrackingMockup />
          </motion.div>

          {/* Card 4 — Custom AI */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={cardClass}
            style={cardSurface}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4">
                <IconTile><Cpu className="h-5 w-5" style={{ color: MUTED }} /></IconTile>
                <div className="text-right font-mono text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE }}>
                  Weeks,<br />not months
                </div>
              </div>
              <h3 className="text-xl font-medium leading-snug tracking-tight sm:text-2xl" style={{ color: PAPER }}>
                Custom AI Apps
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                Bespoke AI built around your data and workflows. Prototype to production fast.
              </p>
            </div>
            <CustomAIMockup />
          </motion.div>

          {/* Card 5 — Chatbots */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className={`${cardClass} lg:col-span-2`}
            style={cardSurface}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-3">
                <IconTile><MessageSquare className="h-5 w-5" style={{ color: MUTED }} /></IconTile>
                <h3 className="text-xl font-medium leading-snug tracking-tight sm:text-2xl" style={{ color: PAPER }}>
                  AI Chatbots
                </h3>
                <p className="max-w-sm text-sm leading-relaxed" style={{ color: BODY }}>
                  Custom-trained chatbots that handle support, sales, and onboarding — embedded in your web app or site. Available 24/7, no handoff needed for common requests.
                </p>
              </div>
              <Stat large value="80%" label="queries resolved without human" />
            </div>
            <ChatbotMockup />
          </motion.div>

          {/* Card 6 — Integration */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className={cardClass}
            style={cardSurface}
          >
            <div className="flex flex-col gap-3">
              <IconTile><Plug className="h-5 w-5" style={{ color: MUTED }} /></IconTile>
              <h3 className="text-xl font-medium leading-snug tracking-tight sm:text-2xl" style={{ color: PAPER }}>
                AI Integration
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                Plug AI directly into your existing CRM, ERP, or support stack — no rip-and-replace.
              </p>
            </div>
            <IntegrationMockup />
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#contact"
            className="rounded-full px-8 py-4 text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
            style={{ backgroundColor: BLUE, color: "#0A0E27" }}
          >
            Get Early Access
          </a>
        </motion.div>

      </div>
    </section>
  );
}
