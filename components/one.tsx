"use client";

import { motion, MotionValue } from "framer-motion";

interface OneProps {
  secondImageOpacity: MotionValue<number>;
}

export default function One({ secondImageOpacity }: OneProps) {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image controlled by parent */}
      <motion.div
        style={{ opacity: secondImageOpacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-transparent to-zinc-950/40 z-10" />
        <img
          src="/trial.jpg"
          alt="Grafica Studios Background"
          className="h-full w-full object-cover"
        />
      </motion.div>

      
      {/* Content - Always Visible */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-6">
          {/* Main heading */}
          <div className="relative max-w-5xl">
            <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
              Design That Sells. Spaces That Speak.
            </h1>
          </div>
          
          {/* Subheading */}
          <p className="max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
            From the first sketch to final build, Grafica Studios transforms your retail ideas into impactful environments. With expert design, hands-on collaboration, and strong relationships with major malls, we help brands stand out—and succeed—in competitive retail spaces.
          </p>
          
          {/* CTA buttons */}
          <div className="mt-4 flex justify-center">
            <button className="group relative overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:scale-105 hover:bg-white/90">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
