"use client";

import { motion } from "framer-motion";
import { MapPin, Store, RefreshCw, Sparkles, Hammer } from "lucide-react";

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
    <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
      
      {/* Decorative lines */}
      <div className="absolute left-0 top-1/4 h-px w-1/3 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute right-0 top-3/4 h-px w-1/2 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-blue-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400">What We Do</h2>
          </div>
          <p className="font-display mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            We Handle It{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">All</span>
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 blur-sm" />
            </span>
            .<br />You Focus on Growing Your Brand.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.8, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring", bounce: 0.4 }}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-8 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Corner accent */}
              <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-blue-500/10 to-transparent" />
              <div className="absolute bottom-0 left-0 h-16 w-16 bg-gradient-to-tr from-purple-500/10 to-transparent" />
              
              {/* Icon with custom design */}
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                  <service.icon className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-zinc-400">
                  {service.description}
                </p>
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 blur-xl transition-opacity group-hover:opacity-20" />
              
              {/* Number indicator */}
              <div className="absolute right-4 top-4 text-6xl font-black text-white/5">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4, type: "spring", bounce: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            Explore Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
