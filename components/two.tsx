"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const [selectedService, setSelectedService] = useState(services[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      
      if (isInView) {
        // Check if we haven't gone through all services yet
        if (e.deltaY > 0 && currentIndex < services.length - 1) {
          e.preventDefault();
          setCurrentIndex(prev => prev + 1);
          setSelectedService(services[currentIndex + 1]);
        } else if (e.deltaY < 0 && currentIndex > 0) {
          e.preventDefault();
          setCurrentIndex(prev => prev - 1);
          setSelectedService(services[currentIndex - 1]);
        }
        // If at the last service and scrolling down, allow normal scroll
        // If at the first service and scrolling up, allow normal scroll
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex, services]);

  return (
    <section ref={sectionRef} id="services" className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <GlassmorphismCard className="w-full">
          <div className="flex flex-col items-center gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
            >
              <span className="relative inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/50 px-6 py-2 text-sm font-semibold text-white">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                </span>
                What We Do
              </span>
            </motion.div>

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative max-w-4xl text-center"
            >
              <h1 className="font-display text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                We Handle It <span className="text-white">All</span>. <br />
                You Focus on <span className="text-white">Growing Your Brand</span>.
              </h1>
            </motion.div>

            {/* Interactive Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3"
            >
              {/* Left Column: Service List */}
              <div className="flex flex-col gap-2">
                {services.map((service, index) => (
                  <motion.button
                    key={service.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    onClick={() => setSelectedService(service)}
                    className={`relative rounded-lg px-4 py-3 text-left text-base font-semibold transition-all duration-300 ${selectedService.title === service.title ? 'bg-white/10 text-white' : 'text-zinc-400 hover:bg-white/5'}`}
                  >
                    {service.title}
                    {selectedService.title === service.title && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Right Column: Service Details */}
              <div className="relative lg:col-span-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedService.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex flex-col gap-6"
                  >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-white/30 bg-white/10">
                      <selectedService.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {selectedService.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-zinc-300">
                        {selectedService.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8"
            >
              <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-base font-bold text-black shadow-2xl shadow-white/50 transition-all hover:scale-105 hover:shadow-white/70">
                <span className="relative z-10">Start Your Project</span>
              </button>
            </motion.div>
          </div>
        </GlassmorphismCard>
      </div>
    </section>
  );
}
