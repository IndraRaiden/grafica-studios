"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Image from "next/image";
import One from "./one";
import { useRef } from "react";

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "end end" → progress hits 1 exactly when the sticky frame releases,
    // so the full 0–1 range maps to the pinned screen time.
    offset: ["start start", "end end"],
  });

  // Spring-smoothed progress: every scroll-linked value glides instead of stepping
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  // Act I — guard.jpg: slow Ken Burns push-in, then dissolves with a soft defocus
  const firstImageOpacity = useTransform(progress, [0.18, 0.5], [1, 0]);
  const firstImageScale = useTransform(progress, [0, 0.5], [1, 1.18]);
  const firstImageBlurPx = useTransform(progress, [0.2, 0.5], [0, 10]);
  const firstImageBlur = useMotionTemplate`blur(${firstImageBlurPx}px)`;

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* First Background Image */}
        <motion.div
          style={{
            opacity: firstImageOpacity,
            scale: firstImageScale,
            filter: firstImageBlur,
          }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <Image
            src="/guard.jpg"
            alt="BlackStronghold Hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-zinc-950/30" />
        </motion.div>

        {/* The One component contains the second image and all the text content */}
        <One progress={progress} />
      </div>
    </div>
  );
}
