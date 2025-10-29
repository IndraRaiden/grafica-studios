"use client";

import { motion } from "framer-motion";
import { Search, Pencil, Hammer, Rocket } from "lucide-react";

export default function Four() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn everything we can about your business goals, brand identity, and operational needs. We also offer insight into site selection and market alignment.",
      icon: Search
    },
    {
      number: "02",
      title: "Design",
      description: "Through mood boards, conceptual sketches, and detailed 3D renderings, we translate your vision into visuals. We finalize layouts, materials, and specs to meet mall requirements and brand guidelines.",
      icon: Pencil
    },
    {
      number: "03",
      title: "Build",
      description: "We coordinate with our build partners, managing production and installation timelines. Our experience with mall processes helps streamline approvals and avoid unnecessary delays.",
      icon: Hammer
    },
    {
      number: "04",
      title: "Launch",
      description: "We support your final walkthrough, installation, and opening, ensuring every detail is right and your space is ready to impress. Ongoing support is available for future locations or updates.",
      icon: Rocket
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-blue-950/10 to-black py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
      
      {/* Diagonal lines */}
      <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute right-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400">Process Overview</h2>
          </div>
          <p className="font-display mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            A Seamless{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
            <br />from Idea to Grand Opening
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Our four-step approach is simple, collaborative, and built to deliver results—whether you're building your first location or scaling across the country.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="grid gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
                className="group relative"
              >
                {/* Animated connector line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    className="absolute left-8 top-24 hidden w-1 overflow-hidden rounded-full bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-transparent lg:block"
                  />
                )}
                
                <div className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-8 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 lg:flex-row lg:items-start lg:gap-8">
                  {/* Diagonal accent */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rotate-45 bg-gradient-to-br from-blue-500/10 to-transparent" />
                  
                  {/* Step number and icon */}
                  <div className="relative flex shrink-0 flex-col items-center gap-4 lg:items-start">
                    {/* Icon with glow */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-xl" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-blue-500/50 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm">
                        <step.icon className="h-10 w-10 text-blue-400" />
                      </div>
                    </div>
                    {/* Large number */}
                    <div className="relative">
                      <div className="text-7xl font-black text-blue-500/20 lg:text-8xl">
                        {step.number}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/40 to-transparent bg-clip-text text-7xl font-black text-transparent lg:text-8xl">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
                      {step.description}
                    </p>
                  </div>

                  {/* Animated hover effect */}
                  <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 blur-xl transition-opacity group-hover:opacity-20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.5, type: "spring", bounce: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <button className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            Start the Process
          </button>
        </motion.div>
      </div>
    </section>
  );
}
