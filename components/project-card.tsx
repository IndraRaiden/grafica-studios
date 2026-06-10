"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  stat: string;
  statLabel: string;
  index: number;
}

export default function ProjectCard({
  title,
  category,
  problem,
  solution,
  result,
  stat,
  statLabel,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
    >
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top section */}
      <div className="relative flex items-start justify-between gap-4 p-6 pb-0">
        {/* Category badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/50">
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          {category}
        </span>

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 + index * 0.06, ease: "easeOut" }}
          className="text-right"
        >
          <div className="text-4xl font-black leading-none text-white">{stat}</div>
          <div className="mt-1 text-[11px] text-white/30">{statLabel}</div>
        </motion.div>
      </div>

      {/* Title */}
      <div className="relative px-6 pt-5">
        <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">{title}</h3>
      </div>

      {/* Divider */}
      <div className="mx-6 mt-5 border-t border-white/[0.08]" />

      {/* Problem / Solution */}
      <div className="relative grid flex-1 grid-cols-2 gap-px p-6 pt-5">
        <div className="flex flex-col gap-2 pr-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/25">Problem</span>
          <p className="text-sm leading-relaxed text-white/50">{problem}</p>
        </div>
        <div className="flex flex-col gap-2 border-l border-white/[0.08] pl-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/25">Solution</span>
          <p className="text-sm leading-relaxed text-white/50">{solution}</p>
        </div>
      </div>

      {/* Result strip */}
      <div className="relative mx-4 mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4 + index * 0.06, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 bg-white/[0.04]"
        />
        <div className="relative flex items-start gap-2.5">
          <span className="mt-0.5 text-green-400 text-xs">✓</span>
          <p className="text-sm font-medium text-white/70">{result}</p>
        </div>
      </div>
    </motion.div>
  );
}
