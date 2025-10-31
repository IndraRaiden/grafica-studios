"use client";

import { Linkedin, Instagram, Image, Mail, MapPin } from "lucide-react";

export default function Footer() {

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
  ];

  const serviceLinks = [
    { name: "Services", href: "#services" },
  ];

  const companyLinks = [
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Pinterest", icon: Image, href: "https://pinterest.com" },
  ];

  return (
    <footer className="bg-zinc-950 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-light tracking-tight text-white md:text-6xl lg:text-7xl">
                Let's create something
                <span className="block font-bold mt-2">extraordinary</span>
              </h2>
              <p className="mt-6 max-w-xl text-base text-white/60 font-light">
                Transform your vision into reality with our creative expertise
              </p>
            </div>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden border border-white px-12 py-4 text-sm font-medium tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="relative z-10">GET IN TOUCH</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <a href="#" className="inline-block mb-8">
              <img src="/studios.svg" alt="Grafica Studios" className="h-10 w-auto brightness-0 invert" />
            </a>
            <p className="text-sm text-white/50 font-light leading-relaxed max-w-sm mb-8">
              A creative studio dedicated to crafting exceptional digital experiences through innovative design and strategic thinking.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 flex-shrink-0 text-white/40" />
                <span className="font-light">Available Nationwide</span>
              </div>
              <a 
                href="mailto:info@graficastudios.net" 
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white group"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-white/40 group-hover:text-white transition-colors" />
                <span className="font-light">info@graficastudios.net</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
              {/* Quick Links */}
              <div>
                <h4 className="text-xs font-medium tracking-widest text-white/40 uppercase mb-6">Navigate</h4>
                <ul className="space-y-4">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-sm text-white/70 font-light transition-colors hover:text-white inline-block relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-xs font-medium tracking-widest text-white/40 uppercase mb-6">Services</h4>
                <ul className="space-y-4">
                  {serviceLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-sm text-white/70 font-light transition-colors hover:text-white inline-block relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-xs font-medium tracking-widest text-white/40 uppercase mb-6">Company</h4>
                <ul className="space-y-4">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-sm text-white/70 font-light transition-colors hover:text-white inline-block relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
          <p className="text-xs text-white/40 font-light tracking-wide">
            © {new Date().getFullYear()} Grafica Studios. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-white/40 transition-all hover:text-white hover:scale-110"
              >
                <social.icon className="h-5 w-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
