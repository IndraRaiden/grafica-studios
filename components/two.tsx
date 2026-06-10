"use client";

import { motion } from "framer-motion";
import { Users, Ticket, MapPin, Cpu, Plug, MessageSquare } from "lucide-react";

function ChatbotMockup() {
  const messages = [
    { role: "user", text: "What's my order status?" },
    { role: "ai", text: "Order #4821 is out for delivery — estimated arrival today between 2–4 PM." },
    { role: "user", text: "Can I reschedule?" },
    { role: "ai", text: "Sure! Pick a new date and I'll update it now." },
  ];
  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/5 overflow-hidden text-xs">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-white/50 font-mono">assistant • online</span>
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
            <div className={`max-w-[75%] rounded-xl px-3 py-1.5 leading-relaxed ${
              m.role === "user"
                ? "bg-white/10 text-white/70"
                : "bg-white/5 text-white/50 border border-white/10"
            }`}>
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
  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/5 overflow-hidden text-xs">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-white/50 font-mono">live pipeline</span>
      </div>
      {leads.map((lead, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: "easeOut" }}
          className="flex items-center justify-between px-3 py-2 border-b border-white/5 last:border-0"
        >
          <span className="text-white/80 font-medium">{lead.name}</span>
          <div className="flex items-center gap-3">
            <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lead.score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                className="h-full rounded-full bg-white/60"
              />
            </div>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
              lead.status === "Hot" ? "bg-white/20 text-white" :
              lead.status === "Warm" ? "bg-white/10 text-white/70" :
              "bg-white/5 text-white/40"
            }`}>{lead.status}</span>
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
    <div className="w-full rounded-xl border border-white/10 bg-white/5 overflow-hidden text-xs">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="text-white/50 font-mono">ai triage — 2s avg</span>
      </div>
      {tickets.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 + i * 0.18, ease: "easeOut" }}
          className="flex items-center gap-2 px-3 py-2.5 border-b border-white/5 last:border-0"
        >
          <span className="text-white/30 font-mono">{t.id}</span>
          <span className="flex-1 text-white/80 truncate">{t.label}</span>
          <span className={`font-bold text-[10px] ${t.priority === "P1" ? "text-white" : t.priority === "P2" ? "text-white/60" : "text-white/30"}`}>{t.priority}</span>
          <span className="text-white/40 text-[10px] bg-white/10 rounded px-1.5 py-0.5">{t.routed}</span>
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
    <div className="w-full h-28 rounded-xl border border-white/10 bg-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
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
          {dot.pulse && <span className="absolute inline-flex h-3 w-3 rounded-full bg-white/40 animate-ping -translate-x-1.5 -translate-y-1.5" />}
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </motion.div>
      ))}
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polyline points="20,30 35,70 50,55 75,25" stroke="white" strokeWidth="1" fill="none" strokeDasharray="3,2" />
      </motion.svg>
      <div className="absolute bottom-2 right-3 text-[10px] text-white/40 font-mono">4 assets • live</div>
    </div>
  );
}

function CustomAIMockup() {
  const lines = [
    <><span className="text-white/30">def</span> <span className="text-white/70">classify</span><span className="text-white/30">(input):</span></>,
    <div className="pl-4"><span className="text-white/30">embed</span> <span className="text-white/20">=</span> <span className="text-white/50">encode(input)</span></div>,
    <div className="pl-4"><span className="text-white/30">score</span> <span className="text-white/20">=</span> <span className="text-white/50">model(embed)</span></div>,
    <div className="pl-4"><span className="text-white/30">return</span> <span className="text-white/70">top_k(score, k=3)</span></div>,
    <div className="mt-1 text-green-400/60">✓ 98.2% accuracy on test set</div>,
  ];
  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/5 overflow-hidden text-xs font-mono">
      <div className="border-b border-white/10 px-3 py-2 text-white/30">model.py</div>
      <div className="px-3 py-3 space-y-1 leading-relaxed">
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
          <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <span className="text-white/40 font-mono">{tool}</span>
          <div className="flex-1 border-t border-dashed border-white/10" />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
            className="text-green-400/60 font-mono text-[10px]"
          >
            connected
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

const floatVariants = (delay: number, distance: number = 6) => ({
  animate: {
    y: [0, -distance, 0],
    transition: {
      duration: 5 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  },
});

export default function Two() {
  return (
    <section id="services" className="relative bg-zinc-950 py-24 sm:py-32 overflow-hidden">

      {/* Ambient background orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col gap-4"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />
            Our Products
          </span>
          <h2 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI Does the Work.<br />
            <span className="text-white/40">You Focus on Growth.</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 — Leads, large */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            animate={floatVariants(0, 5).animate}
            className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2 hover:border-white/20 transition-colors duration-500"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Users className="h-5 w-5 text-white/70" />
                </div>
                <h3 className="text-xl font-bold text-white">Leads Manager & CRM</h3>
                <p className="max-w-sm text-sm leading-relaxed text-white/50">
                  Capture, score, and auto-assign leads. Your team only sees the ones that matter.
                </p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-3xl font-black text-white">3×</div>
                <div className="text-xs text-white/40">more conversions</div>
              </div>
            </div>
            <LeadsMockup />
          </motion.div>

          {/* Card 2 — Ticket Triage */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            animate={floatVariants(1.5, 4).animate}
            className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-colors duration-500"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Ticket className="h-5 w-5 text-white/70" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-white">68%</div>
                  <div className="text-xs text-white/40">faster resolution</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Ticket Triage AI</h3>
              <p className="text-sm leading-relaxed text-white/50">
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
            animate={floatVariants(2.5, 5).animate}
            className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-colors duration-500"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <MapPin className="h-5 w-5 text-white/70" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-white">91%</div>
                  <div className="text-xs text-white/40">on-time delivery</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Tracking AI System</h3>
              <p className="text-sm leading-relaxed text-white/50">
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
            animate={floatVariants(0.8, 4).animate}
            className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-colors duration-500"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Cpu className="h-5 w-5 text-white/70" />
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-white/60 uppercase tracking-wider">Weeks,<br/>not months</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Custom AI Apps</h3>
              <p className="text-sm leading-relaxed text-white/50">
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
            animate={floatVariants(3.5, 5).animate}
            className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2 hover:border-white/20 transition-colors duration-500"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <MessageSquare className="h-5 w-5 text-white/70" />
                </div>
                <h3 className="text-xl font-bold text-white">AI Chatbots</h3>
                <p className="max-w-sm text-sm leading-relaxed text-white/50">
                  Custom-trained chatbots that handle support, sales, and onboarding — embedded in your web app or site. Available 24/7, no handoff needed for common requests.
                </p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-3xl font-black text-white">80%</div>
                <div className="text-xs text-white/40">queries resolved without human</div>
              </div>
            </div>
            <ChatbotMockup />
          </motion.div>

          {/* Card 6 — Integration */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.25 }}
            animate={floatVariants(2, 3).animate}
            className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 hover:border-white/20 transition-colors duration-500"
          >
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Plug className="h-5 w-5 text-white/70" />
              </div>
              <h3 className="text-xl font-bold text-white">AI Integration</h3>
              <p className="text-sm leading-relaxed text-white/50">
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
            className="rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-white/90"
          >
            Get Early Access
          </a>
        </motion.div>

      </div>
    </section>
  );
}
