"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Ticket, MapPin, Cpu, Plug } from "lucide-react";
import GlassmorphismCard from "./glassmorphism-card";

export default function Two() {
  const services = [
    {
      title: "Leads Manager & CRM",
      description: "Capture, score, and nurture leads automatically. Our AI-driven CRM surfaces your hottest prospects, auto-assigns follow-ups, and gives your sales team a single source of truth — so no lead ever falls through the cracks.",
      icon: Users
    },
    {
      title: "Ticket Triage AI",
      description: "Stop drowning in support queues. Our AI reads, categorizes, prioritizes, and routes incoming tickets in real time — cutting resolution time and letting your team focus on issues that actually need a human.",
      icon: Ticket
    },
    {
      title: "Tracking AI System",
      description: "Live tracking for vehicles, orders, or field assets. Get real-time location data, predictive ETAs, anomaly alerts, and a full audit trail — all surfaced through a clean dashboard and API your team can plug into anything.",
      icon: MapPin
    },
    {
      title: "Custom AI App Development",
      description: "Have a workflow that doesn't fit a template? We build bespoke AI-powered applications from the ground up — scoped to your data, your processes, and your stack. From prototype to production-ready in weeks.",
      icon: Cpu
    },
    {
      title: "AI Integration & Consulting",
      description: "Already have tools in place? We audit your current stack, identify where AI creates the most leverage, and integrate models directly into your existing software — without a rip-and-replace.",
      icon: Plug
    }
  ];

  const [selectedService, setSelectedService] = useState(services[0]);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="services" className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <GlassmorphismCard className="w-full">
          <div className="flex flex-col items-center gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
            >
              <span className="relative inline-flex items-center gap-2 rounded-full border border-black/30 bg-zinc-100/50 px-6 py-2 text-sm font-semibold text-black">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-black"></span>
                </span>
                Our Products
              </span>
            </motion.div>

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative max-w-4xl text-center"
            >
              <h1 className="font-display text-5xl font-black tracking-tight text-black sm:text-6xl lg:text-7xl">
                AI Does the Work. <br />
                You Focus on <span className="text-black">Growing Your Business</span>.
              </h1>
            </motion.div>

            {/* Interactive Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3"
            >
              {/* Left Column: Service List */}
              <div className="flex flex-col gap-2">
                {services.map((service, index) => (
                  <motion.button
                    key={service.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    onClick={() => setSelectedService(service)}
                    className={`relative rounded-lg px-4 py-3 text-left text-base font-semibold transition-all duration-300 ${selectedService.title === service.title ? 'bg-black/10 text-black' : 'text-zinc-400 hover:bg-black/5 hover:text-black'}`}
                  >
                    {service.title}
                    {selectedService.title === service.title && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Right Column: Service Details */}
              <div className="relative lg:col-span-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedService.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex flex-col gap-6"
                  >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-black/30 bg-black/10">
                      <selectedService.icon className="h-8 w-8 text-black" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-black">
                        {selectedService.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-zinc-700">
                        {selectedService.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8"
            >
              <button className="group relative overflow-hidden rounded-full bg-black px-8 py-4 text-base font-bold text-white shadow-2xl shadow-black/50 transition-all hover:scale-105 hover:shadow-black/70">
                <span className="relative z-10">Get Early Access</span>
              </button>
            </motion.div>
          </div>
        </GlassmorphismCard>
      </div>
    </section>
  );
}
