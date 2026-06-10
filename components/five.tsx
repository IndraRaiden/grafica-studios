"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Phone, MapPin, Zap, Paperclip, MessageCircle } from "lucide-react";

/* Palette tokens — mirrors three-wrapper.tsx */
const INK = "#000000";
const CARD = "#0E1335";
const PAPER = "#EEF0FF";
const BODY = "#C7CBEA";
const MUTED = "#8B92C9";
const BLUE = "#8B5CF6";
const SPARK = "#34D399";

/* Staggered fade-up on scroll — same cadence as the hero's entrance */
const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

const cardClass =
  "rounded-2xl border border-white/10 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40 hover:shadow-[0_24px_64px_-24px_rgba(139,92,246,0.35)] sm:p-8";
const cardSurface = { backgroundColor: `${CARD}D9` };

const inputClass =
  "mt-2 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm transition-colors focus:border-[#8B5CF6]/60 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]/40";
const labelClass = "block font-mono text-[10px] uppercase tracking-[0.25em]";

/* Quick stagger for form fields and contact rows */
const fieldReveal = (i: number) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: 0.1 + i * 0.08, ease: "easeOut" as const },
});

/* Vertical guide line with a traveling pulse, echoing four.tsx's connectors */
function PulseLine({ className, delay }: { className: string; delay: number }) {
  return (
    <div
      className={`pointer-events-none absolute top-0 hidden h-full w-px overflow-hidden lg:block ${className}`}
      style={{ background: `linear-gradient(transparent, ${MUTED}26, transparent)` }}
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay, repeatDelay: 2 }}
        className="h-full w-full"
        style={{ background: `linear-gradient(transparent 30%, ${SPARK}99 50%, transparent 70%)` }}
      />
    </div>
  );
}

type Status = "idle" | "loading" | "success" | "error";

