"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Image, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
    { name: "About", href: "#about" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Pinterest", icon: Image, href: "https://pinterest.com" }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      {/* Animated top border */}
      <div className="relative h-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="relative inline-block">
              <h3 className="font-display text-3xl font-black text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Grafica</span>
                {" "}Studios
              </h3>
              <div className="absolute -bottom-1 left-0 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 blur-sm" />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              Transforming retail ideas into impactful environments. Design that sells, spaces that speak.
            </p>
            
            {/* Social Media with custom design */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label={social.name}
                >
                  <social.icon className="relative z-10 h-5 w-5 text-zinc-400 transition-colors group-hover:text-blue-400" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-20" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, type: "spring", bounce: 0.3 }}
            className="lg:col-span-1"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring", bounce: 0.3 }}
            className="lg:col-span-1"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="mailto:info@graficastudios.net"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@graficastudios.net</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-400">
                <MapPin className="h-4 w-4" />
                <span>Available Nationwide</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.45, type: "spring", bounce: 0.3 }}
            className="lg:col-span-1"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h4>
            <p className="mt-4 text-sm text-zinc-400">
              Stay updated with our latest projects and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-zinc-800 pt-8">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Grafica Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
