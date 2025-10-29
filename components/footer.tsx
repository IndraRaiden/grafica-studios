"use client";

import { useState } from "react";

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
    { name: "LinkedIn", icon: "💼", href: "https://linkedin.com" },
    { name: "Instagram", icon: "📷", href: "https://instagram.com" },
    { name: "Pinterest", icon: "📌", href: "https://pinterest.com" }
  ];

  return (
    <footer className="relative bg-black">
      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white">Grafica Studios</h3>
            <p className="mt-4 text-sm text-zinc-400">
              Transforming retail ideas into impactful environments. Design that sells, spaces that speak.
            </p>
            
            {/* Social Media */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-lg transition-all hover:border-zinc-700 hover:bg-zinc-800"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
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
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="mailto:info@graficastudios.net"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <span>📧</span>
                  <span>info@graficastudios.net</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <span>📞</span>
                  <span>(555) 123-4567</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-400">
                <span>📍</span>
                <span>Available Nationwide</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
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
          </div>
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
