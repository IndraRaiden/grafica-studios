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
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-100/40 via-transparent to-zinc-50/60 z-10" />
        <img
          src="/trial.jpg"
          alt="BlackStronghold Background"
          className="h-full w-full object-cover"
        />
      </motion.div>

      
      {/* Content - Always Visible */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-6">
          {/* Main heading */}
          <div className="relative max-w-5xl">
            <h1 className="text-6xl font-bold tracking-tight text-black sm:text-7xl lg:text-8xl">
              AI Software. Built to Scale Your Business.
            </h1>
          </div>

          {/* Subheading */}
          <p className="max-w-3xl text-lg leading-8 text-black/90 sm:text-xl">
            BlackStronghold builds AI-powered web apps that automate the work slowing you down — from lead capture and ticket triage to real-time tracking. Ready-to-deploy, built for results.
          </p>

          {/* CTA buttons */}
          <div className="mt-4 flex justify-center">
            <button className="group relative overflow-hidden rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-black/90">
              See Our Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
