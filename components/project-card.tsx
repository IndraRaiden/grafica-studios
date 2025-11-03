"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  image?: string;
  index: number;
}

export default function ProjectCard({
  title,
  category,
  problem,
  solution,
  result,
  image,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] transition-all hover:border-black/30 hover:shadow-xl hover:shadow-black/10 md:flex-row"
    >
      {/* Image/Visual Section - Left side on desktop, top on mobile */}
      <div className="relative h-64 w-full overflow-hidden bg-black/10 md:h-auto md:w-80">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-black text-black/10">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="mt-2 text-sm font-semibold text-black/50">
                {category}
              </div>
            </div>
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-50/20" />
      </div>

      {/* Content Section - Right side on desktop, bottom on mobile */}
      <div className="flex flex-1 flex-col p-8 md:p-10">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/30 bg-black/10 px-3 py-1">
            <div className="h-1.5 w-1.5 rounded-full bg-black" />
            <span className="text-xs font-semibold uppercase tracking-wider text-black">
              {category}
            </span>
          </div>
          <h3 className="font-display mt-4 text-2xl font-bold text-black md:text-3xl">
            {title}
          </h3>
        </div>

        {/* Details Grid */}
        <div className="flex flex-1 flex-col gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-black" />
              <span className="text-sm font-semibold text-black">Challenge</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
              {problem}
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-black" />
              <span className="text-sm font-semibold text-black">Solution</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
              {solution}
            </p>
          </div>
          
          {/* Result Badge */}
          <div className="mt-auto">
            <div className="relative overflow-hidden rounded-xl border border-black/30 bg-black/10 p-4">
              <div className="absolute inset-0 bg-black/5" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-black" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-black">
                    Result
                  </span>
                </div>
                <p className="mt-2 text-base font-semibold text-black md:text-lg">
                  {result}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-0 h-32 w-32 bg-black/5" />
      <div className="absolute bottom-0 left-0 h-24 w-24 bg-black/5" />
    </motion.div>
  );
}
