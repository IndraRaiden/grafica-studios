"use client";

import { motion } from "framer-motion";
import { MapPin, Store, RefreshCw, Sparkles, Hammer } from "lucide-react";
import GlassmorphismCard from "./glassmorphism-card";

export default function Two() {
  const services = [
    {
      title: "Consultation & Site Guidance",
      description: "Finding the right location is key to success. We consult with you from the start and connect you directly with mall leasing managers. Whether you're new to retail or ready to expand, our insights help you choose the best possible placement for traffic, visibility, and budget.",
      icon: MapPin
    },
    {
      title: "Retail Design",
      description: "Every space we design is created to reflect your brand and maximize usability. From kiosks and inline stores to complex custom builds, we blend aesthetics and functionality to craft retail environments that attract and convert customers.",
      icon: Store
    },
    {
      title: "Store Refurbishment",
      description: "Already have a store or kiosk? We can help you update it with a modern touch. Whether it's a full makeover or simple upgrades, we specialize in transforming existing spaces into fresh, engaging, and efficient experiences.",
      icon: RefreshCw
    },
    {
      title: "Branding & Identity",
      description: "Your logo is just the start. We build full branding systems—from signage and menus to packaging and interior graphics—that connect with your customers and elevate your presence. Whether you're building a new brand or refreshing an old one, we deliver cohesive, recognizable visuals.",
      icon: Sparkles
    },
    {
      title: "Build Execution",
      description: "We've partnered with experienced, vetted builders who know how to bring retail designs to life. With detailed plans and mall-compliant execution, we coordinate construction timelines and quality control to make sure your space is completed on schedule and to spec.",
      icon: Hammer
    }
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
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
                What We Do
              </span>
            </motion.div>

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.2, type: "spring", bounce: 0.3 }}
              className="relative max-w-4xl text-center"
            >
              <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-sm" />
              <h1 className="font-display text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                We Handle It{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    All
                  </span>
                </span>
                .{" "}
                <br />
                <span className="relative">
                  You Focus on{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                    Growing Your Brand
                  </span>
                  .
                </span>
              </h1>
            </motion.div>

            {/* Services grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.5 + index * 0.1, type: "spring", bounce: 0.4 }}
                  className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  {/* Icon with custom design */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-lg" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                      <service.icon className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {service.description}
                    </p>
                  </div>

                  {/* Number indicator */}
                  <div className="absolute right-3 top-3 text-4xl font-black text-white/5">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.3 }}
              className="mt-4"
            >
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-purple-500/70">
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </motion.div>
          </div>
        </GlassmorphismCard>
      </div>
    </section>
  );
}
