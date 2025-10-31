import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassmorphismCard({ children, className = "" }: GlassmorphismCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {/* Main glassmorphism container */}
      <div className="relative overflow-hidden rounded-3xl">
        {/* Glass effect layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-white/[0.02]" />
        
        {/* Border effect */}
        <div className="absolute inset-0 rounded-3xl border border-white/[0.18] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)]" />
        
        {/* Noise texture for realism */}
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 p-12">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
