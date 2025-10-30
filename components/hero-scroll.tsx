"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import One from "./one";
import { useRef } from "react";

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values for parallax and fade effects
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);

  return (
    <>
      {/* Fixed Hero Image Background */}
      <motion.div 
        style={{ opacity: imageOpacity }}
        className="fixed inset-0 z-0 h-screen w-full"
      >
        <motion.div 
          style={{ scale: imageScale }}
          className="relative h-full w-full"
        >
          <Image
            src="/descarga (21).jpeg"
            alt="Grafica Studios Hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </motion.div>

      {/* Scrollable Content Container */}
      <div ref={containerRef} className="relative">
        {/* Spacer to allow scrolling */}
        <div className="h-screen" />

        {/* Content Section - Appears on scroll */}
        <motion.div
          style={{ 
            opacity: contentOpacity,
            y: contentY 
          }}
          className="relative z-10"
        >
          <One />
        </motion.div>
      </div>
    </>
  );
}