export default function Five() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
    file: null as File | null,
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("projectDetails", formData.projectDetails);
    if (formData.file) data.append("file", formData.file);

    try {
      const res = await fetch("https://formspree.io/f/mlgklbpn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", projectDetails: "", file: null });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: INK }}
    >
      {/* Background decoration — faint violet glow rising from below */}
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(900px 600px at 50% 90%, ${BLUE}14, transparent 70%)` }}
      />
      <PulseLine className="left-1/4" delay={0} />
      <PulseLine className="right-1/3" delay={2.6} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            {...reveal(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.35em] backdrop-blur-sm"
            style={{ color: MUTED, backgroundColor: `${INK}66` }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: SPARK }} />
            Contact
          </motion.span>
          <motion.h2
            {...reveal(0.1)}
            className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: PAPER }}
          >
            Let's build your <span style={{ color: BLUE }}>AI advantage.</span>
          </motion.h2>
          <motion.p {...reveal(0.2)} className="mt-6 text-lg leading-8" style={{ color: BODY }}>
            Have a workflow you want to automate, a product idea, or just want to explore what AI can do for your business? Reach out — we'll map out the opportunity and tell you exactly what's possible.
          </motion.p>
        </div>

        {/* Contact form and options */}
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div {...reveal(0.1)} className={cardClass} style={cardSurface}>
              <h3 className="text-xl font-medium tracking-tight" style={{ color: PAPER }}>
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                Tell us about your project and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Name */}
                <motion.div {...fieldReveal(0)}>
                  <label htmlFor="name" className={labelClass} style={{ color: MUTED }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                    style={{ color: PAPER }}
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div {...fieldReveal(1)}>
                  <label htmlFor="email" className={labelClass} style={{ color: MUTED }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                    style={{ color: PAPER }}
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div {...fieldReveal(2)}>
                  <label htmlFor="phone" className={labelClass} style={{ color: MUTED }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass}
                    style={{ color: PAPER }}
                    placeholder="(555) 123-4567"
                  />
                </motion.div>

                {/* Project Details */}
                <motion.div {...fieldReveal(3)}>
                  <label htmlFor="projectDetails" className={labelClass} style={{ color: MUTED }}>
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    required
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className={inputClass}
                    style={{ color: PAPER }}
                    placeholder="Describe the problem you want AI to solve..."
                  />
                </motion.div>

                {/* File Upload */}
                <motion.div {...fieldReveal(4)}>
                  <label htmlFor="file" className={labelClass} style={{ color: MUTED }}>
                    Upload File (Optional)
                  </label>
                  <div className="mt-2">
                    <label className="flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-white/15 bg-white/[0.03] px-4 py-6 transition-colors hover:border-[#8B5CF6]/60 hover:bg-white/5">
                      <div className="text-center">
                        <Paperclip className="mx-auto h-7 w-7" style={{ color: MUTED }} />
                        <div className="mt-2 text-sm" style={{ color: formData.file ? SPARK : BODY }}>
                          {formData.file ? formData.file.name : "Click to upload or drag and drop"}
                        </div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: `${MUTED}99` }}>
                          PDF, PNG, JPG up to 10MB
                        </div>
                      </div>
                      <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.png,.jpg,.jpeg"
                      />
                    </label>
                  </div>
                </motion.div>

                {/* Success / Error feedback */}
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg px-4 py-3 text-sm font-medium"
                    style={{ backgroundColor: `${SPARK}1A`, color: SPARK, border: `1px solid ${SPARK}33` }}
                  >
                    Message sent! We'll get back to you within 24 hours.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg px-4 py-3 text-sm font-medium"
                    style={{ backgroundColor: "#FF4D4D1A", color: "#FF6B6B", border: "1px solid #FF4D4D33" }}
                  >
                    Something went wrong. Please try again or email us directly.
                  </motion.p>
                )}

                {/* Submit Button */}
                <motion.div {...fieldReveal(5)}>
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="group relative w-full overflow-hidden rounded-full px-6 py-3 text-sm font-bold transition-all hover:scale-[1.02] hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{ backgroundColor: BLUE, color: "#0A0E27" }}
                  >
                    <span className="relative z-10">
                      {status === "loading" ? "Sending…" : status === "success" ? "Sent!" : "Contact Us"}
                    </span>
                    {/* shine sweep */}
                    <span className="absolute inset-y-0 -left-1/2 z-0 w-1/3 -skew-x-12 bg-white/30 opacity-0 blur-sm transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Alternative Options */}
            <div className="space-y-6">
              {/* Schedule a Call */}
              <motion.div {...reveal(0.2)} className={cardClass} style={cardSurface}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Calendar className="h-6 w-6" style={{ color: MUTED }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium tracking-tight" style={{ color: PAPER }}>
                      Schedule a Discovery Call
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: BODY }}>
                      Book a 30-minute call — we'll map your workflow and identify where AI creates the most leverage.
                    </p>
                    <button
                      className="mt-4 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold transition-all hover:border-[#8B5CF6]/60 hover:text-[#8B5CF6]"
                      style={{ color: BODY }}
                    >
                      Book a Call
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Direct Contact */}
              <motion.div {...reveal(0.3)} className={cardClass} style={cardSurface}>
                <h3 className="text-lg font-medium tracking-tight" style={{ color: PAPER }}>
                  Other Ways to Reach Us
                </h3>
                <div className="mt-4 space-y-3">
                  {(
                    [
                      [Mail, <a key="mail" href="mailto:sales@blackstronghold.com" className="transition-colors hover:text-[#EEF0FF]" style={{ color: BODY }}>sales@blackstronghold.com</a>],
                      [Phone, <a key="phone" href="tel:+5215663954818" className="transition-colors hover:text-[#EEF0FF]" style={{ color: BODY }}>+52 1 56 6395 4818 <span className="text-[10px] opacity-50">(call · iMessage)</span></a>],
                      [MessageCircle, <a key="wa" href="https://wa.me/5215663954818" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#EEF0FF]" style={{ color: BODY }}>+52 1 56 6395 4818 <span className="text-[10px] opacity-50">(WhatsApp)</span></a>],
                      [MapPin, <span key="map" style={{ color: BODY }}>Available Nationwide</span>],
                    ] as const
                  ).map(([Icon, content], i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: "easeOut" }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Icon className="h-4 w-4" style={{ color: MUTED }} />
                      {content}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                {...reveal(0.4)}
                className="rounded-2xl border p-6 backdrop-blur-sm"
                style={{ backgroundColor: `${SPARK}0D`, borderColor: `${SPARK}33` }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${SPARK}1A` }}>
                    <motion.span
                      animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full"
                      style={{ border: `1px solid ${SPARK}` }}
                    />
                    <Zap className="h-5 w-5" style={{ color: SPARK }} />
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: PAPER }}>
                      Fast Response Time
                    </div>
                    <div className="text-sm" style={{ color: BODY }}>
                      We typically respond within <span style={{ color: SPARK }}>24 hours</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
