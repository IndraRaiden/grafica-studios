"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Phone, MapPin, Zap, Paperclip } from "lucide-react";

export default function Five() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
    file: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-black via-zinc-900 to-black py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Create Something Remarkable Together
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl">
            Have a retail vision or project in mind? Whether you need a kiosk, inline store, full brand package, or just expert advice, we're here to help. Reach out today for a free consultation or custom proposal.
          </p>
        </motion.div>

        {/* Contact form and options */}
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
            >
              <h3 className="font-display text-xl font-semibold text-white">Send Us a Message</h3>
              <p className="mt-2 text-sm text-zinc-400">Fill out the form and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 block w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 block w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 block w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-zinc-300">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    required
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="mt-2 block w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-zinc-300">
                    Upload File (Optional)
                  </label>
                  <div className="mt-2">
                    <label className="flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-800/30 px-4 py-6 transition-colors hover:border-cyan-500 hover:bg-zinc-800/50">
                      <div className="text-center">
                        <Paperclip className="mx-auto h-8 w-8 text-zinc-500" />
                        <div className="mt-2 text-sm text-zinc-400">
                          {formData.file ? formData.file.name : "Click to upload or drag and drop"}
                        </div>
                        <div className="mt-1 text-xs text-zinc-500">PDF, PNG, JPG up to 10MB</div>
                      </div>
                      <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.png,.jpg,.jpeg"
                      />
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-white px-6 py-3 text-base font-semibold text-black shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Contact Us
                </button>
              </form>
            </motion.div>

            {/* Alternative Options */}
            <div className="space-y-6">
              {/* Schedule a Call */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-white/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 ring-1 ring-inset ring-white/30">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-white">Schedule a Discovery Call</h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      Book a 30-minute consultation to discuss your project in detail.
                    </p>
                    <button className="mt-4 rounded-full border border-white/50 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/20">
                      Book a Call
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Direct Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
              >
                <h3 className="font-display text-lg font-semibold text-white">Other Ways to Reach Us</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-5 w-5 text-white" />
                    <a href="mailto:info@graficastudios.com" className="text-zinc-400 hover:text-white">
                      info@graficastudios.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-5 w-5 text-white" />
                    <a href="tel:+15551234567" className="text-zinc-400 hover:text-white">
                      (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-5 w-5 text-white" />
                    <span className="text-zinc-400">
                      Available Nationwide
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="rounded-2xl border border-zinc-800 bg-white/10 p-6 ring-1 ring-inset ring-white/20"
              >
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-white" />
                  <div>
                    <div className="font-display font-semibold text-white">Fast Response Time</div>
                    <div className="text-sm text-zinc-400">We typically respond within 24 hours</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
