"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import One from "./one";
import { useRef } from "react";

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Animation for the first image (fades out)
  const firstImageOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const firstImageScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.05]);

  // Animation for the second image (fades in)
  const secondImageOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

  
  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* First Background Image */}
        <motion.div
          style={{ opacity: firstImageOpacity, scale: firstImageScale }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/guard.jpg"
            alt="Grafica Studios Hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-zinc-950/30" />
        </motion.div>

        {/* The One component contains the second image and all the text content */}
        <One secondImageOpacity={secondImageOpacity} />
      </div>
    </div>
  );
}
