"use client";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 sm:px-8 lg:px-12 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/studios.svg" alt="Grafica Studios" className="h-12 w-auto" />
        </div>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-semibold text-white transition-colors hover:text-white/80"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
