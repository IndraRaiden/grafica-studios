"use client";

import { motion } from "framer-motion";
import { Users, Ticket, MapPin, Cpu, Plug, MessageSquare } from "lucide-react";
import { useCopy } from "./locale-provider";
import { theme } from "@/lib/brand";

const { INK, CARD, PAPER, BODY, MUTED, BLUE, VIOLET, SPARK } = theme;

/* ------------------------------------------------------------------ */
/* Circuit field — board traces with light pulses routing through them */
/* ------------------------------------------------------------------ */

interface Trace {
  d: string; // pulse travels in path direction — write right-to-left to reverse
  color: string;
  dur: number; // seconds per pulse lap
  delay: number; // negative phase offset so pulses are mid-route on load
}

const TRACES: Trace[] = [
  { d: "M0,80 H520 L580,140 H1440", color: BLUE, dur: 11, delay: 0 },
  { d: "M1440,210 H980 L920,270 H360 L300,210 H0", color: VIOLET, dur: 14, delay: 4 },
  { d: "M0,420 H240 L300,480 H1100 L1160,420 H1440", color: SPARK, dur: 13, delay: 7 },
  { d: "M1440,560 H900 L840,620 H0", color: BLUE, dur: 16, delay: 2 },
  { d: "M0,700 H660 L720,760 H1440", color: VIOLET, dur: 12, delay: 9 },
  { d: "M1440,860 H1080 L1020,800 H420 L360,860 H0", color: SPARK, dur: 18, delay: 5 },
  { d: "M180,0 V300 L240,360 V900", color: MUTED, dur: 20, delay: 3 },
  { d: "M1260,900 V520 L1200,460 V0", color: BLUE, dur: 22, delay: 11 },
];

/* Junction nodes sit on trace corners and blink as pulses pass */
const NODES = [
  { x: 580, y: 140, color: BLUE, dur: 4, delay: 0 },
  { x: 300, y: 210, color: VIOLET, dur: 5, delay: 1.2 },
  { x: 1160, y: 420, color: SPARK, dur: 4.5, delay: 2.1 },
  { x: 840, y: 620, color: BLUE, dur: 5.5, delay: 0.7 },
  { x: 720, y: 760, color: VIOLET, dur: 4, delay: 2.8 },
  { x: 240, y: 360, color: MUTED, dur: 6, delay: 1.6 },
  { x: 1020, y: 800, color: SPARK, dur: 5, delay: 3.4 },
  { x: 1200, y: 460, color: BLUE, dur: 4.8, delay: 0.4 },
];

function CircuitField() {
  return (
    <svg
      data-circuit
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
    >
      {TRACES.map((t, i) => (
        <g key={i}>
          {/* dormant trace */}
          <path
            d={t.d}
            stroke="rgba(238,240,255,0.06)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          {/* glow under the pulse */}
          <path
            d={t.d}
            stroke={t.color}
            strokeWidth="5"
            opacity="0.22"
            pathLength={100}
            strokeDasharray="6 94"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ animation: `svc-trace ${t.dur}s linear infinite`, animationDelay: `-${t.delay}s` }}
          />
          {/* the pulse itself */}
          <path
            d={t.d}
            stroke={t.color}
            strokeWidth="1.5"
            opacity="0.9"
            pathLength={100}
            strokeDasharray="6 94"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ animation: `svc-trace ${t.dur}s linear infinite`, animationDelay: `-${t.delay}s` }}
          />
        </g>
      ))}
      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="2.5"
          fill={n.color}
          style={{ animation: `svc-node ${n.dur}s ease-in-out infinite`, animationDelay: `${n.delay}s` }}
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Mockups                                                             */
/* ------------------------------------------------------------------ */

function ChatbotMockup() {
  const { services } = useCopy();
  const messages = services.mockups.chat;
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 text-xs">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <div className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: SPARK }} />
        <span className="font-mono" style={{ color: MUTED }}>{services.mockups.chatStatus}</span>
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
  const { services } = useCopy();
  const { leads, leadStatus } = services.mockups;
  const statusStyle = (status: keyof typeof leadStatus): React.CSSProperties =>
    status === "hot"
      ? { backgroundColor: `${SPARK}26`, color: SPARK }
      : status === "warm"
      ? { backgroundColor: `${BLUE}26`, color: BLUE }
      : { backgroundColor: "rgba(255,255,255,0.05)", color: MUTED };
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 text-xs">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <div className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: SPARK }} />
        <span className="font-mono" style={{ color: MUTED }}>{services.mockups.leadsStatus}</span>
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
              {leadStatus[lead.status]}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TicketMockup() {
  const { services } = useCopy();
  const tickets = services.mockups.tickets;
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 text-xs">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="font-mono" style={{ color: MUTED }}>{services.mockups.ticketStatus}</span>
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
  const { services } = useCopy();
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
      <div className="absolute bottom-2 right-3 font-mono text-[10px]" style={{ color: MUTED }}>
        {services.mockups.trackingStatus}
      </div>
    </div>
  );
}

