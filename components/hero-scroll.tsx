"use client";

import { useScroll, useSpring } from "framer-motion";
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

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <One progress={progress} />
      </div>
    </div>
  );
}
