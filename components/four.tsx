"use client";

import { motion } from "framer-motion";
import { Search, Code, FlaskConical, Rocket } from "lucide-react";

export default function Four() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We map your workflow, your data sources, and where the real bottlenecks live. No fluff — just a sharp understanding of the problem we're solving and the outcome you need.",
      icon: Search
    },
    {
      number: "02",
      title: "Build",
      description: "Our engineers develop the AI models, backend logic, and user-facing interfaces. We work in tight sprints with demos at every milestone so you always know exactly what you're getting.",
      icon: Code
    },
    {
      number: "03",
      title: "Test & Tune",
      description: "Before anything touches production, we run the system against real data, stress-test edge cases, and fine-tune model performance. Accuracy and reliability are non-negotiable.",
      icon: FlaskConical
    },
    {
      number: "04",
      title: "Deploy & Scale",
      description: "We ship to your environment — cloud, on-prem, or hybrid — and stay hands-on through launch. As usage grows, the system scales with it. Ongoing support and model retraining included.",
      icon: Rocket
    }
  ];

  return (
    <section id="process" className="relative bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-50 py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_50%)]" />
      
      {/* Diagonal lines */}
      <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-black/20 to-transparent" />
      <div className="absolute right-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-black/20 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="relative">
            <span className="relative inline-flex items-center gap-2 rounded-full border border-black/30 bg-zinc-100/50 px-6 py-2 text-sm font-semibold text-black">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-black"></span>
              </span>
              How We Work
            </span>
          </div>
          <div className="relative max-w-4xl">
            <div className="absolute -left-8 top-0 h-full w-1 bg-black opacity-50" />
            <h1 className="font-display text-5xl font-black tracking-tight text-black sm:text-6xl lg:text-7xl">
              From Problem{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-black">
                  Statement
                </span>
              </span>
              .{" "}
              <br />
              <span className="relative">
                To{" "}
                <span className="text-black">
                  Production AI
                </span>
                .
              </span>
            </h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Our four-step process is fast, transparent, and engineered for impact — whether you're deploying your first AI tool or scaling across an entire organization.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="grid gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Animated connector line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="absolute left-8 top-24 hidden w-1 overflow-hidden rounded-full bg-black/30 lg:block"
                  />
                )}
                
                <div className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-zinc-200/50 bg-zinc-100/80 p-8 transition-all hover:border-black/50 hover:shadow-2xl hover:shadow-black/10 lg:flex-row lg:items-start lg:gap-8">
                  {/* Diagonal accent */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rotate-45 bg-black/10" />
                  
                  {/* Step number and icon */}
                  <div className="relative flex shrink-0 flex-col items-center gap-4 lg:items-start">
                    {/* Icon with glow */}
                    <div className="relative">
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-black/50 bg-black/20">
                        <step.icon className="h-10 w-10 text-black" />
                      </div>
                    </div>
                    {/* Large number */}
                    <div className="relative">
                      <div className="text-7xl font-black text-black/20 lg:text-8xl">
                        {step.number}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent bg-clip-text text-7xl font-black text-transparent lg:text-8xl">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="font-display text-2xl font-bold text-black sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
                      {step.description}
                    </p>
                  </div>

                  {/* Animated hover effect */}
                  <div className="absolute inset-0 -z-10 rounded-3xl bg-black/0 opacity-0 transition-opacity group-hover:opacity-20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <button className="group relative overflow-hidden rounded-full bg-black px-8 py-4 text-base font-bold text-white shadow-2xl shadow-black/50 transition-all hover:scale-105 hover:shadow-black/70">
            <span className="relative z-10">Start Building</span>
            <div className="absolute inset-0 -z-0 bg-gray-800 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