function CustomAIMockup() {
  const { services } = useCopy();
  const lines = [
    <span key="def"><span style={{ color: MUTED }}>def</span> <span style={{ color: BLUE }}>classify</span><span style={{ color: `${MUTED}99` }}>(input):</span></span>,
    <div key="embed" className="pl-4"><span style={{ color: MUTED }}>embed</span> <span style={{ color: `${MUTED}66` }}>=</span> <span style={{ color: BODY }}>encode(input)</span></div>,
    <div key="score" className="pl-4"><span style={{ color: MUTED }}>score</span> <span style={{ color: `${MUTED}66` }}>=</span> <span style={{ color: BODY }}>model(embed)</span></div>,
    <div key="return" className="pl-4"><span style={{ color: MUTED }}>return</span> <span style={{ color: PAPER }}>top_k(score, k=3)</span></div>,
    <div key="accuracy" className="mt-1" style={{ color: SPARK }}>{services.mockups.codeAccuracy}</div>,
  ];
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 font-mono text-xs">
      <div className="border-b border-white/10 px-3 py-2" style={{ color: `${MUTED}99` }}>
        {services.mockups.codeFile}
      </div>
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
  const { services } = useCopy();
  const tools = services.mockups.integrations;
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
            {services.mockups.connected}
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
  "group brand-lift relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 sm:p-8";
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
  const { services } = useCopy();
  const cards = services.cards;

  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: INK }}
    >
      <style>{`
        @keyframes svc-trace { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
        @keyframes svc-node { 0%, 100% { opacity: 0.12; } 50% { opacity: 0.75; } }
        @media (prefers-reduced-motion: reduce) {
          [data-circuit] path, [data-circuit] circle { animation: none !important; }
        }
      `}</style>

      {/* Circuit board — dormant traces, traveling light pulses, blinking junctions */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* single calm light dome anchoring the section */}
        <div
          className="absolute inset-x-0 top-0 h-[60%]"
          style={{ background: `radial-gradient(ellipse 55% 45% at 50% 0%, ${VIOLET}21, transparent 70%)` }}
        />
        <CircuitField />
        {/* keeps text legible where traces run behind copy */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${INK}99 0%, ${INK}00 25%, ${INK}00 75%, ${INK}B3 100%)`,
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
            {services.eyebrow}
          </p>
          <h2
            className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: PAPER }}
          >
            {services.headingLead}{" "}
            <span style={{ color: BLUE }}>{services.headingAccent}</span>
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
                  {cards.leads.title}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed" style={{ color: BODY }}>
                  {cards.leads.description}
                </p>
              </div>
              <Stat large value={cards.leads.stat} label={cards.leads.statLabel} />
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
                <Stat value={cards.triage.stat} label={cards.triage.statLabel} />
              </div>
              <h3 className="text-xl font-medium leading-snug tracking-tight sm:text-2xl" style={{ color: PAPER }}>
                {cards.triage.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                {cards.triage.description}
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
                <Stat value={cards.tracking.stat} label={cards.tracking.statLabel} />
              </div>
              <h3 className="text-xl font-medium leading-snug tracking-tight sm:text-2xl" style={{ color: PAPER }}>
                {cards.tracking.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                {cards.tracking.description}
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
                  {cards.custom.badgeLines.map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-medium leading-snug tracking-tight sm:text-2xl" style={{ color: PAPER }}>
                {cards.custom.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                {cards.custom.description}
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
                  {cards.chatbots.title}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed" style={{ color: BODY }}>
                  {cards.chatbots.description}
                </p>
              </div>
              <Stat large value={cards.chatbots.stat} label={cards.chatbots.statLabel} />
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
                {cards.integration.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                {cards.integration.description}
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
            style={{ backgroundColor: BLUE, color: theme.ON_ACCENT }}
          >
            {services.cta}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
