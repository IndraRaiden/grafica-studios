"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import GlassmorphismCard from "./glassmorphism-card";
import { useRef } from "react";

export default function One() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for background image
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0.3]);
  
  // Content fade in effect - starts visible
  const contentOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [0.3, 0.8, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.05, 0.1], [50, 20, 0]);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: imageY, opacity: imageOpacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img
          src="/dreamstimefree_146511517.jpg"
          alt="Grafica Studios Background"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:px-8 lg:px-12"
      >
        <GlassmorphismCard>
          <div className="flex flex-col items-center gap-8">
          {/* Badge with custom design */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-950/50 to-purple-950/50 px-6 py-2 text-sm font-semibold text-blue-200 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              Welcome to Grafica Studios
            </span>
          </motion.div>
          
          {/* Main heading with custom styling */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="relative max-w-4xl"
          >
            {/* Decorative element */}
            <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-sm" />
            <h1 className="font-display text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Design That{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sells
                </span>
                <motion.span
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -right-8 -top-2"
                >
                  <Sparkles className="h-8 w-8 text-yellow-400" />
                </motion.span>
              </span>
              .{" "}
              <br />
              <span className="relative">
                Spaces That{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Speak
                </span>
                .
              </span>
            </h1>
          </motion.div>
          
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
          >
            From the first sketch to final build, Grafica Studios transforms your retail ideas into impactful environments. With expert design, hands-on collaboration, and strong relationships with major malls, we help brands stand out—and succeed—in competitive retail spaces.
          </motion.p>
          
          {/* CTA buttons with custom design */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.3 }}
            className="mt-4 flex flex-col gap-4 sm:flex-row"
          >
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-purple-500/70">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            <button className="group relative overflow-hidden rounded-full border-2 border-purple-500/50 bg-black/50 px-8 py-4 text-base font-bold text-white backdrop-blur-xl transition-all hover:scale-105 hover:border-purple-500">
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </motion.div>
        </div>
        </GlassmorphismCard>
      </motion.div>
    </section>
  );
}
